import { Offers } from '../types/offer';


export const offers: Offers = [
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 12,
        longitude: 12,
        zoom: 3,
      },
      name: 'shiny room',
    },
    description: 'beatiful and shiny room',
    goods: ['Washing machine', 'Hashing machine', 'Fridge'],
    host: {
      avatarUrl: 'https://avavatar.ru/image/11743',
      id: 1,
      isPro: true,
      name: 'Ann',
    },
    id: 1,
    images: ['https://avavatar.ru/image/11743', 'https://avavatar.ru/image/11843', 'https://avavatar.ru/image/11943'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 20,
      longitude: 20,
      zoom: 2,
    },
    maxAdults: 2,
    previewImage: 'https://avavatar.ru/image/12743',
    price: 200,
    rating: 5,
    title: 'room',
    type: 'apartment',
  }
];
