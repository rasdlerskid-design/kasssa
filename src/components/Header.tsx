import { useEffect, useState } from 'react';
import { Send, Menu, X } from 'lucide-react';

const LINKS = [
  { href: '#catalog', label: 'Каталог' },
  { href: '#select', label: 'Индивидуальный подбор' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span
            className={`font-display text-2xl tracking-[0.25em] transition-colors duration-500 ${
              scrolled ? 'text-graphite' : 'text-ivory'
            }`}
          >
            MINERALE
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] uppercase tracking-[0.18em] transition-colors duration-300 hover:text-gold ${
                scrolled ? 'text-graphite' : 'text-ivory'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://t.me/minerale"
            target="_blank"
            rel="noreferrer"
            className={`hidden items-center gap-2 border px-5 py-2.5 text-[13px] uppercase tracking-[0.15em] transition-all duration-300 sm:flex ${
              scrolled
                ? 'border-graphite/30 text-graphite hover:border-gold hover:text-gold'
                : 'border-ivory/40 text-ivory hover:border-gold hover:text-gold'
            }`}
          >
            <Send size={15} strokeWidth={1.5} />
            Telegram
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Меню"
            className={`lg:hidden ${scrolled ? 'text-graphite' : 'text-ivory'}`}
          >
            {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-line bg-ivory lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-sm uppercase tracking-[0.18em] text-graphite last:border-0 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://t.me/minerale"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 border border-graphite/30 px-5 py-3 text-[13px] uppercase tracking-[0.15em] text-graphite"
            >
              <Send size={15} strokeWidth={1.5} />
              Telegram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
