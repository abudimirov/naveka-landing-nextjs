import Head from 'next/head'
import Link from "next/link";
import Nav from "../Components/nav";



export default function Dealers() {
    return (
        <div className="h-screen">
            <Head>
                <title>Naveka - где купить? Список дилеров</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Список официальных дилеров бренда Naveka в России" />
            </Head>
            <div className="h-full">
                <Nav />
                <main className="bg-gradient-to-br from-blue-400 to-blue-900 px-4">
                    <h1 className="text-2xl lg:text-4xl font-bold text-center pt-20 pb-10 text-white">Где купить вентиляцию Naveka?</h1>
                        <div
                            className="flex items-center p-5 lg:p-10 overflow-hidden relative">
                            <div
                                className="w-full lg:w-3/4 rounded bg-white shadow-xl p-5 mx-auto lg:p-20 text-gray-800 relative md:text-left">
                                <h2 className="font-bold uppercase text-2xl mb-5 text-center lg:text-left">Для частных клиентов</h2>
                                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center text-center lg:text-left mb-5">
                                    <div className="flex-shrink-0 w-full lg:w-40 px-5 pb-5 lg:pl-0 font-semibold text-2xl">
                                        VentTop
                                    </div>
                                    <div className="text-sm pb-5">
                                        <ul className="lg:list-disc">
                                            <li>Онлайн-оплата банковской картой</li>
                                            <li>Доставка оборудования по всей России</li>
                                            <li>Есть офис самовывоза недалеко от м. Рыбацкое</li>
                                        </ul>
                                    </div>
                                    <div className="flex-shrink-0 px-10 pb-5">
                                        <ul>
                                            <li>+7 (812) 627-21-38</li>
                                            <li>+7 (495) 118-02-79</li>
                                        </ul>
                                    </div>
                                    <div className="lg:w-40 pb-5">
                                        <a href="https://venttop.com/?utm_source=naveka&utm_medium=display&utm_campaign=naveka-site&utm_content=dealers&utm_term=for-persons" target="_blank">
                                            <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-xl px-10 py-2 font-semibold">
                                                Интернет-магазин
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center text-center lg:text-left">
                                    <div className="flex-shrink-0 w-full lg:w-40 px-5 pb-5 lg:pl-0 font-semibold text-2xl">
                                        ОПТ-ОВиК
                                    </div>
                                    <div className="text-sm pb-5">
                                        <ul className="lg:list-disc">
                                            <li>Доставка оборудования по всей России</li>
                                            <li>Есть офис самовывоза недалеко от м. Черная Речка</li>
                                        </ul>
                                    </div>
                                    <div className="flex-shrink-0 px-10 pb-5">
                                        <ul>
                                            <li>+7 (812) 627-21-38</li>
                                            <li>+7 (495) 118-02-79</li>
                                        </ul>
                                    </div>
                                    <div className="lg:w-40 pb-5">
                                        <a href="https://www.optovent.ru/" rel="noindex nofollow" target="_blank">
                                            <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-xl px-10 py-2 font-semibold">
                                                Интернет-магазин
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div
                        className="flex items-center p-5 lg:p-10 overflow-hidden relative">
                        <div
                            className="w-full xl:w-3/4 mx-auto rounded bg-white shadow-xl p-5 lg:p-20 text-gray-800 relative md:text-left">
                            <h1 className="font-bold uppercase text-2xl mb-5 text-center lg:text-left">Бизнесу</h1>
                            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
                                <div className="flex-shrink-0 lg:w-40 px-5 pb-5 lg:pl-0 font-semibold text-2xl">
                                    Развитие
                                </div>
                                <div className="lg:w-48 flex-1 text-sm pb-5">
                                    Cамый полный каталог с рекомендованными розничными ценами и доставкой по всей России.
                                </div>
                                <div className="flex-shrink-0 px-10 pb-5">
                                    <ul>
                                        <li>+7 (812) 309-74-06</li>
                                        <li>+7 (495) 668-10-22</li>
                                        <li>sales@progress-nw.ru</li>
                                    </ul>
                                </div>
                                <div className="pb-5">
                                    <a href="https://progress-nw.ru/?utm_source=naveka&utm_medium=display&utm_campaign=naveka-site&utm_content=dealers&utm_term=for-business" target="_blank">
                                        <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-xl px-10 py-2 font-semibold mb-3">
                                            B2B интернет-магазин
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <hr />
                            <div className="text-center lg:text-right mt-5">
                                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
                                    <div className="flex-shrink-0 w-full lg:w-40 px-5 pb-5 lg:pl-0 lg:text-left">
                                        VentTop
                                    </div>
                                    <div className="w-full lg:w-40 pb-5 font-semibold">
                                        Санкт-Петербург
                                    </div>
                                    <div className="pb-5">
                                        Пн-пт: <br />с 09:00 до 17:00
                                    </div>
                                    <div className="flex-shrink-0 px-10 pb-5">
                                        <ul>
                                            <li>+7 (812) 627-21-38</li>
                                            <li>+7 (495) 118-02-79</li>
                                        </ul>
                                    </div>
                                    <div className="pb-5 lg:w-40">
                                        <ul>
                                            <li>https://venttop.com</li>
                                            <li>info@venttop.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
                                    <div className="flex-shrink-0 w-full lg:w-40 px-5 pb-5 lg:pl-0 lg:text-left">
                                        ОПТ-ОВиК
                                    </div>
                                    <div className="w-full lg:w-40 pb-5 font-semibold">
                                        Санкт-Петербург
                                    </div>
                                    <div className="pb-5">
                                        Пн-пт: <br />с 10:00 до 18:00
                                    </div>
                                    <div className="flex-shrink-0 px-10 pb-5">
                                        <ul>
                                            <li>+7 (812) 922-95-69</li>
                                            <li>+7 (965) 018-52-18</li>
                                        </ul>
                                    </div>
                                    <div className="pb-5 lg:w-40">
                                        <ul>
                                            <li>https://www.optovent.ru</li>
                                            <li>opt-ovik@mail.ru</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
                                    <div className="flex-shrink-0 w-full lg:w-40 px-5 pb-5 lg:pl-0 lg:text-left">
                                        Смарт Клуб
                                    </div>
                                    <div className="w-full lg:w-40 pb-5 font-semibold">
                                        Санкт-Петербург
                                    </div>
                                    <div className="pb-5">
                                        Пн-пт: <br />с 10:00 до 18:00
                                    </div>
                                    <div className="flex-shrink-0 px-10 pb-5">
                                        <ul>
                                            <li>+7 (921) 950-23-93</li>
                                        </ul>
                                    </div>
                                    <div className="pb-5 lg:w-40">
                                        <ul>
                                            <li>smart.vent@mail.ru</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
                                    <div className="flex-shrink-0 w-full lg:w-40 px-5 pb-5 lg:pl-0 lg:text-left">
                                        Коменсис
                                    </div>
                                    <div className="w-full lg:w-40 pb-5 font-semibold">
                                        Санкт-Петербург
                                    </div>
                                    <div className="pb-5">
                                        Пн-пт: <br />с 10:00 до 18:00
                                    </div>
                                    <div className="flex-shrink-0 px-10 pb-5">
                                        <ul>
                                            <li>+7 (921) 090-64-48</li>
                                        </ul>
                                    </div>
                                    <div className="pb-5 lg:w-40">
                                        <ul>
                                            <li>https://comensys.ru/</li>
                                            <li>project@comensys.ru</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
                                    <div className="flex-shrink-0 w-full lg:w-40 px-5 pb-5 lg:pl-0 lg:text-left">
                                        iRicond
                                    </div>
                                    <div className="w-full lg:w-40 pb-5 font-semibold">
                                        Москва
                                    </div>
                                    <div className="pb-5">
                                        Пн-пт: <br />с 10:00 до 17:00
                                    </div>
                                    <div className="flex-shrink-0 px-10 pb-5">
                                        <ul>
                                            <li>+7 (495) 721-88-28</li>
                                        </ul>
                                    </div>
                                    <div className="pb-5 lg:w-40">
                                        <ul>
                                            <li>http://www.iricond.ru/</li>
                                            <li>info@iricond.ru</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
                                    <div className="flex-shrink-0 w-full lg:w-40 px-5 pb-5 lg:pl-0 lg:text-left">
                                        Вентсистем
                                    </div>
                                    <div className="w-full lg:w-40 pb-5 font-semibold">
                                        Мурманск
                                    </div>
                                    <div className="pb-5">
                                        Пн-пт: <br />с 10:00 до 17:00
                                    </div>
                                    <div className="flex-shrink-0 px-10 pb-5">
                                        <ul>
                                            <li>+7 (996) 934-89-45</li>
                                            <li>+7 (950) 893-56-78</li>
                                        </ul>
                                    </div>
                                    <div className="pb-5 lg:w-40">
                                        <ul>
                                            <li>vent_system@inbox.ru</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
                                    <div className="flex-shrink-0 w-full lg:w-40 px-5 pb-5 lg:pl-0 lg:text-left">
                                        Альтернатива РК
                                    </div>
                                    <div className="w-full lg:w-40 pb-5 font-semibold">
                                        Екатеринбург
                                    </div>
                                    <div className="pb-5">
                                        Пн-пт: <br />с 10:00 до 17:00
                                    </div>
                                    <div className="flex-shrink-0 px-10 pb-5">
                                        <ul>
                                            <li>+7 (343) 287-36-86</li>
                                            <li>+7 (922) 134-32-22</li>
                                        </ul>
                                    </div>
                                    <div className="pb-5 lg:w-40">
                                        <ul>
                                            <li>http://alternativa-rk.ru</li>
                                            <li>alternativa.rk@bk.ru</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center">
                                    <div className="flex-shrink-0 w-full lg:w-40 px-5 pb-5 lg:pl-0 lg:text-left">
                                        Альтернатива РК
                                    </div>
                                    <div className="w-full lg:w-40 pb-5 font-semibold">
                                        Алушта
                                    </div>
                                    <div className="pb-5">
                                        Пн-пт: <br />с 10:00 до 17:00
                                    </div>
                                    <div className="flex-shrink-0 px-10 pb-5">
                                        <ul>
                                            <li>+7 (982) 673-82-55</li>
                                            <li>+7 (918) 468-25-77</li>
                                        </ul>
                                    </div>
                                    <div className="pb-5 lg:w-40">
                                        <ul>
                                            <li>http://alternativa-rk.ru</li>
                                            <li>alternativa.rk@bk.ru</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}