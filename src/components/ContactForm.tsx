import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_s83o9tq', // Your Service ID
        'np8dmxx', // Your Template ID
        form.current,
        'VYUN_C-C3YKuhmc-P' // Your Public Key
      );

      setSubmitStatus({
        message: 'Message sent successfully!',
        isError: false,
      });
      form.current.reset();
    } catch (error) {
      setSubmitStatus({
        message: 'Failed to send message. Please try again.',
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        
        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus && (
          <div
            className={`mt-4 p-4 rounded-md ${
              submitStatus.isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
