import { Send, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacts" className="scroll-mt-24 bg-graphite">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-[0.25em] text-ivory">MINERALE</p>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-ivory/60">
              Галерея редких природных минералов. Ручной отбор, гарантия
              подлинности, доставка по всему миру.
            </p>
          </div>

          <div>
            <h3 className="text-[12px] uppercase tracking-[0.3em] text-gold">Контакты</h3>
            <ul className="mt-5 space-y-3 text-sm font-light text-ivory/80">
              <li>
                <a
                  href="tel:+79000000000"
                  className="inline-flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Phone size={15} strokeWidth={1.5} className="text-gold" />
                  +7 (900) 000-00-00
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/minerale"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <Send size={15} strokeWidth={1.5} className="text-gold" />
                  Telegram: @minerale
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/79000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <MessageCircle size={15} strokeWidth={1.5} className="text-gold" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] uppercase tracking-[0.3em] text-gold">Разделы</h3>
            <ul className="mt-5 space-y-3 text-sm font-light text-ivory/80">
              <li><a href="#catalog" className="transition-colors hover:text-gold">Каталог</a></li>
              <li><a href="#select" className="transition-colors hover:text-gold">Индивидуальный подбор</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-[12px] uppercase tracking-[0.15em] text-ivory/40 sm:flex-row">
          <p>© {new Date().getFullYear()} MINERALE. Все права защищены.</p>
          <p>Москва · выездные показы по записи</p>
        </div>
      </div>
    </footer>
  );
}
