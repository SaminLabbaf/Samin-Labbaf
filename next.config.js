const repoName = process.env.NEXT_PUBLIC_BASE_PATH || ''; // Default to '' for local development

module.exports = {
  basePath: repoName,
  assetPrefix: repoName ? `${repoName}/` : '',
  trailingSlash: true, // Optional: Ensures URLs have trailing slashes for static hosting
};
