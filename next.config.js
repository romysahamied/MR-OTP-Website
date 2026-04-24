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
        // Slightly longer debounce + polling reduces overlapping rebuilds when you save + refresh
        // quickly (avoids briefly serving HTML that points at CSS/JS chunks still being written).
        aggregateTimeout: 2000,
        // Native watchers can miss events on Windows, OneDrive, etc.
        ...(isWin ? { poll: 2000 } : {}),
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
       * `filesystem` dev cache caused stale chunk → runtime “Cannot find module './NNNN.js'” on
       * Windows. `false` forces full rebuilds every edit, which is slower and increases the window
       * where a refresh can hit a half-written `.next` output. In-memory cache avoids persistent
       * stale maps while keeping compiles faster and more atomic. If chunk errors return, run
       * `npm run dev:fresh` once, or temporarily set `config.cache = false` again.
       */
      config.cache = { type: 'memory', maxGenerations: 1 }
    }
    return config
  },
}

module.exports = nextConfig
