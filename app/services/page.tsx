import Link from 'next/link'

const features = [
  {
    name: '営業代行サービス',
    description: '豊富な経験と実績を持つ営業のプロフェッショナルが、お客様に代わって営業活動を行います。新規顧客の開拓から、既存顧客のフォローアップまで、幅広い営業活動をサポートいたします。',
    details: [
      '新規顧客開拓',
      '商談・提案',
      '契約締結サポート',
      '顧客フォローアップ',
      'マーケティング戦略立案',
    ],
  },
  {
    name: 'コーチングサービス',
    description: 'ビジネスの成長に必要なスキルやマインドセットを、1対1のコーチングセッションを通じて習得していただきます。経営者や管理職の方々の成長をサポートし、組織全体の発展に貢献します。',
    details: [
      'リーダーシップ開発',
      'コミュニケーション能力向上',
      '目標設定と達成',
      'タイムマネジメント',
      'ストレスマネジメント',
    ],
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">サービス内容</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ビジネスの成長を支援する<br />トータルソリューション
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            小山事務所では、営業代行とコーチングの2つの主要サービスを提供しています。お客様のニーズに合わせて、最適なソリューションをご提案いたします。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <ul className="mt-8 space-y-3">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </dd>
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