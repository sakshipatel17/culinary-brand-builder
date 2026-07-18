import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
        <Sparkles size={18} />
      </div>
      <div>
        <p className="font-display text-2xl tracking-wide text-forest">Heirloom Culinary</p>
        <p className="text-xs uppercase tracking-[0.35em] text-terracotta">Cultivating Excellence</p>
      </div>
    </Link>
  );
}

export default Logo;
