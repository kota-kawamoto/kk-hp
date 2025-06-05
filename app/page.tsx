import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/companytop.jpg"
            alt="ビジネスミーティング"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div className="relative mx-auto h-full flex items-center max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              営業 × IT<br /><br />ビジネスの成長を最大化
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              株式会社SEAは、営業とITを通じて、企業の成長を最大化します。<br />
              本質的な価値を提供し、柔軟な戦略を構築、可能性を最大化します。<br />
            </p>
          </div>
        </div>
      </div>

      {/* Buttons section */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              お問い合わせ
            </Link>
            <Link
              href="/services"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              サービス詳細
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}