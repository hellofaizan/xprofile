/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-ext-1.discordapp.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
