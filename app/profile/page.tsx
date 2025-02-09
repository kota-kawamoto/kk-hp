import Link from 'next/link'

const stats = [
  { label: '営業代行実績', value: '100社以上' },
  { label: 'コーチング実績', value: '500時間以上' },
  { label: '顧客満足度', value: '98%' },
  { label: '業界経験', value: '15年以上' },
]

const values = [
  {
    name: '誠実さと信頼',
    description: 'お客様との信頼関係を最も重視し、常に誠実な対応を心がけています。',
  },
  {
    name: '結果へのコミットメント',
    description: 'お客様の目標達成に向けて、具体的な成果を出すことにコミットします。',
  },
  {
    name: '継続的な成長支援',
    description: '一時的な支援ではなく、長期的な視点でお客様の成長をサポートします。',
  },
  {
    name: 'プロフェッショナリズム',
    description: '常に最新の知識とスキルを磨き、プロフェッショナルとしての価値を提供します。',
  },
]

export default function Profile() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">K&Co.について</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            K&Co.は、営業代行とビジネスコーチングを通じて、企業の成長と発展をサポートする事務所です。
            豊富な経験と実績を持つ専門家が、お客様のビジネスの成功をサポートいたします。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">代表プロフィール</h3>
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-900">小山 太郎</h4>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              大手企業での営業経験を経て、独立。営業代行とビジネスコーチングを通じて、
              多くの企業の成長をサポートしてきました。顧客の目標達成に向けて、
              実践的なアドバイスと具体的な行動計画を提供しています。
            </p>
          </div>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className="text-sm leading-6 text-gray-600">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">私たちの価値観</h3>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {value.name}
                </dt>
                <dd className="inline">{' - ' + value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            href="/contact"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  )
} 