import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

import Magicmemory from './assets/magicMemory.jpg';
import backRoads from './assets/backRoads.jpg';
import eaten from './assets/eatenSplit.jpg';
import { nanoid } from 'nanoid';
import travellist from './assets/travelList.jpg';
import usePopcorn from './assets/usePopcorn.jpg';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-blue-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-blue-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-blue-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: travellist,
    url: 'https://negin-khademi.github.io/travel-list/',
    github: 'https://github.com/negin-khademi/travel-list',
    title: 'Travel list',
    text: 'Travel list app will organize a packing list and luggage checklist for your luggage',
  },
  {
    id: nanoid(),
    img: eaten,
    url: 'https://negin-khademi.github.io/eat-n-split',
    github: 'https://github.com/negin-khademi/eat-n-split',
    title: 'Eaten split',
    text: 'Eaten bill splitting app is a key piece of tech that can help your venue create more efficient processes and workflows.',
  },
  {
    id: nanoid(),
    img: usePopcorn,
    url: 'https://negin-khademi.github.io/usePopcorn/',
    github: 'https://github.com/negin-khademi/usePopcorn',
    title: 'usePopcorn',
    text: 'When a user clicks on one of the titles, the film is shown with more details and you can add it to your favorite list.',
  },
  {
    id: nanoid(),
    img: Magicmemory,
    url: 'https://negin-khademi.github.io/magic-memory/',
    github: 'https://github.com/negin-khademi/magic-memory',
    title: 'Magic memory',
    text: 'Memorize cards and find pairs in this family friendly memory game featuring beautiful graphics and animations.',
  },
  {
    id: nanoid(),
    img: backRoads,
    url: 'https://negin-khademi.github.io/magic-memory/',
    github: 'https://github.com/negin-khademi/backroad-tour',
    title: 'backRoads',
    text: 'Backroads is the leader in active travel, offering Biking, Hiking and Multi-Adventure Trips in 55+ countries worldwide.',
  },
];
