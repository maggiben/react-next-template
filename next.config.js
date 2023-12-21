/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-console
console.log('process.env.SEARCH_ENDPOINT', process.env.SEARCH_ENDPOINT);

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  
  serverRuntimeConfig: {
    apiSearch: process.env.SEARCH_ENDPOINT,
  },
  publicRuntimeConfig: {
    apiSearch: process.env.SEARCH_ENDPOINT,
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/welcome",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
