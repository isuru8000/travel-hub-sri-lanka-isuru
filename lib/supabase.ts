
import { createClient } from '@supabase/supabase-js';

/**
 * Robust environment variable lookup for different deployment contexts.
 */
const getEnv = (key: string): string => {
  if (typeof window !== 'undefined' && (window as any).process?.env?.[key]) {
    return (window as any).process.env[key];
  }
  // @ts-ignore - Handle Vite env
  if (import.meta.env?.[key]) {
    // @ts-ignore
    return import.meta.env[key];
  }
  return '';
};

const VITE_SUPABASE_URL = getEnv('VITE_SUPABASE_URL');
const VITE_SUPABASE_ANON_KEY = getEnv('VITE_SUPABASE_ANON_KEY');

// Check if we are missing real keys or using placeholders
export const IS_MOCK_AUTH = !VITE_SUPABASE_URL || !VITE_SUPABASE_ANON_KEY || VITE_SUPABASE_URL.includes('placeholder');

/**
 * Creates a stable mock Supabase client for environments without configured secrets.
 */
const createMockClient = () => ({
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    onAuthStateChange: (callback: any) => {
      // Allow manual triggering for demo purposes in local development
      (window as any).__triggerMockLogin = (userData: any) => {
        callback('SIGNED_IN', { 
          session: { 
            user: userData,
            access_token: 'mock-token',
            refresh_token: 'mock-refresh'
          } 
        });
      };
      return { data: { subscription: { unsubscribe: () => {} } } };
    },
    signInWithOAuth: () => {
      console.warn("Attempting OAuth in Mock Mode. Triggering demo session instead.");
      if ((window as any).__triggerMockLogin) {
        (window as any).__triggerMockLogin({
          id: 'demo-user-123',
          email: 'explorer@travelhub.lk',
          user_metadata: {
            full_name: 'Lanka Explorer',
            avatar_url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'
          }
        });
      }
      return Promise.resolve({ data: {}, error: null });
    },
    signOut: () => Promise.resolve({ error: null }),
  }
} as any);

/**
 * Initialize Supabase client with safety guard.
 */
const createSafeClient = () => {
  if (IS_MOCK_AUTH) {
    console.warn('Supabase credentials missing. Travel Hub is running in MOCK AUTH mode.');
    return createMockClient();
  }

  try {
    return createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
  } catch (err) {
    console.error('Supabase initialization failed, falling back to mock:', err);
    return createMockClient();
  }
};

export const supabase = createSafeClient();
