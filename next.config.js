/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  // GitHub Pages project repository path
  basePath: isProduction
    ? '/Sumit_Panchal_Manual_QA_Portfolio'
    : '',

  // Generate a static website for GitHub Pages
  output: 'export',

  // Generate directory-style routes
  trailingSlash: true,

  // GitHub Pages does not provide Next.js image optimization
  images: {
    unoptimized: true,
  },

  // Preserve your existing GLSL shader loader
  webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'webpack-glsl-loader',
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;