/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      (
        process.env.NEXT_PUBLIC_API_URL ??
        "https://forcibly-mutual-hog.ngrok-free.app"
      )
        .replace(/^https?:\/\//, "")
        .split(":")[0],
    ],
  },
};

export default nextConfig;
