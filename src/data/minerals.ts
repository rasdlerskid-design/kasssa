export type MineralCategory =
  | 'tigerEye'
  | 'seraphinite'
  | 'labradorite'
  | 'malachite'
  | 'carnelian';

export interface Mineral {
  id: number;
  name: string;
  category: MineralCategory;
  origin: string;
  weight: string;
  size: string;
  price: number;
  image: string;
  description: string;
}

export const CATEGORIES: { id: MineralCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Все камни' },
  { id: 'tigerEye', label: 'Тигровый глаз' },
  { id: 'seraphinite', label: 'Серафинит' },
  { id: 'labradorite', label: 'Лабрадор' },
  { id: 'malachite', label: 'Малахит' },
  { id: 'carnelian', label: 'Сердолик' },
];

export const MINERALS: Mineral[] = [
  {
    id: 1,
    name: 'Тигровый глаз (галтовка, набор)',
    category: 'tigerEye',
    origin: 'ЮАР',
    weight: 'По запросу',
    size: '~15–25 мм каждый',
    price: 2500,
    image: '/1000121011.jpg',
    description:
      'Натуральный полированный тигровый глаз с ярко выраженным шелковистым отливом и золотисто-коричневыми переливами.',
  },
  {
    id: 2,
    name: 'Серафинит (клинохлор) коллекционный',
    category: 'seraphinite',
    origin: 'Россия, Иркутская область (Коршуновское)',
    weight: 'По запросу',
    size: '~7 × 6 см',
    price: 6800,
    image: '/1000121010.jpg',
    description:
      'Редкий коллекционный образец темно-зеленого серафинита с характерным серебристо-перламутровым «перистым» рисунком.',
  },
  {
    id: 3,
    name: 'Лабрадор с ярко-синей иризацией',
    category: 'labradorite',
    origin: 'Мадагаскар',
    weight: 'По запросу',
    size: '~6 × 2,5 см',
    price: 5400,
    image: '/1000121009.jpg',
    description:
      'Полированный образец натурального лабрадора с насыщенным сине-голубым оптическим свечением (иризацией) по всей поверхности.',
  },
  {
    id: 4,
    name: 'Малахит полированный (узорчатый)',
    category: 'malachite',
    origin: 'ДР Конго / Урал',
    weight: 'По запросу',
    size: '~4,5 × 3 см',
    price: 4900,
    image: '/1000121008.jpg',
    description:
      'Природный полированный малахит с контрастным концентрическим рисунком и бархатистыми переливами зеленого цвета.',
  },
  {
    id: 5,
    name: 'Сердолик (необработанный образец)',
    category: 'carnelian',
    origin: 'Россия / Индия',
    weight: 'По запросу',
    size: '~5 × 3,5 см',
    price: 3200,
    image: '/1000121007.jpg',
    description:
      'Натуральный необработанный сердолик насыщенного красно-янтарного оттенка с природной коркой и ярким внутренним сколом.',
  },
];
