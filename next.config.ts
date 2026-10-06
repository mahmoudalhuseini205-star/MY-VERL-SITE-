import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"], qualities: [75, 80] },
  poweredByHeader: false,
  // No script-src: a nonce would make every page dynamic, and 'unsafe-inline' (needed by the theme
  // script and Next's inline payload) would add little. These directives need neither.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
        ],
      },
    ];
  },
  // Old links keep working after the rebuild.
  async redirects() {
    const moved = [
      ["/emlak", "/c/emlak"],
      ["/about", "/company"],
      ["/work/emlak-lead-system", "/work/real-estate-platform"],

      ["/work/lead-response-system", "/work/real-estate-platform"],
    ];
    return moved.flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      { source: `/en${source}`, destination: `/en${destination}`, permanent: true },
    ]);
  },
};

export default nextConfig;
