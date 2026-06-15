// ─────────────────────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update the portfolio — no need
// to touch the components.
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Era Hasimja',
  title: 'Front-End Developer',
  location: 'Prishtina, Kosovo',
  email: 'hasimjaera@gmail.com',
  phone: '+383 44 421 959',
  // Add your real links here when ready (leave as '' to hide the button).
  github: '',
  linkedin: 'https://www.linkedin.com/in/era-hasimja-062235211/',
  resumeUrl: '/Era_Hasimja_CV.pdf', // drop your PDF in /public to enable the download
  tagline:
    'I build clean, reliable apps for iOS, Android & Web with React and React Native.',
  about: [
    "I'm a Front-End Developer with hands-on experience building real-world applications for iOS, Android, and Web using React and React Native.",
    'I focus on creating clean, reliable, and user-friendly products — with experience in real-time features, dashboards, authentication systems, and complex app flows.',
    "I'm used to working on live products in fast-moving startup environments, shipping features that real users depend on every day.",
  ],
  stats: [
    { value: '3+', label: 'Years building products' },
    { value: '8+', label: 'Apps shipped' },
    { value: '3', label: 'Platforms (iOS · Android · Web)' },
  ],
}

export const skills = [
  {
    group: 'Frameworks & Languages',
    items: [
      'React.js',
      'Next.js',
      'Vue.js',
      'React Native (Expo)',
      'TypeScript',
      'JavaScript',
      'Swift',
      'Kotlin',
    ],
  },
  {
    group: 'Styling & UI',
    items: ['Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Figma → UI'],
  },
  {
    group: 'State & Data',
    items: ['Redux Toolkit', 'REST APIs', 'GraphQL', 'Firebase'],
  },
  {
    group: 'Tools & Integrations',
    items: [
      'Git',
      'Google Maps API',
      'Push Notifications',
      'OCR Integration',
      'AI Tools',
    ],
  },
]

export const softSkills = [
  'Reliable',
  'Organized',
  'Team Player',
  'Creative',
  'Motivated',
]

