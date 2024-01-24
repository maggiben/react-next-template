/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-console
console.log('nextConfig process.env.NEXT_PUBLIC_SEARCH_ENDPOINT', process.env.NEXT_PUBLIC_SEARCH_ENDPOINT);
// eslint-disable-next-line no-console
console.log('nextConfig process.env', process.env);

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
