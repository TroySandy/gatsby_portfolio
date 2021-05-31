import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Troy Sandy | Web Developer',
  lang: 'en',
  description: 'Welcome to my Portfolio',
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am',
  name: 'Troy Sandy',
  subtitle: 'Web Developer',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'selfie-1.jpeg',
  paragraphOne:
    'Hello there! You probably landed here looking for a Web Developer and wonder who this clearly aquatic person is. That would be me,  Troy Sandy, a passionate scuba diver/instructor, boat captain and underwater photographer. I started my education and career path in the world of underwater science, mesmerized by the beauty and wonders of the oceans; passionate to learn and explore all the sea had to offer. Eventually I realized I was looking for more and found myself diving head first into the realm of technology. I traded my dive computer for a laptop and began to explore the world of code.',
  paragraphTwo:
    'With my unique life experiences as an explorer, leader, instructor and team player I look forward to a long career of growth in the world of code. Having just finished a 12 week intensive bootcamp at Eleven Fifty Academy focusing on Web Development and Design, I am ready to jump right into a new team and hit the ground running. I am passionate about creating functional and exciting websites. I look forward to helping you build your next website.',
  paragraphThree: '',
  resume:
    'https://docs.google.com/document/d/1DWgUHcQ4I5BLJyyLmRhl3mBqJqIHPnH4uuM8p1RwaMs/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'codepenCreature.png',
    title: 'CSS Creature',
    info: 'This is my first project manipulating code.  It was my first time ever seeing code or trying to write code.',
    info2: '',
    url: 'https://codepen.io/Tsandy/pen/bGBmKgj',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'staticLayout.png',
    title: 'Static Layout',
    info: 'I recreated Kastapp.co as a static layout using HTML and CSS',
    info2: '',
    url: 'https://troysandy.github.io/staticLayout/',
    repo: 'https://github.com/TroySandy/staticLayout', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'apiProject1.png',
    title: 'F1 API Search Engine',
    info: 'Here is my first attempt at using a 3rd party API to create a website.',
    info2:
      'The home page cycles thru all the teams and tracks this season, the search page returns all race results for F1.',
    url: 'https://troysandy.github.io/APIProject/',
    repo: 'https://github.com/TroySandy/APIProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'apiProject2.png',
    title: 'GIPHY GIF Generator',
    info: 'This site returns a random GIF every 5 seconds and all trending GIFS.',
    info2: "You are able to search for GIF's and download the files.",
    url: 'https://troysandy.github.io/GiphyAPI/',
    repo: 'https://github.com/TroySandy/GiphyAPI', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'flickview.png',
    title: 'Group Movie Review Project',
    info: 'I was part of a group that designed the database and client side application.',
    info2:
      'You are able to create a user account, leave comments and ratings on movies, and save them to a watchlist.',
    url: 'http://aem-bb-client.herokuapp.com/',
    repo: 'https://github.com/TroySandy/MovieReviewClientApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'uplod.png',
    title: 'Photo hosting website',
    info: 'This was the final project for my Eleven Fifty coding bootcamp.  I created a database and front end website utilizing React legacy and Typescript.',
    info2: '',
    url: 'https://red-badge-wd80-final.herokuapp.com/',
    repo: 'https://github.com/TroySandy/RedBadgeClient', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'troy.sandy@me.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/troysandy/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/TroySandy',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
