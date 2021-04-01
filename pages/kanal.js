import Head from 'next/head'
import Link from "next/link";
import Nav from "./Components/nav";
import FindDealers from "./Components/findDealers";



export default function Kanal() {
    return (
        <div className="">
            <Head>
                <title>Канальная вентиляция Naveka - для дома, квартиры и офиса</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="h-full">
                <Nav />
                <main className="bg-gradient-to-br from-blue-400 to-blue-900 px-4 pb-10">
                    <div className="lg:w-2/3 mx-auto flex flex-wrap py-10 items-center">
                        <div className="w-full lg:w-2/4 text-white">
                            <h1 className="text-2xl lg:text-4xl font-bold py-10 text-white leading-10">
                                Канальные вентиляторы
                                <small className="text-5xl text-indigo-800 pt-3 uppercase block">Naveka V</small>
                            </h1>
                            <p className="py-3 text-xl">Naveka V устанавливается непосредственно в канал или в разрыв воздуховода, прокачивая по нему воздух, и благодаря небольшим размерам скрывается за подшивным потолком или в специальном вертикальном шкафу. </p>
                            <p className="pb-10 text-xl">Это вентиляторы с самыми низкими шумовыми характеристиками, поэтому не требуют дополнительной звукоизоляции. </p>
                            <div>
                                <Link href="/dealers">
                                <a className="rounded-md py-2 shadow px-4 bg-lime text-white hover:bg-indigo-900 tracking-wide font-medium">
                                    Купить вентилятор Naveka
                                </a>
                                </Link>
                            </div>

                        </div>
                        <div className="w-full lg:w-2/4 p-5 order-first lg:order-last">
                            <img src="/ventilatori/kanalnij-ventilator-naveka-kruglij.png" alt="" />
                        </div>
                    </div>
                </main>
                <div className="px-10 lg:px-0 lg:w-2/3 mx-auto pb-10 mt-10">
                    <div className="flex flex-wrap justify-between items-center mb-20">
                        <div className="lg:w-2/4 lg:pr-10">
                            <h2 className="text-2xl lg:text-3xl font-extrabold mt-20 pb-10">Для круглого канала</h2>
                            <ul className="list-disc text-xl">
                                <li className="mb-5">Высокое качество в сборке и надежность в работе.</li>
                                <li className="mb-5">Диаметр подключений: 100, 125, 160, 200, 315 мм.</li>
                                <li className="mb-5">Максимальный расход воздуха от 380 до 1900 м3/ч.</li>
                                <li className="mb-5">Максимальное давление от 350 до 760 Па.</li>
                                <li className="mb-5">Стандартный пластиковый корпус и металлический шумоизолированный.</li>
                                <li className="mb-5">Все вентиляторы оснащаются немецким двигателем ebm-papst.</li>
                            </ul>
                        </div>
                        <div className="lg:w-2/4 lg:pl-10 flex items-center justify-center order-first lg:order-last">
                            <img src="/ventilatori/kruglij-kanalnij-ventilator-naveka.jpg" className="max-h-96" loading="lazy" alt="Вентилятор Naveka Круглый" />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="lg:w-2/4 lg:pl-10 flex items-center justify-center">
                            <img src="/ventilatori/kanalnij-pruamougolnij-ventilator.jpg" className="max-h-96" loading="lazy" alt="Прямоугольный вентилятор Naveka" />
                        </div>
                        <div className="lg:w-2/4 lg:pr-10">
                            <h2 className="text-2xl lg:text-3xl font-extrabold pb-10">Для прямоугольного канала</h2>
                            <ul className="list-disc text-xl">
                                <li className="mb-5">Высокое качество в сборке и надежность в работе.</li>
                                <li className="mb-5">Подключение к каналу от 400 х 200 мм до 1000 х 500 мм.</li>
                                <li className="mb-5">Максимальный расход воздуха от 1350 до 18000 м3/ч.</li>
                                <li className="mb-5">Максимальное давление от 570 до 1150 Па.</li>
                                <li className="mb-5">Корпус из оцинкованной стали, есть шумоизолированное исполнение.</li>
                                <li className="mb-5">Все вентиляторы оснащаются немецким двигателем ebm-papst.</li>
                                <li className="mb-5">Лопатки вентилятора могут быть загнуты вперед или назад.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <FindDealers />

        </div>
    )
}