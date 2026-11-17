export const profile = {
  name: 'Deepak Kumar',
  initials: 'DK',
  title: 'Full Stack Engineer',
  tagline: 'Python & Full Stack Engineer',
  heroHeadingLines: ['I build AI-powered', 'web applications', 'that scale.'],
  heroSubtext:
    'I build full stack web applications combining FastAPI, React and Generative AI — from async microservices to type-safe, production-ready UIs.',
  yearsExperience: '3+ Years Experience',
  location: 'Jaipur, India',
  email: 'csdsraj2050@gmail.com',
  phone: '+91 6377166085',
  linkedin: 'https://linkedin.com/in/deepak-kumar',
  github: 'https://github.com/coderdsraj001',
  resumeFile: '/Deepak-Kumar-Resume.pdf',
}

export const aboutText = {
  eyebrow: 'ABOUT ME',
  heading: 'An engineer who ships, not just codes.',
  subheading:
    'A closer look at how I approach full stack engineering and Generative AI, and what I bring to a team.',
  paragraph:
    'Full Stack Engineer with 3+ years across Python, FastAPI, Django and React, currently building AI-powered web applications at Grand View Research. I combine solid software engineering fundamentals across the entire stack — async APIs, document stores, type-safe UIs — with Generative AI to drive business logic and speed up feature delivery. Before that, I worked across Django REST APIs and Ruby on Rails services, integrating payment gateways and third-party platforms end-to-end.',
}

export const highlights = [
  {
    icon: 'bi-diagram-3',
    title: 'Full Stack Architecture',
    text: 'Designing async APIs, document stores and type-safe UIs that hold up in production.',
  },
  {
    icon: 'bi-stars',
    title: 'Generative AI',
    text: 'Integrating LLMs directly into application workflows to automate business logic.',
  },
  {
    icon: 'bi-rocket-takeoff',
    title: 'Rapid Delivery',
    text: 'Using AI-assisted tooling (Copilot, Cursor, Claude Code) to ship features faster without cutting quality.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Reliability',
    text: 'Optimized queuing, containerized deployments and tested, reusable backend components.',
  },
]

export const skillGroups = [
  {
    key: 'backend',
    title: 'Backend',
    items: ['Python', 'FastAPI', 'Django', 'Pytest', 'Celery', 'RebitMQ', 'Ruby on Rails', 'MongoDB', 'SQL', 'Redis'],
  },
  {
    key: 'frontend',
    title: 'Frontend',
    items: ['React.js', 'TypeScript', 'Redux', 'Bootstrap', 'HTML5'],
  },
  {
    key: 'ai',
    title: 'Generative AI',
    items: ['OpenAI APIs', 'LLM Integration', 'Prompt Engineering', 'AI-Assisted Dev (Copilot, Cursor, Claude Code)'],
  },
  {
    key: 'tools',
    title: 'Tools & Workflow',
    items: ['Docker', 'Git', 'RSpec', 'REST APIs', 'CI/CD'],
  },
]

export const experience = [
  {
    range: 'Jul 2025 — Present',
    role: 'Python Developer / Full Stack Developer',
    company: 'Grand View Research',
    location: 'Jaipur, Rajasthan',
    tags: ['Python','FastAPI', 'Pytest', 'React', 'TypeScript', 'MongoDB', 'Celery', 'RebitMq', 'Redis', 'Generative AI'],
    bullets: [
      'Engineer high-throughput microservices and asynchronous APIs using FastAPI and Python, with scalable MongoDB document stores and Redis-optimized queuing.',
      'Build clean, responsive, type-safe UI components with React, TypeScript and Redux for predictable application state.',
      'Integrate LLMs directly into application workflows to drive dynamic business logic and automated decision-making.',
      'Containerize environments with Docker for seamless CI/CD, and use AI-assisted tooling (Copilot, Cursor, Claude Code) for rapid prototyping and accelerated feature rollout.',
    ],
  },
  {
    range: 'Apr 2024 — Jun 2025',
    role: 'Python Developer',
    company: 'Gohashinclude Pvt. Ltd.',
    location: 'Jaipur, Rajasthan',
    tags: ['Python', 'Django', 'REST APIs', 'WooCommerce', 'Shopify'],
    bullets: [
      'Developed and maintained scalable web applications using Django and Python.',
      'Designed and implemented RESTful APIs for frontend-backend communication.',
      'Integrated third-party services including payment gateways, WooCommerce and Shopify.',
      'Owned database design and implemented user authentication and authorization.',
      'Built and maintained reusable Django apps, views and templates.',
    ],
  },
  {
    range: 'Aug 2022 — Apr 2023',
    role: 'Junior Backend Developer',
    company: 'Rvj Infotech',
    location: 'Jaipur, Rajasthan',
    tags: ['Ruby', 'Ruby on Rails', 'RSpec', 'Redis'],
    bullets: [
      'Developed web applications using Ruby on Rails, building reusable components and optimizing ActiveRecord queries for performance.',
      'Implemented user authentication and role-based access control.',
      'Wrote RSpec test cases and ensured code quality through unit and integration testing.',
      'Handled background job processing using Sidekiq and Redis, and integrated third-party APIs (payment gateways, email delivery).',
    ],
  },
  {
    range: 'Apr 2022 — Jul 2022',
    role: 'Trainee Engineer (Internship)',
    company: 'Rvj Infotech',
    location: 'Jaipur, Rajasthan',
    tags: ['Ruby', 'Ruby on Rails', 'Bootstrap', 'SQL'],
    bullets: [
      'Developed 3–4 full stack web projects using Ruby on Rails, gaining hands-on experience with the framework and MVC architecture.',
      'Built responsive UIs with Bootstrap and integrated them with backend APIs.',
      'Worked on database design and CRUD operations using PostgreSQL/MySQL, and implemented authentication and form validation.',
    ],
  },
]

export const projects = [
  {
    title: 'Keystone — AI Report Generation Platform',
    description:
      'An AI-powered platform for generating business reports and data visualizations, with scalable APIs for document processing and automated chart generation.',
    tags: ['Python', 'Pytest', 'Celery', 'RabbitMq', 'Redis', 'FastAPI', 'React', 'MongoDB', 'OpenAI'],
    features: [
      'Designed scalable APIs for document processing and automated chart generation',
      'Integrated OpenAI APIs for AI-assisted content generation',
      'Implemented PDF generation and report export functionality',
      'Built data visualizations with Highcharts',
    ],
    architecture: 'Microservices',
  },
  {
    title: 'Gift Card Marketplace',
    description:
      'A secure online marketplace for buying and selling gift cards, with integrated payment processing and admin tooling.',
    tags: ['Python', 'Django', 'SQL', 'Docker', 'jinja templating'],
    features: [
      'Built REST APIs and integrated payment gateway services',
      'Implemented user authentication, product management and an admin dashboard',
      'Optimized database queries and backend performance',
      'Containerized the application with Docker',
    ],
    architecture: 'Monolithic',
  },
]

export const education = {
  degree: 'B.Tech, Computer Science & Engineering',
  school: 'Institute of Engineering & Technology, Alwar (Rajasthan)',
  date: 'Jun 2021',
}
