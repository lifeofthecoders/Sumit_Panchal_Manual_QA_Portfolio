
import { assetPath } from "../lib/assetPath";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://lifeofthecoders.github.io"),

  title: "Sumit Panchal | Manual QA Engineer & Quality Analyst",

  description:
    "Sumit Panchal is an experienced Manual QA Engineer specializing in functional testing, regression testing, exploratory testing, test case design, defect reporting, and software quality assurance.",

  keywords: [
    "Sumit Panchal",
    "Manual QA Engineer",
    "Quality Analyst",
    "Software Testing",
    "Manual Testing",
    "Functional Testing",
    "Regression Testing",
    "Exploratory Testing",
    "Smoke Testing",
    "Sanity Testing",
    "Test Case Design",
    "Test Planning",
    "Defect Reporting",
    "Bug Tracking",
    "Quality Assurance",
    "QA Portfolio",
    "Software Quality",
  ],

  authors: [{ name: "Sumit Panchal" }],

  icons: {
    icon: assetPath("/avatar.png"),
    apple: assetPath("/avatar.png"),
  },

  openGraph: {
    title: "Sumit Panchal | Manual QA Engineer & Quality Analyst",

    description:
      "Explore the professional QA portfolio of Sumit Panchal, showcasing expertise in manual testing, test case design, defect analysis, regression testing, and software quality assurance.",

    url: "https://lifeofthecoders.github.io/Sumit_Panchal_Manual_QA_Portfolio/",

    siteName: "Sumit Panchal | Quality Analyst Portfolio",

    images: [
      {
        url: assetPath("/avatar.png"),
        width: 1200,
        height: 675,
        alt: "Sumit Panchal - Manual QA Engineer",
      },
    ],

    locale: "en_US",
    type: "website",
  },
};

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
    <html lang="en" data-theme="light">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: themeBootstrap,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
