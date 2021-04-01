import Link from "next/link";

export default function Nav() {
    return (
        <nav className="border-b-2 border-gray-50">
            <div className="flex flex-wrap items-center px-4 lg:h-16">
                <Link href="/">
                    <a className="h-full py-3 pr-10">
                        <img className="h-8 lg:h-full" src="/naveka-logo.svg" alt="Вентиляционное оборудование Naveka" />
                    </a>
                </Link>
                <Link href="/dealers">
                    <a className="rounded-md py-2 px-4 bg-indigo-800 text-white hover:bg-indigo-900  font-medium visible lg:hidden">
                        Где купить?
                    </a>
                </Link>
                <ul className="flex flex-nowrap lg:flex-wrap overflow-x-auto text-sm lg:text-default pt-4 pb-6 lg:pb-4">
                    <li className="flex-shrink-0 inline pr-4">
                        <Link href="/for-business">
                            <a className="pb-2 border-b-2 border-transparent hover:border-blue-800">Промышленные решения</a>
                        </Link>
                    </li>
                    <li className="flex-shrink-0 inline px-4">
                        <Link href="/for-home">
                            <a className="pb-2 border-b-2 border-transparent hover:border-blue-800">Для дома и офиса</a>
                        </Link>
                    </li>
                    <li className="flex-shrink-0 inline px-4">
                        <Link href="/kanal">
                            <a className="pb-2 border-b-2 border-transparent hover:border-blue-800">Канальная вентиляция</a>
                        </Link>
                    </li>
                    <li className="flex-shrink-0 inline px-4">
                        <Link href="/service">
                            <a className="pb-2 border-b-2 border-transparent hover:border-blue-800">Гарантия и сервис</a>
                        </Link>
                    </li>
                    <li className="flex-shrink-0 inline px-4 hidden lg:block">
                        <Link href="/dealers">
                            <a className="rounded-md py-2 px-4 bg-indigo-800 text-white hover:bg-indigo-900  font-medium">
                                Где купить?
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}