import Head from 'next/head'
import Nav from "./Components/nav";
import FindDealers from "./Components/findDealers";



export default function Business() {
    return (
        <div className="">
            <Head>
                <title>Naveka - вентиляционное оборудование для профессионалов. HVAC, промышленная вентиляция</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="h-full">
                <Nav />
                <main className="bg-gradient-to-br from-blue-400 to-blue-900 px-4 pb-10">
                    <div className="lg:w-2/3 mx-auto flex flex-wrap py-10 items-center">
                        <div className="w-full lg:w-2/4 text-white">
                            <h1 className="text-2xl lg:text-4xl font-bold py-10 text-white leading-10">
                                Для профессионалов
                                <small className="text-5xl text-indigo-800 pt-3 uppercase block">Naveka VAST1</small>
                            </h1>
                            <p className="py-3 text-xl">Вентиляционные установки серии VAST1 предназначены для выполнения всех задач по обработке воздуха: увлажнение, осушение, рекуперация, фильтрация, нагрев, охлаждение, смешение.</p>
                            <p className="text-xl">Установки имеют каркасно-панельную конструкцию с негорючей минеральной ватой в качестве изоляции в панелях установки. </p>
                            <div className="mt-10 flex flex-wrap jusify-between text-white">
                                <div className="mr-20">
                                    <h2 className="text-2xl font-semibold">Производительность</h2>
                                    <p className="text-xl">от 500 м3/ч до 90 000 м3/ч</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold">Для любых помещений</h2>
                                    <p className="text-xl">21+ типоразмер</p>
                                </div>
                            </div>

                        </div>
                        <div className="w-full lg:w-2/4 p-5 order-first lg:order-last">
                            <img src="/pics/naveka-vast-for-professional-ventilation.png" loading="lazy" alt="Naveka VAST для промышленной вентиляции" />
                        </div>
                    </div>
                </main>
                <div className="px-5 lg:px-0 lg:w-2/3 mx-auto pb-10">
                    <h2 className="text-2xl font-semibold py-10">Ключевые особенности VAST1</h2>
                    <div className="flex flex-wrap justify-between">
                        <div className="lg:w-2/4 lg:pr-10">
                            <p className="mb-5 text-xl">Возможно изготовление нестандартных типоразмеров</p>
                            <p className="mb-5 text-xl">3 варианта исполнения: общепромышленное, для бассейнов и помещений с повышенной влажностью (AQUA), а так же гигиенического исполнения для чистых помещений</p>
                            <p className="mb-5 text-xl">Комплектация современной системой автоматики любой сложности</p>
                        </div>
                        <div className="lg:w-2/4 lg:pl-10">
                            <p className="mb-5 text-xl">Толщина панелей 25мм и 50мм</p>
                            <p className="mb-5 text-xl">Изготовление панелей из: оцинкованной стали; оцинкованной стали с покраской в цвета палитры RAL; нержавеющей стали класса AISI 304 или AISI 430</p>
                        </div>
                    </div>
                </div>
            </div>
            <FindDealers />
        </div>
    )
}