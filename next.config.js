const isWin = process.platform === 'win32'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**',
      },
    ],
  },

  /*
   * Do NOT run `npm run clean` before every `npm run dev` (e.g. via a predev hook). Deleting `.next`
   * while a dev server is still bound to port 3000—or mid-compile—causes missing chunks and the
   * dev overlay “missing required error components, refreshing…”. Use `npm run dev:fresh` when you
   * intentionally want a clean cache.
   */

  async redirects() {
    return [
      {
        source: '/bulk-sms-zambia/contact',
        destination: '/contact-sales',
        permanent: true,
      },
    ]
  },

  /*
   * Dev stability (especially on Windows / synced folders):
   * - Longer page buffer so routes aren’t torn down as aggressively on refresh
   * - Polling + aggregateTimeout when native file events flake (fixes broken chunks / ENOENT)
   */
  onDemandEntries: {
    // Keep compiled routes longer so server/runtime do not reference evicted webpack chunks.
    maxInactiveAge: 15 * 60 * 1000,
    pagesBufferLength: 32,
  },

  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        aggregateTimeout: 1200,
        // Native watchers can miss events on Windows, OneDrive, etc.
        ...(isWin ? { poll: 1500 } : {}),
      }
      /*
       * Reduces “Cannot find module './NNNN.js'” after refresh/HMR on Windows: numeric chunk IDs
       * can point at files webpack already rotated; named ids align runtime with emitted chunks.
       * Mutate `optimization` in place so Next’s defaults are preserved.
       */
      if (!config.optimization) config.optimization = {}
      config.optimization.moduleIds = 'named'
      config.optimization.chunkIds = 'named'
      /*
       * Serialize compilation in dev so emitted chunks finish writing before the next build step
       * (reduces ENOENT / missing numeric chunks on fast machines and antivirus delays).
       * Top-level webpack option — not under `optimization` (schema rejects it there).
       */
      config.parallelism = 1
      /*
       * Webpack’s persistent dev cache often keeps stale chunk IDs (e.g. ./8948.js) after HMR while
       * files on disk were rotated — “Cannot find module './NNNN.js'”. Disable cache in dev on
       * all platforms; production builds are unaffected.
       */
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig
