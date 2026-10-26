import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://harshithachodey.dev'),
  title: 'Harshitha Chodey | Full-Stack Developer & AI/ML Specialist',
  description: 'Harshitha Chodey is a Computer Science (AI & ML) specialist and Full-Stack Developer building scalable enterprise web applications, real-time dashboards, and AI-powered workflows.',
  keywords: [
    'Harshitha Chodey',
    'Harshitha Chode',
    'Full Stack Developer',
    'AI ML Specialist',
    'Frontend Developer',
    'React Developer',
    'CivicFlow AI',
    'BioFactor Pulse',
  ],
  authors: [{ name: 'Harshitha Chodey' }],
  icons: {
    icon: '/avatar.png',
    apple: '/avatar.png',
  },
  openGraph: {
    title: 'Harshitha Chodey | Full-Stack Developer & AI/ML Specialist',
    description: 'Portfolio of Harshitha Chodey — Computer Science (AI & ML) undergraduate and Full Stack Developer with enterprise internship experience.',
    url: 'https://harshithachodey.dev',
    siteName: 'Harshitha Chodey Portfolio',
    images: [
      {
        url: '/harshitha.png',
        width: 1200,
        height: 675,
        alt: 'Harshitha Chodey',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const themeBootstrap = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    document.documentElement.dataset.theme = 'light';
    document.documentElement.classList.remove('dark');
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} data-theme="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
