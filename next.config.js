const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/Samin-Labbaf' : '',
  assetPrefix: isProd ? '/Samin-Labbaf/' : '',
};
