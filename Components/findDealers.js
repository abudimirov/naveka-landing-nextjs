import Link from "next/link";

export default function FindDealers() {
    return (
        <div className="bg-gray-50">
            <div
                className="lg:w-2/3 mx-auto mt-20 py-12 px-10 lg:px-0  lg:py-16 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900">
                    <span className="block">Не знаете где купить?</span>
                    <span className="block text-indigo-600">Посмотрите список официальных дилеров</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link href="dealers">
                            <a
                               className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900">
                                Найти дилера
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}