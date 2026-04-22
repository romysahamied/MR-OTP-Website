import { redirect } from 'next/navigation'

/** Local /dashboard → same destination as “Login” in the header */
const DASHBOARD_ORIGIN =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ?? 'https://dashboard.mr-otp.com'

export default function DashboardPage() {
  redirect(DASHBOARD_ORIGIN)
}
