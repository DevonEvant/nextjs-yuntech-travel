/** @type {import('next').NextConfig} */

import path from "path";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.yuntech.edu.tw",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve("src");
    config.resolve.alias["!"] = path.resolve("tests");
    config.resolve.alias["$"] = path.resolve("types");
    config.resolve.alias["@app"] = path.resolve("src/app");
    config.resolve.alias["@tests"] = path.resolve("tests");
    config.resolve.alias["@type"] = path.resolve("types");
    config.resolve.alias["@styles"] = path.resolve("styles");
    config.resolve.alias["@fonts"] = path.resolve("fonts");
    return config;
  },
};

export default nextConfig;
