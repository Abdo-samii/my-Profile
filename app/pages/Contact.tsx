"use client";
import React, { useState } from "react";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    subject: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateFormData = () => {
    const { email, subject, message } = formData;
    if (!email || !subject || !message) {
      setFeedbackMessage('جميع الحقول مطلوبة.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFeedbackMessage('يرجى إدخال بريد إلكتروني صالح.');
      return false;
    }
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateFormData()) return;
    setIsLoading(true);
    setFeedbackMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const contentType = response.headers.get('content-type');
      if (!response.ok) {
        setFeedbackMessage('فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
      } else if (contentType && contentType.includes('application/json')) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const data = await response.json();
        setFeedbackMessage('  Message sent successfully!');
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setFeedbackMessage('استجابة غير متوقعة من الخادم.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setFeedbackMessage('An error occurred while saving the message.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-t from-purple-800/50 via-indigo-900/50 to-purple-800/50 text-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
        {feedbackMessage && <p className="text-center mb-4">{feedbackMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg font-semibold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter your subject"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-gradient-to-t from-purple-800  to-indigo-800 hover:from-indigo-800 hover:-translate-y-2 hover:to-purple-800  text-white font-bold text-lg transition duration-300"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
