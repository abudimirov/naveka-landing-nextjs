import Head from 'next/head'
import Link from "next/link";
import Nav from "./Components/nav";
import Breadcrumbs from "./Components/breadcrumbs";
import FindDealers from "./Components/findDealers";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '0',
        node2_100: 110,
        node2_200: 118,
        node2_300: 125,
        node2_400: 405,
        node2_500: 453,
        node2_700: 470,
        node2_800: 485,
    },
    {
        name: '100',
        node2_100: 93,
        node2_200: 100,
        node2_300: 110,
        node2_400: 377,
        node2_500: 430,
        node2_700: 468,
        node2_800: 490,
    },
    {
        name: '200',
        node2_100: 70,
        node2_200: 83,
        node2_300: 102,
        node2_400: 347,
        node2_500: 407,
        node2_700: 456,
        node2_800: 480,
    },
    {
        name: '300',
        node2_100: -10,
        node2_200: 40,
        node2_300: 83,
        node2_400: 290,
        node2_500: 377,
        node2_700: 435,
        node2_800: 467,
    },
    {
        name: '400',
        node2_100: -110,
        node2_200: -50,
        node2_300: 60,
        node2_400: 218,
        node2_500: 330,
        node2_700: 412,
        node2_800: 450,
    },
    {
        name: '500',
        node2_200: -110,
        node2_300: 20,
        node2_400: 113,
        node2_500: 262,
        node2_700: 385,
        node2_800: 430,
    },
    {
        name: '600',
        node2_300: -100,
        node2_400: -10,
        node2_500: 160,
        node2_700: 330,
        node2_800: 405,
    },
    {
        name: '700',
        node2_500: 30,
        node2_700: 230,
        node2_800: 350,
    },
    {
        name: '800',
        node2_500: -150,
        node2_700: 60,
        node2_800: 270,
    },
    {
        name: '900',
        node2_700: -50,
        node2_800: 155,
    },
    {
        name: '1000',
        node2_800: 0,
    },
];

export default function Node2() {
    return (
        <div className="">
            <Head>
                <title>Naveka Node2 - приточная вентиляционная установка для дома, квартиры и офиса</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="h-full">
                <Nav />
                <div className="px-4 pb-10">
                    <Breadcrumbs />
                    <h1 className="text-5xl font-semibold mb-10 lg:mb-20">Naveka Node2</h1>
                    <div className="flex flex-wrap justify-between items-center mb-10 lg:mb-20">
                        <div className="lg:w-2/4 px-10 lg:px-0 mb-10 lg:mb-0 flex justify-center">
                            <img src="/ustanovki/node2.png" className="max-h-96" alt="Naveka Node2" />
                        </div>
                        <div className="lg:w-2/4 lg:pr-10">
                            <p className="mb-5 text-xl px-5 lg:px-0">Приточная вентиляционная установка серии Node2 предназначена для вентиляции небольших помещений с повышенными требованиями к шумовым характеристикам вентиляции.</p>
                            <div className="my-5 text-xl flex flex-nowrap items-center justify-between bg-indigo-50 py-10 px-5 rounded-md">
                                <img src="/idea.svg" alt="Рекомендация" className="h-20 inline mr-3"/>
                                <p>Рекомендована для подачи приточного воздуха в помещения, в которых предъявляются особые требования по шуму и пожаробезопасности. В установке используется негорюючая минеральная вата и нагреватель имеет более низкую рабочую температуру по сравнению со спиральным.</p>
                            </div>
                            <a href="https://progress-nw.ru/download/docs/2020/ustanovki/Node2_%20VEC_(AC)_E.pdf" rel="nofollow" className="text-xl px-10 lg:px-0 hover:text-indigo-900"><img src="/download.svg" alt="Скачать паспорт Node2" className="h-8 mr-4 inline align-text-bottom" /> Паспорт Node2</a>
                        </div>
                    </div>
                    <div className="flex flex-wrap px-5 lg:px-0">
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/ebmpapst-ventilator.png" alt="вентилятор ebmpapst" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">Немецкий вентилятор ebmpapst</h3>
                                <p className="text-xl">Самый тихий в своем классе</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/ptc-nagrevatel.png" alt="вентилятор ebmpapst" />
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
                    </div>
                    <div className="px-5 lg:px-0  w-full h-96">
                        <h3 className="text-2xl lg:text-3xl font-extrabold my-10">Аэродинамические характеристики Node2</h3>
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
                                <YAxis domain={[0, 500]} allowDataOverflow={true} label={{
                                    value: "Напор, Па",
                                    position: "left",
                                    angle: -90,
                                    dy: -47,
                                }} />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="node2_100" stroke="#8d92a6" />
                                <Line type="monotone" dataKey="node2_200" stroke="#324879" />
                                <Line type="monotone" dataKey="node2_300" stroke="#dbb31d" />
                                <Line type="monotone" dataKey="node2_400" stroke="#8b98b8" />
                                <Line type="monotone" dataKey="node2_500" stroke="#6b964f" />
                                <Line type="monotone" dataKey="node2_700" stroke="#f0ab8c" />
                                <Line type="monotone" dataKey="node2_800" stroke="#0369ce" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <FindDealers />
            </div>
        </div>
    )
}