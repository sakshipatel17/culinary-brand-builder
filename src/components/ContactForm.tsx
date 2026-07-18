import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from 'emailjs-com';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Please enter a valid email.'),
  company: z.string().optional(),
  message: z.string().min(10, 'Share a few details so we can create the right plan.'),
});

type FormData = z.infer<typeof schema>;

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const shouldReduceMotion = useReducedMotion();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, { ...data, to_name: 'Heirloom Culinary' }, publicKey);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="rounded-[2rem] border border-forest/10 bg-white p-6 shadow-premium sm:p-8">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-forest">Name</label>
            <motion.input
              {...register('name')}
              whileFocus={shouldReduceMotion ? undefined : { scale: 1.01, boxShadow: '0 0 0 4px rgba(207, 162, 74, 0.16)' }}
              transition={{ duration: 0.2 }}
              className="w-full rounded-2xl border border-forest/15 bg-cream px-4 py-3 outline-none ring-0"
            />
            {errors.name && <p className="mt-1 text-sm text-terracotta">{errors.name.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-forest">Email</label>
            <motion.input
              {...register('email')}
              whileFocus={shouldReduceMotion ? undefined : { scale: 1.01, boxShadow: '0 0 0 4px rgba(207, 162, 74, 0.16)' }}
              transition={{ duration: 0.2 }}
              className="w-full rounded-2xl border border-forest/15 bg-cream px-4 py-3 outline-none ring-0"
            />
            {errors.email && <p className="mt-1 text-sm text-terracotta">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-forest">Restaurant or Brand</label>
          <motion.input
            {...register('company')}
            whileFocus={shouldReduceMotion ? undefined : { scale: 1.01, boxShadow: '0 0 0 4px rgba(207, 162, 74, 0.16)' }}
            transition={{ duration: 0.2 }}
            className="w-full rounded-2xl border border-forest/15 bg-cream px-4 py-3 outline-none ring-0"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-forest">Project Brief</label>
          <motion.textarea
            {...register('message')}
            rows={5}
            whileFocus={shouldReduceMotion ? undefined : { scale: 1.01, boxShadow: '0 0 0 4px rgba(207, 162, 74, 0.16)' }}
            transition={{ duration: 0.2 }}
            className="w-full rounded-2xl border border-forest/15 bg-cream px-4 py-3 outline-none ring-0"
          />
          {errors.message && <p className="mt-1 text-sm text-terracotta">{errors.message.message}</p>}
        </div>
        <motion.button
          type="submit"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition hover:opacity-90"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? <><Loader2 className="animate-spin" size={16} /> Sending</> : <>Request a Consultation <ArrowRight size={16} /></>}
        </motion.button>
        {status === 'success' && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-forest">
            <CheckCircle2 size={16} /> Your request is on its way. We will reply within 48 hours.
          </motion.div>
        )}
        {status === 'error' && <p className="text-sm text-terracotta">EmailJS is not configured yet. Add your service, template, and public key to the environment variables to enable live delivery.</p>}
      </form>
    </div>
  );
}

export default ContactForm;
