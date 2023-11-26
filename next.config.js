/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      // allow all image to served via https
      remotePatterns: [{ protocol: "https", hostname: "*" }],
   },
}

module.exports = nextConfig
