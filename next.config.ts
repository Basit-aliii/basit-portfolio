/** @type {import('next').NextConfig} */

const isVercel = process.env.VERCEL === "1";

const nextConfig = {
  output: "export",
  basePath: isVercel ? "" : "/basit-portfolio",
  assetPrefix: isVercel ? "" : "/basit-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
