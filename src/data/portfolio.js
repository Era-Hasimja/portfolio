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
  linkedin: '',
  resumeUrl: '/EraHasimja_cv.pdf', // drop your PDF in /public to enable the download
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
      'A full-featured ride-hailing platform connecting drivers and riders in real time.',
    highlights: [
      'Live GPS tracking with the Google Maps API',
      'Real-time trip lifecycle: request → accept → in progress → completed',
      'In-app chat & calling system',
      'Push notifications for ride events',
      'Multi-role architecture (driver, rider, admin)',
      'Earnings dashboard, rating system, dark/light mode & multi-language',
    ],
    tags: ['React Native', 'Expo', 'Google Maps', 'Real-time', 'Push'],
    accent: 'from-indigo-500 to-violet-500',
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
    accent: 'from-emerald-500 to-teal-500',
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
    accent: 'from-sky-500 to-blue-500',
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
    accent: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Comandante Marcos',
    subtitle: 'Restaurant Reservation System',
    platform: 'React.js · Web',
    description:
      'A reservation system for managing tables, reservations, and staff schedules.',
    highlights: [
      'Drag-and-drop table management',
      'Real-time reservation availability',
      'Role-based authentication',
      'Advanced search and filters',
      'Visual floor-planning interface',
    ],
    tags: ['React.js', 'Drag & Drop', 'Real-time', 'RBAC'],
    accent: 'from-rose-500 to-pink-500',
  },
  {
    name: 'Autoshkollaime',
    subtitle: 'Driving School App',
    platform: 'React Native · iOS & Android',
    description:
      'Led the complete rebuild of v2 — redesigning the UI and internal architecture for better performance and UX.',
    highlights: [
      'Rebuilt the app from scratch for speed and stability',
      'Fixed critical bugs in login and payment flows',
      'Learning & testing system for driving exams',
      'Push notifications for reminders',
      'Admin dashboard for user management and revenue analytics',
    ],
    tags: ['React Native', 'Rebuild', 'Payments', 'Analytics'],
    accent: 'from-fuchsia-500 to-purple-500',
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
      'Shipped 6+ real-world products including KosGo, ATK Lotaria, Prona Scout, Macintoks, Comandante Marcos and Autoshkollaime.',
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
