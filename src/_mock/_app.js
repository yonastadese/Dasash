import { noCase } from 'change-case';
// _mock
import _mock from './_mock';
import { randomNumberRange, randomInArray } from './funcs';

// ----------------------------------------------------------------------

export const _appRelated = ['Chrome', 'Drive', 'Dropbox', 'Evernote', 'Github'].map((appName, index) => ({
  id: _mock.id(index),
  name: appName,
  system: (index === 2 && 'Windows') || (index === 4 && 'Windows') || 'Mac',
  price: index === 0 || index === 2 || index === 4 ? 0 : _mock.number.price(index),
  rating: _mock.number.rating(index),
  review: randomNumberRange(999, 99999),
  shortcut: `https://minimal-assets-api.vercel.app/assets/icons/ic_${noCase(appName)}.svg`,
}));

export const _appInstalled = ['de', 'en', 'fr', 'kr', 'us'].map((country, index) => ({
  id: _mock.id(index),
  name: ['Germany', 'England', 'France', 'Korean', 'USA'][index],
  android: randomNumberRange(999, 99999),
  windows: randomNumberRange(999, 99999),
  apple: randomNumberRange(999, 99999),
  flag: `https://minimal-assets-api.vercel.app/assets/icons/ic_flag_${country}.svg`,
}));

export const _appAuthors = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  avatar: _mock.image.avatar(index),
  favourite: randomNumberRange(9999, 19999),
}));



export const _appInvoices = [
  {
    id: 1,
    testimonial: `"Their customer service is top-notch! Always friendly and helpful."`,
    name: 'Dawit',
    branch: 'Bole Branch'
  },
  {
    id: 2,
    testimonial: `"I had an issue, and they resolved it quickly and efficiently. Impressed!"`,
    name: 'Mestawet',
    branch: 'Jemo Branch'
  },
  {
    id: 3,
    testimonial: `"The branch ambiance is lovely, creating a pleasant banking experience."`,
    name: 'Tilahun',
    branch: 'Mexico Branch'
  },

];

export const _appFeatured = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  title: ['Harry Potter and the Deathly Hallows - Part 2', 'Disney Zombies 2', 'Lightroom mobile - Koloro'][index],
  description: _mock.text.title(index),
  image: _mock.image.feed(index),
}));
