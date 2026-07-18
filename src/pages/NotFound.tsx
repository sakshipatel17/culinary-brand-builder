import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function NotFound() {
  return (
    <>
      <SEO title="404 | Heirloom Culinary" description="The page you requested could not be found." />
      <section className="flex min-h-[70vh] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-terracotta">404</p>
          <h1 className="mt-4 font-display text-5xl text-forest sm:text-6xl">Page not found</h1>
          <p className="mt-6 text-lg leading-8 text-ink/70">The page you are looking for has moved or no longer exists. Return to the studio and explore the latest work.</p>
          <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream">
            <ArrowLeft size={16} /> Return Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
