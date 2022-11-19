// gitprofile.config.js

const config = {
  github: {
    username: 'Dev-Erf', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'etajalli',
    twitter: 'TajalliErfan',
    facebook: '',
    instagram: 'erfan_.tajalli',
    dribbble: '',
    behance: '',
    medium: 'tajalli.erfan',
    dev: 'deverf',
    stackoverflow: '', // format: userid/username
    website: '',
    phone: '',
    email: 'etajalli@mun.ca',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python','Machine Learning', 'Image Processing', 'NLP', 'Data Engineering',
    'Express.js',
    'JavaScript',
    'React.js','Redux.js', 
    'Node.js',
    'Nest.js',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS',
    'CSS',
  ],
  experiences: [
    {
      company: ' Gardeshgaran Shiraz Travel Company ',
      position: 'Full Stack Engineer',
      from: 'Dec 2018',
      to: 'May 2021',
      companyLink: 'https://gardeshgaran1.com/',
    },
 
  ],
  education: [
    {
      institution: 'Memorial University of Newfoundland',
      degree: 'Master of Computer Engineering',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'apadana institute of higher education ',
      degree: 'Bachelor of Computer Engineering - Software',
      from: '2014',
      to: '2018',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'deverf', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
