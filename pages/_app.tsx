import type { AppProps } from 'next/app'

/**
 * Minimal Pages Router shell so dev can compile `/_error` when App Router hits a 500.
 * (Next skips building `pages/500` in dev and falls back to `/_error`.)
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
