import Head from 'next/head'
import Link from "next/link";
import Nav from "../Components/nav";
import Breadcrumbs from "../Components/breadcrumbs";
import FindDealers from "../Components/findDealers";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '0',
        node5_125: 350,
        node5_160: 410,
        node5_200: 550,
        node5_250: 680,
        node5_315: 770,
    },
    {
        name: '100',
        node5_125: 280,
        node5_160: 360,
        node5_200: 490,
        node5_250: 635,
        node5_315: 720,
    },
    {
        name: '200',
        node5_125: 180,
        node5_160: 290,
        node5_200: 435,
        node5_250: 580,
        node5_315: 670,
    },
    {
        name: '300',
        node5_125: 65,
        node5_160: 180,
        node5_200: 390,
        node5_250: 520,
        node5_315: 630,
    },
    {
        name: '400',
        node5_125: -50,
        node5_160: 60,
        node5_200: 340,
        node5_250: 465,
        node5_315: 595,
    },
    {
        name: '500',
        node5_160: -50,
        node5_200: 275,
        node5_250: 410,
        node5_315: 540,
    },
    {
        name: '600',
        node5_200: 205,
        node5_250: 340,
        node5_315: 500,
    },
    {
        name: '700',
        node5_200: 125,
        node5_250: 260,
        node5_315: 440,
    },
    {
        name: '800',
        node5_200: 30,
        node5_250: 165,
        node5_315: 385,
    },
    {
        name: '900',
        node5_200: -70,
        node5_250: 80,
        node5_315: 330,
    },
    {
        name: '1000',
        node5_250: -30,
        node5_315: 275,
    },
    {
        name: '1100',
        node5_315: 215,
    },
    {
        name: '1200',
        node5_315: 140,
    },
    {
        name: '1300',
        node5_315: 75,
    },
    {
        name: '1400',
        node5_315: 0,
    },
];

export default function Node5() {
    return (
        <div className="">
            <Head>
                <title>Naveka Node5 - приточно-вытяжная вентиляционная установка для дома, квартиры и офиса</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Приточная установка Naveka Node5 для приточно-вытяжной вентиляции сухих помещений. " />
            </Head>
            <div className="h-full">
                <Nav />
                <div className="px-4 pb-10">
                    <Breadcrumbs />
                    <h1 className="text-5xl font-semibold mb-10 lg:mb-20">Naveka Node5</h1>
                    <div className="flex flex-wrap justify-between items-center mb-10 lg:mb-20">
                        <div className="lg:w-2/4 px-10 lg:px-0 mb-10 lg:mb-0 flex justify-center">
                            <img src="/ustanovki/naveka-node5.jpg" className="max-h-96" alt="Naveka Node5" />
                        </div>
                        <div className="lg:w-2/4 lg:pr-10">
                            <p className="mb-5 text-xl px-5 lg:px-0 max-w-prose">Приточно-вытяжные установки Node5 предназначены как для общественных пространств, офиса, административного здания, так и для частного дома или коттеджа. Применяется в зданиях, где требуется соблюдение не высокого уровня шума.</p>
                            <div className="my-5 text-xl flex flex-nowrap items-center justify-between bg-indigo-50 py-10 px-5 rounded-md max-w-prose">
                                <img src="/idea.svg" alt="Рекомендация" className="h-20 inline mr-3"/>
                                <p>Рекомендована к выбору для помещений с сухим воздухом. Из-за особенностей рекуператора способна передавать влагу от вытяжного воздуха приточному, что позволяет поддерживать комфортный климат. Существует исполнение Node5 для установки за пределами помещения.</p>
                            </div>
                            <a href="https://progress-nw.ru/download/docs/2020/ustanovki/Node5.pdf" rel="nofollow" className="text-xl px-10 lg:px-0 hover:text-indigo-900"><img src="/download.svg" alt="Скачать паспорт Node5" className="h-8 mr-4 inline align-text-bottom" /> Паспорт Node5</a>
                        </div>
                    </div>
                    <div className="flex flex-wrap px-5 lg:px-0">
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/motor-koleso-ebmpapst.png" alt="вентилятор ebmpapst" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">Немецкий вентилятор ebmpapst</h3>
                                <p className="text-xl">Высокопроизводительное мотор-колесо</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/recuperator-membranniy.jpg" alt="рекуператор мембранный" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">Мембранный рекуператор</h3>
                                <p className="text-xl">КПД рекуператора до 65%</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/ptc-nagrevatel.png" alt="ptc" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">Безопасный РТС нагреватель</h3>
                                <p className="text-xl">Электрический керамический</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/pult.png" alt="вентилятор ebmpapst" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">Автоматика</h3>
                                <p className="text-xl">Встроенная автоматика и выносной пульт ДУ</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/filtr.png" alt="вентилятор ebmpapst" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">Фильтрация воздуха</h3>
                                <p className="text-xl">Стандартно комплектуется фильтром класса G4 и может быть укомплектован фильтром более тонкой очистки</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/tolshina-25.jpg" alt="Шумоизоляция 25 мм" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">Теплошумоизоляция</h3>
                                <p className="text-xl">Толщина изоляции 25 мм. Корпус из оцинкованной стали</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 lg:px-0  w-full h-96">
                        <h3 className="text-2xl lg:text-3xl font-extrabold my-10">Аэродинамические характеристики Node5</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={1500}
                                height={800}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name"  />
                                <YAxis domain={[0, 800]} allowDataOverflow={true} label={{
                                    value: "Напор, Па",
                                    position: "left",
                                    angle: -90,
                                    dy: -47,
                                }} />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="node5_125" stroke="#8d92a6" />
                                <Line type="monotone" dataKey="node5_160" stroke="#324879" />
                                <Line type="monotone" dataKey="node5_200" stroke="#dbb31d" />
                                <Line type="monotone" dataKey="node5_250" stroke="#8b98b8" />
                                <Line type="monotone" dataKey="node5_315" stroke="#6b964f" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <FindDealers />
            </div>
        </div>
    )
}