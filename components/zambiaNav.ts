/** When set, main-site pages keep Zambia-themed header/footer chrome */
export const ZAMBIA_NAV_QUERY_KEY = 'nav'
export const ZAMBIA_NAV_QUERY_VALUE = 'zambia'
export const ZAMBIA_BASE_PATH = '/bulk-sms-zambia'

export function isZambiaMicrositePath(pathname: string | null): boolean {
  if (!pathname) return false
  return pathname === ZAMBIA_BASE_PATH || pathname.startsWith(`${ZAMBIA_BASE_PATH}/`)
}

function isExternalOrHashHref(href: string): boolean {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href === '#' ||
    href.startsWith('#')
  )
}

/** Append ?nav=zambia (or merge) so Blog / Contact / SMS / WhatsApp keep Zambia chrome */
export function withZambiaNavHref(href: string, isZambiaNav: boolean): string {
  if (!isZambiaNav || isExternalOrHashHref(href)) return href

  const qMark = href.indexOf('?')
  const path = qMark === -1 ? href : href.slice(0, qMark)
  const query = qMark === -1 ? '' : href.slice(qMark + 1)
  const params = new URLSearchParams(query)
  params.set(ZAMBIA_NAV_QUERY_KEY, ZAMBIA_NAV_QUERY_VALUE)
  return `${path}?${params.toString()}`
}

export function isZambiaNavContext(
  pathname: string | null,
  searchParams: URLSearchParams | null,
): boolean {
  return (
    isZambiaMicrositePath(pathname) ||
    searchParams?.get(ZAMBIA_NAV_QUERY_KEY) === ZAMBIA_NAV_QUERY_VALUE
  )
}
