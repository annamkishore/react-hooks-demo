/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // feature #1(next): using app directory
    appDir: true,
  },
  async redirects() {
    return [
      {
        // feature #2(next): redirection
        source: '/',
        destination: '/tree-sample',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
