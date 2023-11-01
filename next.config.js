/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    testEnvVar: process.env.TEST_VAR,
  },

  serverRuntimeConfig: {
    testEnvVar: process.env.TEST_VAR,
  },

  compiler: {
    styledComponents: true,
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
