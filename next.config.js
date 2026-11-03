const isProduction = process.env.NODE_ENV === 'production';

const BASE_PATH = isProduction
  ? '/Sumit_Panchal_Manual_QA_Portfolio'
  : '';

const nextConfig = {
  basePath: BASE_PATH,

  output: 'export',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },

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