import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-20">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  営業代行と<br />コーチングで<br />ビジネスの成長を支援
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  小山事務所は、営業代行とビジネスコーチングを通じて、企業の成長と発展をサポートします。豊富な経験と実績を活かし、お客様のビジネスに最適なソリューションを提供いたします。
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/contact"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    お問い合わせ
                  </Link>
                  <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                    サービス詳細 <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true" />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true" />
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                    <div className="p-8">
                      {/* ここに必要なコンテンツを追加できます */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">ビジネスの成功をサポート</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            専門知識と経験を活かした<br />トータルソリューション
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            営業代行とコーチングを通じて、お客様のビジネスの成長と発展をサポートします。豊富な経験と実績を持つ専門家が、最適なソリューションを提供いたします。
          </p>
        </div>
      </div>
    </div>
  )
} 