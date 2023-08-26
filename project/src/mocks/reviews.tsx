import { Reviews } from '../types/review';

export const reviews: Reviews = [{
  comment: 'So beautiful!',
  date: 'Novenber 2023',
  id: Math.random() * 1000,
  rating: 9,
  user: {
    avatarUrl: 'https://avavatar.ru/image/11743',
    id: 1,
    isPro: true,
    name: 'Emy',
  }},
{
  comment: 'Awesome!',
  date: 'September 2023',
  id: Math.random() * 1000,
  rating: 10,
  user: {
    avatarUrl: 'https://avavatar.ru/image/11783',
    id: 1,
    isPro: false,
    name: 'John',
  }},
{
  comment: 'So-so',
  date: 'May 2023',
  id: Math.random() * 1000,
  rating: 3,
  user: {
    avatarUrl: 'https://avavatar.ru/image/11763',
    id: 1,
    isPro: true,
    name: 'Iren',
  }},
];
