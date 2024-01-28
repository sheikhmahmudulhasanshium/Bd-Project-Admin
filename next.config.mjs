/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
          },
          {
            hostname: 'www.nuclearasia.com'
          },
          {
            hostname: 'bdnuclear.energy'

          }
        ],
      },
};

export default nextConfig;
