import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '小山事務所',
  description: '営業代行とコーチング事業を提供する小山事務所のウェブサイトです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                お問い合わせ
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                サービス
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-gray-900">
                プロフィール
              </Link>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-xs leading-5 text-gray-500">
                &copy; {new Date().getFullYear()} 小山事務所. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 