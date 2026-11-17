import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function CustomSelect() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const { error } = await supabase.from('mineral_requests').insert({
      name: name.trim(),
      contact: contact.trim(),
      description: description.trim() || null,
    });
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setName('');
    setContact('');
    setDescription('');
  };

  return (
    <section id="select" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="text-[12px] uppercase tracking-[0.35em] text-gold">
            Индивидуальный подбор
          </p>
          <h2 className="font-display mt-4 text-4xl text-graphite sm:text-5xl">
            Найдём камень вашей мечты
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-light leading-relaxed text-stoneWarm">
            Опишите, какой минерал вы ищете — для коллекции или ювелирной работы.
            Мы подберём экземпляры из наших запасов и новых закупок, пришлём видео
            и точные характеристики.
          </p>
        </div>

        {status === 'success' ? (
          <div className="mt-12 flex flex-col items-center border border-gold/40 bg-white px-8 py-14 text-center">
            <CheckCircle2 size={40} strokeWidth={1.25} className="text-gold" />
            <h3 className="font-display mt-5 text-2xl text-graphite">Заявка получена</h3>
            <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-stoneWarm">
              Спасибо! Мы свяжемся с вами в течение одного дня и предложим
              экземпляры под ваш запрос.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-8 border border-graphite/25 px-7 py-3 text-[12px] uppercase tracking-[0.15em] text-graphite transition-all duration-300 hover:border-gold hover:text-gold"
            >
              Отправить ещё одну заявку
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-12 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-[12px] uppercase tracking-[0.15em] text-stoneWarm">
                  Имя
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как к вам обращаться"
                  className="mt-2 w-full border border-line bg-white px-4 py-3.5 text-sm text-graphite outline-none transition-colors placeholder:text-stoneWarm/50 focus:border-gold"
                />
              </label>
              <label className="block">
                <span className="text-[12px] uppercase tracking-[0.15em] text-stoneWarm">
                  Телефон или Telegram
                </span>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+7 … или @username"
                  className="mt-2 w-full border border-line bg-white px-4 py-3.5 text-sm text-graphite outline-none transition-colors placeholder:text-stoneWarm/50 focus:border-gold"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-[12px] uppercase tracking-[0.15em] text-stoneWarm">
                Какой минерал вы ищете
              </span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                placeholder="Например: друза аметиста насыщенного цвета до 3 кг для кабинета, или зелёный турмалин для огранки…"
                className="mt-2 w-full resize-none border border-line bg-white px-4 py-3.5 text-sm text-graphite outline-none transition-colors placeholder:text-stoneWarm/50 focus:border-gold"
              />
            </label>

            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-red-700">
                <AlertCircle size={16} strokeWidth={1.5} />
                Не удалось отправить заявку. Попробуйте ещё раз или напишите нам в Telegram.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group inline-flex w-full items-center justify-center gap-3 bg-graphite px-8 py-4 text-[13px] uppercase tracking-[0.2em] text-ivory transition-all duration-300 hover:bg-gold hover:text-graphite disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <Send size={15} strokeWidth={1.5} />
              {status === 'sending' ? 'Отправляем…' : 'Отправить заявку'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
