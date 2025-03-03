/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'uploadthing.com',
      'utfs.io',
      'img.clerk.com',
      'subdomain',
      'files.stripe.com',
      'pbs.twimg.com',
    ],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
