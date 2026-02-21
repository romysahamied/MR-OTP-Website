import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const GetStartedPageForm = dynamic(() => import('@/components/GetStartedPageForm'), { ssr: true })

export const metadata: Metadata = {
  title: 'Get Started | Mr-OTP',
  description: 'Let\'s make your communications happen. Connect with the Mr-OTP team for OTP SMS, Bulk SMS, RCS, and enterprise messaging solutions.',
}

type Props = { searchParams: Promise<{ from?: string }> }

export default async function GetStartedPage({ searchParams }: Props) {
  const params = await searchParams
  const from = params?.from ?? 'rcs'

  return (
    <>
      <Header />
      <GetStartedPageForm backTo={from} />
      <Footer />
    </>
  )
}
