import Head from 'next/head'
import Link from "next/link";
import Nav from "./Components/nav";

export default function Service() {
    return (
        <div className="">
            <Head>
                <title>Naveka - гарантия на оборудование</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="h-full">
                <Nav />
                <main className="bg-gradient-to-br from-blue-400 to-blue-900 px-4 pb-10">
                    <h1 className="text-4xl font-bold text-center py-20 text-white">Гарантия и сервис</h1>
                    <div className="lg:w-2/3 mx-auto bg-gray-50 mb-10 rounded flex flex-col items-center">
                        <img src="/pics/service.jpg" alt="Сервис Naveka" className="rounded" />
                    </div>
                    <div className="lg:w-2/3 mx-auto bg-gray-50 rounded flex flex-col items-center">
                        <div className="px-4 lg:py-20 lg:px-20 flex flex-wrap">
                            <img src="/warranty.svg" alt="" className="h-24 lg:h-36 lg:w-1/4" />
                            <div className="lg:w-3/4">
                                <p className="text-2xl pb-5">Гарантия на канальную вентиляцию и другое оборудование бренда Naveka - <span className="font-bold">от 1 до 3 лет</span></p>
                                <p className="text-2xl pb-5">Гарантия на установки Naveka - <span className="font-bold">3 года</span></p>
                                <p className="text-2xl pb-5">Расширенная гарантия - <span className="font-bold">до 5 лет *</span></p>
                            </div>
                            <p className="pt-10">* Программа расширенной гарантии действует для клиентов, непосредственно использующих наше оборудование на своих обьектах и заключивших договор на сервисное обслуживание оборудования Naveka компанией, сотрудники которой прошли у нас обучение и получили сертификат по программе «Эксплуатация и сервис оборудования Naveka и Lindab». </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}