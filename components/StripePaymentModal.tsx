import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { X, ShieldCheck, CreditCard, Lock } from 'lucide-react';

// Initialize Stripe only if a key is present, otherwise we'll use mock mode
const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripePromise = stripePublicKey ? loadStripe(stripePublicKey) : null;

interface StripePaymentModalProps {
  amount: number;
  onSuccess: () => void;
  onClose: () => void;
  title: string;
}

const CheckoutForm: React.FC<{ onSuccess: () => void; amount: number }> = ({ onSuccess, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin,
      },
      redirect: 'if_required',
    });

    if (submitError) {
      setError(submitError.message || 'An error occurred');
      setProcessing(false);
    } else {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
        <PaymentElement />
      </div>
      
      {error && <div className="text-red-500 text-sm">{error}</div>}
      
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full py-4 bg-[#0EA5E9] text-white rounded-xl font-bold uppercase tracking-wider hover:bg-[#0284c7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {processing ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Processing...
          </>
        ) : (
          <>
            <CreditCard size={20} />
            Pay ${amount}
          </>
        )}
      </button>
      
      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
        <ShieldCheck size={14} className="text-green-500" />
        <span>Payments secured by Stripe</span>
      </div>
    </form>
  );
};

const MockPaymentForm: React.FC<{ onSuccess: () => void; amount: number }> = ({ onSuccess, amount }) => {
  const [processing, setProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // Simulate network delay
    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 1500);
  };

  // Format card number with spaces
  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').substring(0, 16);
    const parts = [];
    for (let i = 0; i < value.length; i += 4) {
      parts.push(value.substring(i, i + 4));
    }
    setCardNumber(parts.join(' '));
  };

  // Format expiry date
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (value.length >= 2) {
      setExpiry(`${value.substring(0, 2)}/${value.substring(2)}`);
    } else {
      setExpiry(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 space-y-4">
        <div className="flex items-center gap-2 mb-2 text-yellow-500 text-xs bg-yellow-500/10 p-2 rounded-lg">
          <Lock size={12} />
          <span>Test Mode: No real money will be charged</span>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-gray-400">Card Number</label>
          <div className="relative">
            <input 
              type="text" 
              value={cardNumber}
              onChange={handleCardChange}
              placeholder="4242 4242 4242 4242"
              className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#0EA5E9] transition-colors font-mono"
              required
            />
            <CreditCard size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-400">Expiry</label>
            <input 
              type="text" 
              value={expiry}
              onChange={handleExpiryChange}
              placeholder="MM/YY"
              className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#0EA5E9] transition-colors font-mono"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-400">CVC</label>
            <input 
              type="text" 
              value={cvc}
              onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').substring(0, 3))}
              placeholder="123"
              className="w-full bg-black/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#0EA5E9] transition-colors font-mono"
              required
            />
          </div>
        </div>
      </div>
      
      <button
        type="submit"
        disabled={processing}
        className="w-full py-4 bg-[#0EA5E9] text-white rounded-xl font-bold uppercase tracking-wider hover:bg-[#0284c7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {processing ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Processing...
          </>
        ) : (
          <>
            <CreditCard size={20} />
            Pay ${amount}
          </>
        )}
      </button>
      
      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
        <ShieldCheck size={14} className="text-green-500" />
        <span>Secure Mock Payment</span>
      </div>
    </form>
  );
};

const StripePaymentModal: React.FC<StripePaymentModalProps> = ({ amount, onSuccess, onClose, title }) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isMock, setIsMock] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency: "usd" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.mock) {
          setIsMock(true);
        } else {
          setClientSecret(data.clientSecret);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to init payment", err);
        // Fallback to mock on error
        setIsMock(true);
        setLoading(false);
      });
  }, [amount]);

  const appearance = {
    theme: 'night' as const,
    variables: {
      colorPrimary: '#0EA5E9',
      colorBackground: '#1e1e1e',
      colorText: '#ffffff',
    },
  };

  const options = {
    clientSecret: clientSecret || '',
    appearance,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#141414] w-full max-w-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-1">Total Amount</p>
            <p className="text-3xl font-bold text-white">${amount}</p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-2 border-[#0EA5E9] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : isMock ? (
            <MockPaymentForm onSuccess={onSuccess} amount={amount} />
          ) : clientSecret && stripePromise ? (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm onSuccess={onSuccess} amount={amount} />
            </Elements>
          ) : (
            <div className="text-center py-8 text-red-400">
              <p>Configuration Error: Unable to load payment system.</p>
              <button 
                onClick={() => setIsMock(true)}
                className="mt-4 text-sm text-[#0EA5E9] underline"
              >
                Try Test Mode
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StripePaymentModal;
