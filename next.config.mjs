/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gopicky.com",
      },
      {
        protocol: "https",
        hostname: "picky-app.s3-ap-southeast-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
