'use client';

import { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';

const CONTACT_TYPES = ['案件相談', '採用', 'その他'];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    types: [] as string[],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', types: [], message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleTypeChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type],
    }));
  };

  return (
    <section id="contact" className="px-8 py-16 max-w-[1440px] mx-auto">
      <SectionTitle title="Contact" />
      
      <div className="bg-[#121827] border border-blue-500 rounded-xl p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm text-slate-300">お名前 <span className="text-red-500">*</span></label>
              <input
                required
                type="text"
                placeholder="山田 太郎"
                className="w-full bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-slate-300">所属（任意）</label>
              <input
                type="text"
                placeholder="株式会社〇〇"
                className="w-full bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-slate-300">メールアドレス <span className="text-red-500">*</span></label>
            <input
              required
              type="email"
              placeholder="example@email.com"
              className="w-full bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-4">
            <label className="text-sm text-slate-300">種別 <span className="text-slate-500 text-xs">（1つ以上選択推奨）</span></label>
            <div className="flex flex-wrap gap-6">
              {CONTACT_TYPES.map((type) => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={formData.types.includes(type)}
                      onChange={() => handleTypeChange(type)}
                    />
                    <div className="w-5 h-5 border-2 border-slate-600 rounded peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-all" />
                    <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-slate-300">メッセージ <span className="text-red-500">*</span></label>
            <textarea
              required
              placeholder="お問い合わせ内容をご記入ください"
              className="w-full bg-[#1e293b] border border-slate-700 rounded-lg p-3 text-slate-100 min-h-[180px] focus:outline-none focus:border-blue-500 transition-colors resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              disabled={status === 'loading'}
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-medium py-3 px-12 rounded-lg transition-all active:scale-95"
            >
              {status === 'loading' ? '送信中...' : '送信する'}
            </button>
            
            {status === 'success' && (
              <p className="text-green-400 text-sm animate-fade-in">お問い合わせを送信しました。ありがとうございます！</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm animate-fade-in">エラーが発生しました。時間をおいて再度お試しください。</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
