import { ImageSourcePropType } from 'react-native';

export const CARS_DATA: CartType[] = [
  {
    image: require('../../../../assets/imageStructure.png'),
    title: 'Спортивная студенческая ночь',
    start_date: '25 января 2025',
    location: 'Каток на эспланаде',
  },
  {
    image: require('../../../../assets/imageStructure2.png'),
    title: 'Старт межрегиональной патриотической акции «Десант Прикамья»',
    start_date: '31 января 2025',
    location: 'Кристалл-Центр',
  },
  {
    image: require('../../../../assets/imageStructure3.png'),
    title: 'Открытие молодежного штаба',
    start_date: '3 февраля 2025',
    location: 'Зал правительства ПК',
  },
];

export type CartType = {
  title: string;
  start_date: string;
  location: string;
  image: ImageSourcePropType;
  car_number?: string;
};
