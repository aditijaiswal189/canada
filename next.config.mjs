/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.gtrimmigration.com", "secure.gravatar.com"], // Add your domain here
  },
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during the build process
  },
  reactStrictMode: false,
};

export default nextConfig;
