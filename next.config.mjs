/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,

};

export default nextConfig;
