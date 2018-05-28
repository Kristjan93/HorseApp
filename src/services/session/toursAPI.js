import { HOUR_2, HOUR_1 } from '../paths/images';

let tours = [
{
  id: 'one-hour-tour',
  title: '1 Hour ride',
  price: '9.000',
  imageSrc: HOUR_1,
  carouselImagesSrc: [],
  text: 'This tour is ideal for families, groups and guests.',
  primaryText: 'This tour is 1 hour and is ideal for families, groups and guests with their own car.  Who want a small experience of the Icelandic horse’s qualitie and enjoy beautiful nature horseback riding.  We ride on good riding paths and enjoy the beautiful landscape a around our farm Myrkholt.  Children have to be 6 year old, children under the age of 8 can be le	d by our staff',
  
  duration: '1 hour',

  departures: 'Daily at 10:00 and 14:00',


  info: [
    {
      type: 'duration',
      title: 'Duration',
      text: '1 hour',
      nestedText: ''
    },
    { 
      type: 'departures', 
      title: 'Departures', 
      text: 'Daily at 10:00 and 14:00',
      nestedText: '' 
    },
    { 
      type: 'ridingSkills', 
      title: 'Riding skills', 
      text: 'easy',
      nestedText: '' 
    },
    {
      type: 'included', 
      title: 'Included', 
      text: 'Riding helmet, rain clothes if needed and English speaking guide.', 
      nestedText: '' 
    },
    {
      type: 'price', 
      title: 'Price', 
      text: '9.000 ISK', 
      nestedText: '' 
    },
  ],
},

{
  id: 'two-hour-tour',
  title: '2 hour ride',
  price: '13.000',
  imageSrc: HOUR_2,
  carouselImagesSrc: [],
  text: 'This tour is suitable for beginners and for those with more experience.  We ride on good riding paths in breathtaking scenery around our farm.',
  primaryText: 'This tour is suitable for beginners and for those with more experience.  We ride on good riding paths in breathtaking scenery around our farm. Whit view of glacier, mountains and Geysir area.  Great way for those who want to ride longer and maybe try the gaits of the Icelandic horse.',
  
  duration: '2 hours',

  departures: 'Daily at 10:00 and 14:00',

  info: [
    {
      type: 'duration',
      title: 'Duration',
      text: '2 hour',
      nestedText: ''
    },
    { 
      type: 'departures', 
      title: 'Departures', 
      text: 'Daily at 10:00 and 14:00',
      nestedText: '' 
    },
    { 
      type: 'ridingSkills',
      title: 'Riding skills', 
      text: 'easy',
      nestedText: '' 
    },
    {
      type: 'included', 
      title: 'Included', 
      text: 'Riding helmet, rain clothes if needed and English speaking guide.', 
      nestedText: '' 
    },
    {
      type: 'price', 
      title: 'Price', 
      text: '13.000 ISK',
      nestedText: '' 
    },
  ],
},
];

export const toursAPI = {
get: function() {
  return tours || {};
},
getById: function(id = null) {
  let tour = tours.filter(x => (x.id === id));
  return tour = tour[0] || null;
}
};