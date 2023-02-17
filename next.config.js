/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/material-outlined/48/null/filled-circle--v2.png',
      },
    ],
  },
};

module.exports = nextConfig;
