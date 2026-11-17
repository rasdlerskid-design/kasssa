import { Send, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
      <img
        src="https://images.pexels.com/photos/5071329/pexels-photo-5071329.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Кристаллы минералов крупным планом"
        className="animate-fade-in absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/60 to-graphite/30" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 sm:px-8 sm:pb-28">
        <div className="max-w-2xl">
          <p className="animate-fade-up mb-6 text-[12px] uppercase tracking-[0.35em] text-gold">
            Галерея природных минералов
          </p>
          <h1
            className="animate-fade-up font-display text-5xl leading-[1.1] text-ivory sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.15s' }}
          >
            Натуральные минералы и камни
          </h1>
          <p
            className="animate-fade-up mt-7 max-w-xl text-base font-light leading-relaxed text-ivory/80 sm:text-lg"
            style={{ animationDelay: '0.3s' }}
          >
            Камни и минералы, созданные землёй за миллионы лет
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: '0.45s' }}
          >
            <a
              href="#catalog"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-graphite transition-all duration-300 hover:bg-goldLight"
            >
              Смотреть каталог
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://wa.me/70000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-ivory/40 px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="h-14 w-px animate-pulse bg-ivory/40" />
      </div>
    </section>
  );
}