// Featured work — derived from real projects on the CV.
export const projects = [
  {
    name: 'KosGo',
    subtitle: 'Ride Sharing Platform',
    platform: 'React Native (Expo) · iOS & Android',
    description:
      'A full-featured ride-hailing platform connecting drivers and riders in real time, including an admin-only dashboard for managing the platform.',
    highlights: [
      'Live GPS tracking with the Google Maps API',
      'Real-time trip lifecycle: request → accept → in progress → completed',
      'In-app chat & calling system',
      'Push notifications for ride events',
      'Multi-role architecture (driver, rider, admin)',
      'Earnings dashboard, rating system, dark/light mode & multi-language',
    ],
    tags: ['React Native', 'Expo', 'Google Maps', 'Real-time', 'Push'],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/al/app/kosgo/id6756741772',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.kosgo.app',
      },
    ],
    galleryLayout: 'phone',
    gallery: [
      {
        src: '/projects/kosgo/kosgo-1.jpg',
        alt: 'KosGo — rider onboarding / welcome screen',
      },
      {
        src: '/projects/kosgo/kosgo-2.jpg',
        alt: 'KosGo — saved and recent addresses',
      },
      {
        src: '/projects/kosgo/kosgo-3.jpg',
        alt: 'KosGo — ride booking with live map and destination search',
      },
      {
        src: '/projects/kosgo/kosgo-4.jpg',
        alt: 'KosGo — driver home with live map and go-online status',
      },
      {
        src: '/projects/kosgo/kosgo-5.jpg',
        alt: 'KosGo — driver performance metrics and trip analytics',
      },
    ],
  },
  {
    name: 'ATK Lotaria',
    subtitle: 'OCR Lottery App',
    platform: 'React Native / React.js · Web, iOS & Android',
    description:
      'A national-level app letting users scan fiscal receipts and join digital lottery draws.',
    highlights: [
      'OCR scanner for automatic receipt recognition',
      'Receipt history & statistics dashboard with charts',
      'Advanced search and pagination',
      'Complaints and feedback system',
      'Full authentication & user profile management',
      'Performance-tuned for fast scanning and data processing',
    ],
    tags: ['React Native', 'React.js', 'OCR', 'Charts', 'Auth'],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/al/app/atk-lotaria/id6752409418',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=org.atkks.loja.lotaria',
      },
      { label: 'Visit site', href: 'https://loja.atk-ks.org/login' },
    ],
    galleryLayout: 'phone',
    gallery: [
      {
        src: '/projects/atklotaria/atklotaria-2.jpg',
        alt: 'ATK Lotaria — home screen with add / upload receipt actions',
      },
      {
        src: '/projects/atklotaria/atklotaria-3.jpg',
        alt: 'ATK Lotaria — scanned fiscal receipt preview before upload',
      },
      {
        src: '/projects/atklotaria/atklotaria-4.jpg',
        alt: 'ATK Lotaria — statistics dashboard with level progress and rewards',
      },
      {
        src: '/projects/atklotaria/atklotaria-1.jpg',
        alt: 'ATK Lotaria — registration screen',
      },
    ],
  },
  {
    name: 'Shelfie',
    subtitle: 'Task Management & Field Tracking Platform',
    platform: 'React.js · Web',
    description:
      'A full-stack platform for managing field employees, schedules and territories, with an admin dashboard for real-time tracking.',
    highlights: [
      'Admin dashboard with real-time location tracking via WebSockets',
      'Interactive maps and route-history visualization with Leaflet',
      'JWT-based role authentication and protected routes',
      'Schedule management with check-in / check-out tracking',
      'Automated task notifications and Excel report exports',
      'Analytics dashboards for data-driven insights',
    ],
    tags: ['React.js', 'WebSockets', 'Leaflet', 'JWT', 'Analytics'],
    links: [{ label: 'Visit site', href: 'https://tm.bbros.al' }],
  },
  {
    name: 'Prona Scout',
    subtitle: 'Real Estate App',
    platform: 'React Native · iOS & Android',
    description:
      'A mobile real estate app synchronized with a web platform for seamless property browsing.',
    highlights: [
      'Dynamic property listings with detailed pages',
      'Advanced filters and search',
      'Saved properties and user profiles',
      'Optimized mobile UX for large datasets',
      'Full synchronization with the web platform',
    ],
    tags: ['React Native', 'Search', 'UX', 'Sync'],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/al/app/pronascout/id6736767198',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.bbros.pronascoutv2',
      },
    ],
    galleryLayout: 'phone',
    gallery: [
      {
        src: '/projects/pronascout/pronascout-1.jpg',
        alt: 'Prona Scout — login / register welcome screen',
      },
      {
        src: '/projects/pronascout/pronascout-2.jpg',
        alt: 'Prona Scout — property search with rent/sale filters',
      },
      {
        src: '/projects/pronascout/pronascout-4.jpg',
        alt: 'Prona Scout — property listings with details and categories',
      },
      {
        src: '/projects/pronascout/pronascout-5.jpg',
        alt: 'Prona Scout — interactive map view with property pins',
      },
      {
        src: '/projects/pronascout/pronascout-3.jpg',
        alt: 'Prona Scout — saved favorite properties',
      },
    ],
  },
  {
    name: 'Macintoks',
    subtitle: 'E-commerce Platform',
    platform: 'React.js · Web',
    description:
      'A modern online retail platform for electronics and accessories with full user and admin functionality.',
    highlights: [
      'Product catalog with filtering and search',
      'Shopping cart and multi-step checkout',
      'Admin dashboard for inventory and orders',
      'Responsive UI with interactive components',
      'REST API integration with Redux state management',
    ],
    tags: ['React.js', 'Redux', 'E-commerce', 'REST'],
    links: [{ label: 'Visit site', href: 'https://www.macintoks.com/' }],
    gallery: [
      {
        src: '/projects/macintoks/macintoks-1.png',
        alt: 'Macintoks — product catalog with filters and search',
      },
      {
        src: '/projects/macintoks/macintoks-2.png',
        alt: 'Macintoks — homepage with featured and trending products',
      },
      {
        src: '/projects/macintoks/macintoks-3.png',
        alt: 'Macintoks — product detail page with pricing and installments',
      },
      {
        src: '/projects/macintoks/macintoks-4.png',
        alt: 'Macintoks — product page with slide-in shopping cart',
      },
      {
        src: '/projects/macintoks/macintoks-5.png',
        alt: 'Macintoks — sign-in page with social login',
      },
    ],
  },
  {
    name: 'Autoshkollaime',
    subtitle: 'Driving School App',
    platform: 'React Native · iOS & Android',
    description:
      'Led the complete rebuild of v2 — redesigning the UI and internal architecture for better performance and UX, including an admin-only dashboard for user management and revenue analytics.',
    highlights: [
      'Rebuilt the app from scratch for speed and stability',
      'Fixed critical bugs in login and payment flows',
      'Learning & testing system for driving exams',
      'Push notifications for reminders',
      'Admin dashboard for user management and revenue analytics',
    ],
    tags: ['React Native', 'Rebuild', 'Payments', 'Analytics'],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/al/app/autoshkollaime/id6473836362',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.bbrosexpotest.autoshkollaimefront',
      },
    ],
    galleryLayout: 'phone',
    gallery: [
      {
        src: '/projects/autoshkollaime/autoshkollaime-1.jpg',
        alt: 'Autoshkollaime — driving exam tests list for a category',
      },
      {
        src: '/projects/autoshkollaime/autoshkollaime-2.jpg',
        alt: 'Autoshkollaime — exam question with photo, choices and timer',
      },
      {
        src: '/projects/autoshkollaime/autoshkollaime-5.jpg',
        alt: 'Autoshkollaime — test results with score and answer breakdown',
      },
      {
        src: '/projects/autoshkollaime/autoshkollaime-6.jpg',
        alt: 'Autoshkollaime — driving licence category selection',
      },
      {
        src: '/projects/autoshkollaime/autoshkollaime-3.jpg',
        alt: 'Autoshkollaime — subscription packages and card payment',
      },
      {
        src: '/projects/autoshkollaime/autoshkollaime-4.jpg',
        alt: 'Autoshkollaime — user profile and app settings',
      },
    ],
  },
]

