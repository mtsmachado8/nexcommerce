// next.config.js

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    },
    {
      test: /\.(eot|ttf|woff|woff2|otf)$/,
      loader: 'file-loader',
    });

    return config;
  },
};