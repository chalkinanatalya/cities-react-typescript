import { Offers } from '../types/offer';

export const offers: Offers = [
  {
    bedrooms: 2,
    city: {
    location: {
    latitude: 12,
    longitude: 12,
    zoom: 3,
    }
    name: string,
    }
    description: string,
    goods: [string],
    host: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
    }
    id: number,
    images: [string],
    isFavorite: boolean,
    isPremium: boolean,
    location: {
    latitude: number,
    longitude: number,
    zoom: number,
    }
    maxAdults: number,
    previewImage: string,
    price: number,
    rating: number,
    title: string,
    type: string,
    }
]
