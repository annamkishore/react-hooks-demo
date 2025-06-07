/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // feature #2(next): redirection
        source: '/',
        destination: '/typing-game',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
