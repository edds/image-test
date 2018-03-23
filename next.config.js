const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|svg|gif|ttf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            publicPath: '/_next/static/images/',
            outputPath: 'static/images/',
          },
        },
      ],
    });

    return config;
  },
});
