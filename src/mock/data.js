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
    'Hello there! I am Troy Sandy, an ambitious, entry-level web developer, but also a passionate scuba diving instructor, and underwater photographer/videographer. I began my career path in the world of underwater science, mesmerized by the beauty and wonders of the oceans; passionate to learn and explore all the sea had to offer. A medical adversity caused me to readjust my sails, so I embraced a new facet of technology. I traded my dive computer, regulators and cameras for a laptop and began to explore the world of code.',
  paragraphTwo:
    'Utilizing unique life experiences as an explorer, leader, instructor and team player I look forward to conquering the many challenges in the world of code. Having just finished a 12 week intensive boot camp at Eleven Fifty Academy, focusing on Web Development and Design, I am ready to jump right into a new team and hit the ground running. I am passionate about creating functional and exciting websites. I look forward to helping you build your next website. ',
  resume: 'https://drive.google.com/file/d/19dVckW7stj_PEYeHBUWWp68Ssmz206fr/view?usp=sharing',
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
    repo: 'https://github.com/TroySandy/staticLayout',
  },
  {
    id: nanoid(),
    img: 'apiProject1.png',
    title: 'F1 API Search Engine',
    info: 'Here is my first attempt at using a 3rd party API to create a website.',
    info2:
      'The home page cycles thru all the teams and tracks this season, the search page returns all race results for F1.',
    url: 'https://troysandy.github.io/APIProject/',
    repo: 'https://github.com/TroySandy/APIProject',
  },
  {
    id: nanoid(),
    img: 'apiProject2.png',
    title: 'GIPHY GIF Generator',
    info: 'This site returns a random GIF every 5 seconds and all trending GIFS.',
    info2: "You are able to search for GIF's and download the files.",
    url: 'https://troysandy.github.io/GiphyAPI/',
    repo: 'https://github.com/TroySandy/GiphyAPI',
  },
  {
    id: nanoid(),
    img: 'flickview.png',
    title: 'Group Movie Review Project',
    info: 'I was part of a group that designed the database and client side application.',
    info2:
      'You are able to create a user account, leave comments and ratings on movies, and save them to a watchlist.',
    url: 'http://aem-bb-client.herokuapp.com/',
    repo: 'https://github.com/TroySandy/MovieReviewClientApp',
  },
  {
    id: nanoid(),
    img: 'uplod.png',
    title: 'Photo Hosting Website',
    info: 'This was the final project for my Eleven Fifty Coding Bootcamp.  I created a database and front end website utilizing React Legacy and Typescript.',
    info2: '',
    url: 'https://red-badge-wd80-final.herokuapp.com/',
    repo: 'https://github.com/TroySandy/RedBadgeClient',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Lets See What We Can Build Together!!',
  btn: '',
  email: 'troysandy16@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
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
  isEnabled: false,
};
