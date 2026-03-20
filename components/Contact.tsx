
import React, { useState } from 'react';
import { Language } from '../types';
import { Send, Mail, Loader2, CheckCircle2, AlertCircle, MapPin, Facebook, Youtube, Music2, Instagram, MessageCircle, ExternalLink } from 'lucide-react';

interface ContactProps {
  language: Language;
  onBack?: () => void;
}

const Contact: React.FC<ContactProps> = ({ language, onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Suggestion',
    message: ''
  });

  const t = {
    title: language === 'EN' ? 'Get in Touch' : 'අපව අමතන්න',
    subtitle: language === 'EN' ? 'We would love to hear from you. Send us a message and we will get back to you soon.' : 'ඔබේ අදහස් අපට වැදගත්. අපට පණිවිඩයක් එවන්න, අපි ඉක්මනින්ම ඔබව සම්බන්ධ කරගන්නෙමු.',
    name: language === 'EN' ? 'Full Name' : 'සම්පූර්ණ නම',
    email: language === 'EN' ? 'Email Address' : 'විද්‍යුත් තැපෑල',
    subject: language === 'EN' ? 'Subject' : 'මාතෘකාව',
    message: language === 'EN' ? 'Message' : 'පණිවිඩය',
    submit: language === 'EN' ? 'Send Message' : 'පණිවිඩය යවන්න',
    success: language === 'EN' ? 'Message sent successfully!' : 'පණිවිඩය සාර්ථකව යවන ලදී!',
    error: language === 'EN' ? 'Failed to send message. Please try again or use WhatsApp.' : 'පණිවිඩය යැවීම අසාර්ථක විය. කරුණාකර නැවත උත්සාහ කරන්න හෝ WhatsApp භාවිතා කරන්න.',
    back: language === 'EN' ? 'Back to Home' : 'ආපසු',
    followUs: language === 'EN' ? 'Follow Our Journey' : 'අප හා එක්වන්න',
  };

  const socialLinks = [
    { icon: <Facebook size={18} />, url: 'https://www.facebook.com/share/1DJJ35Hq4k/', label: 'Facebook' },
    { icon: <Youtube size={18} />, url: 'https://www.youtube.com/@TravelHublk-123', label: 'YouTube' },
    { icon: <Music2 size={18} />, url: 'https://vm.tiktok.com/ZS91cdnNLXNp3-gURJB/', label: 'TikTok' },
    { icon: <Instagram size={18} />, url: '#', label: 'Instagram' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch("https://formspree.io/f/xpwzprow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _to: "slisuruniroshan@gmail.com",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: 'Suggestion', message: '' });
      } else {
        throw new Error("Submission failed.");
      }
    } catch (err: any) {
      setError(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello Travel Hub! My name is ${formData.name}. ${formData.message}`;
    window.open(`https://wa.me/94761002459?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleManualEmail = () => {
    const mailto = `mailto:slisuruniroshan@gmail.com?subject=${formData.subject}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-16 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-8 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            ← {t.back}
          </button>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">{t.title}</h1>
              <p className="text-slate-600 leading-relaxed">{t.subtitle}</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white text-blue-600 rounded-xl shadow-sm border border-slate-100 group-hover:bg-blue-50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.email}</h3>
                  <p className="font-medium text-sm sm:text-base">slisuruniroshan@gmail.com</p>
                </div>
              </div>

              <button 
                onClick={handleWhatsApp}
                className="w-full flex items-center gap-4 group text-left"
              >
                <div className="p-3 bg-white text-green-600 rounded-xl shadow-sm border border-slate-100 group-hover:bg-green-50 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp</h3>
                  <p className="font-medium text-green-600">076 100 2459</p>
                </div>
              </button>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white text-blue-600 rounded-xl shadow-sm border border-slate-100 group-hover:bg-blue-50 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</h3>
                  <p className="font-medium">Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">{t.followUs}</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all text-sm font-medium shadow-sm"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-green-50 border border-green-100 rounded-2xl text-green-800">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="text-xl font-bold mb-2">{language === 'EN' ? 'Success!' : 'සාර්ථකයි!'}</h4>
                <p className="font-medium opacity-80">{t.success}</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 px-8 py-2 bg-green-600 text-white rounded-lg text-sm font-bold hover:bg-green-700 transition-colors"
                >
                  {language === 'EN' ? 'Send Another' : 'තවත් පණිවිඩයක්'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-5 bg-red-50 border border-red-100 rounded-2xl space-y-4">
                    <div className="flex items-center gap-3 text-red-800">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p className="text-sm font-medium">{error}</p>
                    </div>
                    <button 
                      type="button"
                      onClick={handleManualEmail}
                      className="w-full py-2 bg-white border border-red-200 text-red-600 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Send via Email App
                    </button>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">{t.name}</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">{t.email}</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">{t.subject}</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({...prev, subject: e.target.value}))}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none appearance-none cursor-pointer transition-all"
                  >
                    <option>Suggestion</option>
                    <option>Feedback</option>
                    <option>Itinerary Archival</option>
                    <option>Collaboration Request</option>
                    <option>Technical Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">{t.message}</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white outline-none resize-none transition-all"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-slate-800 hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:bg-slate-300"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
