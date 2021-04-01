import Link from "next/link";

export default function Breadcrumbs() {
    return (
        <ul className="my-5">
            <li className="inline">
                <Link href="/">
                    <a className="py-2 pr-4 text-gray-600 hover:text-gray-900 tracking-wide font-medium">
                        Главная →
                    </a>
                </Link>
            </li>
            <li className="inline">
                <Link href="/for-home">
                    <a className="py-2 pr-4 text-gray-600 hover:text-gray-900 tracking-wide font-medium">
                        Для дома и офиса →
                    </a>
                </Link>
            </li>
        </ul>
    )
}