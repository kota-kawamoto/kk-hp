import Link from 'next/link'

const companyInfo = {
  name: '株式会社SEA',
  phone: '080-3517-1615',
  business: [
    '営業代行',
    '営業コンサルティング',
    'ITコンサルティング',
    'SES',
  ],
  employees: '10名（契約社員含む）',
}

export default function Profile() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">会社概要</h2>
          <div className="mt-6 space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-900">会社名</h3>
              <p className="mt-1 text-lg text-gray-600">{companyInfo.name}</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-900">電話番号</h3>
              <p className="mt-1 text-lg text-gray-600">{companyInfo.phone}</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold text-gray-900">事業内容</h3>
              <ul className="mt-1 space-y-1">
                {companyInfo.business.map((item) => (
                  <li key={item} className="flex items-center text-lg text-gray-600">
                    <svg className="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">従業員数</h3>
              <p className="mt-1 text-lg text-gray-600">{companyInfo.employees}</p>
            </div>
          </div>
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