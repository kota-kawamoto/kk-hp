import Image from 'next/image'

const features = [
  {
    name: '営業代行サービス',
    description: '豊富な経験と実績を持つ営業のプロフェッショナルが、お客様に代わって営業活動を行います。新規顧客の開拓から、商談・提案まで、幅広い営業活動をサポートいたします。',
    details: [
      '新規顧客開拓',
      '商談・提案',
    ],
    image: '/sales.jpg',
  },
  {
    name: 'ITサービス',
    description: 'ITを活用したビジネス支援サービスを提供します。SES、SNS運用、HP作成など、最新のテクノロジーを駆使して、お客様のビジネスをサポートします。',
    details: [
      'SES（システムエンジニアリングサービス）',
      'SNS運用・マーケティング',
      'HP作成・運用',
    ],
    image: '/technology.jpg',
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">サービス内容</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ビジネスの成長を最大化する<br />トータルソリューション
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            株式会社SEAでは、営業とITを融合させたサービスを提供し、企業の成長と発展をサポートします。<br />
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="relative h-80 w-full overflow-hidden rounded-2xl mb-8">
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {feature.name}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col">
                  <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
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
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 