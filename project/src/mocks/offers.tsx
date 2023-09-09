import { Offer, Offers } from '../types/offer';

export const offer: Offer = {
  'bedrooms': 3,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10
    },
    'name': 'Amsterdam'
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': ['Washing machine', 'Hashing machine', 'Fridge'],
  'host': {
    'avatarUrl': 'img/avatar-angelina.jpg',
    'id': 3,
    'isPro': true,
    'name': 'Angelina'
  },
  'id': Math.floor(Math.random() * 1000000000),
  'images': ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
  'isFavorite': true,
  'isPremium': false,
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'maxAdults': 4,
  'previewImage': 'img/apartment-01.jpg',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment'
};


export const offers: Offers = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Washing machine', 'Hashing machine', 'Fridge'],
    'host': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 1,
    'images': ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-01.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment'
  },

  {
    'bedrooms': 2,
    'city': {
      'location': {
        'latitude': 52.371216,
        'longitude': 4.896168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'A wonderful place right in the heart of Amsterdam.',
    'goods': ['Air conditioning', 'Coffee machine', 'Fridge'],
    'host': {
      'avatarUrl': 'img/avatar-angelina.jpg',
      'id': 4,
      'isPro': false,
      'name': 'Max'
    },
    'id': 2,
    'images': ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    'isFavorite': false,
    'isPremium': true,
    'location': {
      'latitude': 52.35554938496378,
      'longitude': 4.675877537499948,
      'zoom': 8
    },
    'maxAdults': 3,
    'previewImage': 'img/apartment-02.jpg',
    'price': 100,
    'rating': 4.5,
    'title': 'Central & cozy apartment',
    'type': 'room'
  },
  {
    'bedrooms': 4,
    'city': {
      'location': {
        'latitude': 52.372216,
        'longitude': 4.897168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'A spacious residence with modern amenities.',
    'goods': ['WiFi', 'Kitchen', 'Washing machine'],
    'host': {
      'avatarUrl': 'img/img/avatar-angelina.jpg',
      'id': Math.floor(Math.random() * 1000000000),
      'isPro': true,
      'name': 'Lucy'
    },
    'id': 3,
    'images': ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.35614938496378,
      'longitude': 4.678877537499948,
      'zoom': 8
    },
    'maxAdults': 5,
    'previewImage': 'img/apartment-03.jpg',
    'price': 140,
    'rating': 5.0,
    'title': 'Modern & luxurious residence',
    'type': 'house'
  }
];
