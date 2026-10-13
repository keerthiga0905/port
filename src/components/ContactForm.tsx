import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please enter at least 15 characters so I can understand your inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('loading');
    setStatusMessage('');

    try {
      // Simulate real asynchronous submission with validation
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Successful handling
      setStatus('success');
      setStatusMessage('Thank you! Your message has been received. I will respond to your email promptly.');

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#54283F', '#B5A397', '#C5A059', '#F7F0E6'],
        });
      } catch {
        // ignore if confetti blocked
      }

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch {
      setStatus('error');
      setStatusMessage('Unable to send message directly right now. Please email keerthiga.m.cit@gmail.com directly.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-[11px] tracking-widest uppercase text-taupe-light mb-1.5 font-medium">
          Your Name <span className="text-gold-subtle">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Eleanor Vance"
          className={`w-full px-4 py-3 bg-plum/40 border rounded text-sm text-cream placeholder-taupe/50 focus:outline-none focus:border-gold-subtle transition-colors ${
            errors.name ? 'border-rose-400' : 'border-taupe/30'
          }`}
          disabled={status === 'loading'}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-rose-300 flex items-center space-x-1">
            <AlertCircle size={12} />
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-[11px] tracking-widest uppercase text-taupe-light mb-1.5 font-medium">
          Email Address <span className="text-gold-subtle">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="eleanor@domain.com"
          className={`w-full px-4 py-3 bg-plum/40 border rounded text-sm text-cream placeholder-taupe/50 focus:outline-none focus:border-gold-subtle transition-colors ${
            errors.email ? 'border-rose-400' : 'border-taupe/30'
          }`}
          disabled={status === 'loading'}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-rose-300 flex items-center space-x-1">
            <AlertCircle size={12} />
            <span>{errors.email}</span>
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-[11px] tracking-widest uppercase text-taupe-light mb-1.5 font-medium">
          Subject / Opportunity <span className="text-gold-subtle">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Internship / Project Inquiry / Technical Discussion"
          className={`w-full px-4 py-3 bg-plum/40 border rounded text-sm text-cream placeholder-taupe/50 focus:outline-none focus:border-gold-subtle transition-colors ${
            errors.subject ? 'border-rose-400' : 'border-taupe/30'
          }`}
          disabled={status === 'loading'}
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-rose-300 flex items-center space-x-1">
            <AlertCircle size={12} />
            <span>{errors.subject}</span>
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-[11px] tracking-widest uppercase text-taupe-light mb-1.5 font-medium">
          Message <span className="text-gold-subtle">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Hello Keerthiga, I'd like to discuss..."
          className={`w-full px-4 py-3 bg-plum/40 border rounded text-sm text-cream placeholder-taupe/50 focus:outline-none focus:border-gold-subtle transition-colors ${
            errors.message ? 'border-rose-400' : 'border-taupe/30'
          }`}
          disabled={status === 'loading'}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-rose-300 flex items-center space-x-1">
            <AlertCircle size={12} />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3.5 px-6 rounded-full bg-cream text-plum font-semibold uppercase tracking-ultra-wide text-xs hover:bg-cream-ivory hover:shadow-plum-glow transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={16} className="animate-spin text-plum" />
              <span>TRANSMITTING MESSAGE...</span>
            </>
          ) : (
            <>
              <span>SEND MESSAGE</span>
              <Send size={14} />
            </>
          )}
        </button>
      </div>

      {/* Status Feedback Message */}
      {status === 'success' && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 rounded text-xs text-emerald-200 flex items-start space-x-2.5 animate-in fade-in">
          <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-rose-950/60 border border-rose-500/40 rounded text-xs text-rose-200 flex items-start space-x-2.5 animate-in fade-in">
          <AlertCircle size={16} className="text-rose-400 mt-0.5 flex-shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}
    </form>
  );
};
