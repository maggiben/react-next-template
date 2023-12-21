/** @type {import('next').NextConfig} */
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
