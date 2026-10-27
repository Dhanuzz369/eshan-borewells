import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Next 16.3 caches Turbopack build output on disk by default and Vercel restores
    // that cache between deploys. A stale cache shipped old globals.css with new markup
    // (wrong developer logos, unsized images), so production builds compile fresh.
    turbopackFileSystemCacheForBuild: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
      ],
    }, {
      // Vercel preview/deployment hosts duplicate the production site; keep them out of search.
      source: "/:path*",
      has: [{ type: "host", value: "(?<host>.+)\\.vercel\\.app" }],
      headers: [{ key: "X-Robots-Tag", value: "noindex" }],
    }, {
      // Unhashed files in /public: cache for a week, revalidating in the background.
      source: "/:file([^/]+\\.(?:webp|png|jpg|jpeg|svg))",
      headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
    }];
  },
  async redirects() {
    // Contact details live in the homepage contact section.
    return [{ source: "/contact", destination: "/#contact", permanent: true }];
  },
};

export default nextConfig;