export const experience = [
  {
    role: 'Front-End Developer',
    company: 'Bbros',
    location: 'Prishtina',
    period: 'April 2023 — Present',
    current: true,
    summary:
      'Building production apps across iOS, Android and Web in a fast-moving startup environment.',
    points: [
      'Shipped multiple real-world products including KosGo, ATK Lotaria, Shelfie, Prona Scout, Macintoks and Autoshkollaime.',
      'Delivered real-time features, dashboards, authentication systems and complex app flows.',
      'Implemented Google Maps, OCR scanning, push notifications and multi-role architectures.',
      'Translated Figma designs into pixel-accurate, responsive interfaces.',
    ],
  },
  {
    role: 'React Intern',
    company: 'Pabau',
    location: 'Prishtina',
    period: 'July 2022 — September 2022',
    current: false,
    summary: 'First professional experience working across the stack on a live product.',
    points: [
      'Built the API with GraphQL and populated the database via seed files.',
      'Implemented the front-end against that data, adapting designs from Figma.',
      'Tested and fixed bugs to improve overall project quality.',
      'Collaborated with other developers to design, build and maintain the project.',
    ],
  },
]

export const education = [
  {
    title: 'Bachelor of Computer Science & Engineering',
    org: 'UBT — University for Business and Technology',
    location: 'Prishtina',
    period: '2022',
  },
]

export const courses = [
  {
    title: 'Advanced JavaScript',
    org: 'Beetroot Academy, Prishtina',
    period: 'Dec 2022 — Jan 2023',
  },
  {
    title: 'Front-End Development',
    org: 'Beetroot Academy, Prishtina',
    period: 'Feb 2022 — Jun 2022',
  },
  {
    title: 'Ruby on Rails',
    org: 'Bonevet, Gjakova',
    period: 'Feb 2019 — Apr 2019',
  },
]

export const languages = [
  { name: 'Albanian', level: 'Native' },
  { name: 'English', level: 'Professional' },
]
