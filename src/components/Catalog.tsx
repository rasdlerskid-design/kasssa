import { useEffect, useState } from 'react';
import { X, Ruler, Scale, MapPin, Send } from 'lucide-react';
import type { Mineral } from '@/data/minerals';
import { MINERALS, CATEGORIES, type MineralCategory } from '@/data/minerals';

const formatPrice = (n: number) => n.toLocaleString('ru-RU') + ' ₽';

function MineralModal({ mineral, onClose }: { mineral: Mineral; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-graphite/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-ivory"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-ivory/90 text-graphite transition-colors hover:text-gold"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
        <div className="grid md:grid-cols-2">
          <div className="flex min-h-[360px] items-center justify-center overflow-hidden bg-graphite p-4 md:min-h-[560px]">
            <img
              src={mineral.image}
              alt={mineral.name}
              className="max-h-[70vh] max-w-full object-contain"
            />
          </div>
          <div className="flex flex-col p-7 sm:p-9">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              {CATEGORIES.find((c) => c.id === mineral.category)?.label}
            </p>
            <h3 className="font-display mt-3 text-3xl text-graphite sm:text-4xl">
              {mineral.name}
            </h3>
            <p className="mt-5 text-sm font-light leading-relaxed text-stoneWarm">
              {mineral.description}
            </p>

            <dl className="mt-7 space-y-3 border-t border-line pt-6 text-sm">
              <div className="flex items-center gap-3 text-graphite">
                <MapPin size={16} strokeWidth={1.5} className="text-gold" />
                <dt className="w-24 text-stoneWarm">Месторождение</dt>
                <dd>{mineral.origin}</dd>
              </div>
              <div className="flex items-center gap-3 text-graphite">
                <Scale size={16} strokeWidth={1.5} className="text-gold" />
                <dt className="w-24 text-stoneWarm">Вес</dt>
                <dd>{mineral.weight}</dd>
              </div>
              <div className="flex items-center gap-3 text-graphite">
                <Ruler size={16} strokeWidth={1.5} className="text-gold" />
                <dt className="w-24 text-stoneWarm">Размеры</dt>
                <dd>{mineral.size}</dd>
              </div>
            </dl>

            <p className="mt-7 font-display text-2xl text-graphite">
              {formatPrice(mineral.price)}
            </p>
            <a
              href={`https://t.me/minerale?text=Здравствуйте! Интересует экземпляр «${mineral.name}»`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-3 bg-graphite px-7 py-4 text-[13px] uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:bg-gold hover:text-graphite"
            >
              <Send size={15} strokeWidth={1.5} />
              Запросить видео / Купить
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Catalog() {
  const [filter, setFilter] = useState<MineralCategory | 'all'>('all');
  const [selected, setSelected] = useState<Mineral | null>(null);

  const items = filter === 'all' ? MINERALS : MINERALS.filter((m) => m.category === filter);

  return (
    <section id="catalog" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-[12px] uppercase tracking-[0.35em] text-gold">Коллекция</p>
        <h2 className="font-display mt-4 text-4xl text-graphite sm:text-5xl">
          Избранные экземпляры
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-stoneWarm">
          Каждый камень существует в единственном экземпляре. Когда он находит
          своего владельца, мы не заменяем его копией — на его месте появляется новая находка.
        </p>
      </div>

      <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`border px-5 py-2.5 text-[12px] uppercase tracking-[0.15em] transition-all duration-300 ${
              filter === c.id
                ? 'border-gold bg-gold text-graphite'
                : 'border-line text-stoneWarm hover:border-gold hover:text-gold'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {items.map((m) => (
          <article
            key={m.id}
            className="group flex flex-col border border-line bg-white transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(26,29,32,0.25)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-stoneWarm">
                {m.origin}
              </p>
              <h3 className="font-display mt-2 text-2xl text-graphite">{m.name}</h3>
              <p className="mt-2 text-[13px] text-stoneWarm">
                {m.weight} · {m.size}
              </p>
              <p className="font-display mt-3 text-xl text-graphite">{formatPrice(m.price)}</p>
              <div className="mt-5 flex gap-2 border-t border-line pt-4">
                <button
                  onClick={() => setSelected(m)}
                  className="flex-1 border border-graphite/25 py-2.5 text-[11px] uppercase tracking-[0.12em] text-graphite transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  Подробнее
                </button>
                <a
                  href={`https://t.me/minerale?text=Здравствуйте! Интересует экземпляр «${m.name}»`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-graphite py-2.5 text-center text-[11px] uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:bg-gold hover:text-graphite"
                >
                  Купить
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selected && <MineralModal mineral={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
