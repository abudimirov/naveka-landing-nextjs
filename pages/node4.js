import Head from 'next/head'
import Link from "next/link";
import Nav from "./Components/nav";
import Breadcrumbs from "./Components/breadcrumbs";
import FindDealers from "./Components/findDealers";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '0',
        node4_100: 350,
        node4_125: 350,
        node4_160: 410,
        node4_200: 550,
        node4_250: 680,
        node4_315: 760,
    },
    {
        name: '100',
        node4_100: 260,
        node4_125: 280,
        node4_160: 375,
        node4_200: 495,
        node4_250: 640,
        node4_315: 720,
    },
    {
        name: '200',
        node4_100: 140,
        node4_125: 225,
        node4_160: 325,
        node4_200: 445,
        node4_250: 590,
        node4_315: 675,
    },
    {
        name: '300',
        node4_100: -10,
        node4_125: 145,
        node4_160: 260,
        node4_200: 415,
        node4_250: 540,
        node4_315: 640,
    },
    {
        name: '400',
        node4_125: 50,
        node4_160: 195,
        node4_200: 375,
        node4_250: 500,
        node4_315: 600,
    },
    {
        name: '500',
        node4_125: -50,
        node4_160: 115,
        node4_200: 330,
        node4_250: 460,
        node4_315: 570,
    },
    {
        name: '600',
        node4_160: 10,
        node4_200: 280,
        node4_250: 415,
        node4_315: 540,
    },
    {
        name: '700',
        node4_160: -50,
        node4_200: 225,
        node4_250: 370,
        node4_315: 495,
    },
    {
        name: '800',
        node4_200: 160,
        node4_250: 315,
        node4_315: 450,
    },
    {
        name: '900',
        node4_200: 95,
        node4_250: 250,
        node4_315: 410,
    },
    {
        name: '1000',
        node4_200: 15,
        node4_250: 185,
        node4_315: 370,
    },
    {
        name: '1100',
        node4_200: -50,
        node4_250: 77,
        node4_315: 325,
    },
    {
        name: '1200',
        node4_250: -5,
        node4_315: 285,
    },
    {
        name: '1300',
        node4_315: 235,
    },
    {
        name: '1400',
        node4_315: 180,
    },
    {
        name: '1500',
        node4_315: 137,
    },
    {
        name: '1600',
        node4_315: 85,
    },
    {
        name: '1700',
        node4_315: 25,
    },
    {
        name: '1800',
        node4_315: -50,
    },
];

export default function Node4() {
    return (
        <div className="">
            <Head>
                <title>Naveka Node4 - приточная вентиляционная установка для дома, квартиры и офиса</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="h-full">
                <Nav />
                <div className="px-4 pb-10">
                    <Breadcrumbs />
                    <h1 className="text-5xl font-semibold mb-10 lg:mb-20">Naveka Node4</h1>
                    <div className="flex flex-wrap justify-between items-center mb-10 lg:mb-20">
                        <div className="lg:w-2/4 px-10 lg:px-0 mb-10 lg:mb-0 flex justify-center">
                            <img src="/ustanovki/node4.jpg" className="max-h-96" alt="Naveka Node4" />
                        </div>
                        <div className="lg:w-2/4 lg:pr-10">
                            <p className="mb-5 text-xl px-5 lg:px-0">Приточная вентиляционная установка серии Node4 предназначена для общеобменной вентиляции помещений. Для высокой результативности работы установки она оснащается безулиточным немецким вентилятором, благодаря которому производительность подобной серии моделей может достигать порядка 1000 м3/ч.</p>
                            <div className="my-5 text-xl flex flex-nowrap items-center justify-between bg-indigo-50 py-10 px-5 rounded-md">
                                <img src="/idea.svg" alt="Рекомендация" className="h-20 inline mr-3"/>
                                <p>Рекомендована к выбору для вентиляции помещений с большой и разветвленной сетью вентиляционных каналов. Node4 способна произвести существенное давление воздуха даже в общирной сети воздуховодов.</p>
                            </div>
                            <a href="https://progress-nw.ru/download/docs/2020/ustanovki/Node4.pdf" rel="nofollow" className="text-xl px-10 lg:px-0 hover:text-indigo-900"><img src="/download.svg" alt="Скачать паспорт Node4" className="h-8 mr-4 inline align-text-bottom" /> Паспорт Node4</a>
                        </div>
                    </div>
                    <div className="flex flex-wrap px-5 lg:px-0">
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/motor-koleso-ebmpapst.png" alt="вентилятор ebmpapst" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">Немецкий вентилятор ebmpapst</h3>
                                <p className="text-xl">Производительное мотор-колесо</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/ten-nagrevatel.png" alt="вентилятор ebmpapst" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">Нагреватель на выбор</h3>
                                <p className="text-xl">Электрический керамический или водяной</p>
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
                            <img className="p-5 lg:w-1/4" src="/pics/tolshina.jpg" alt="толщина изоляции 50 мм" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">Теплошумоизоляция</h3>
                                <p className="text-xl">Толщина изоляции 50 мм. Корпус из оцинкованной стали</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 lg:px-0  w-full h-96">
                        <h3 className="text-2xl lg:text-3xl font-extrabold my-10">Аэродинамические характеристики Node4</h3>
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
                                <Line type="monotone" dataKey="node4_100" stroke="#8d92a6" />
                                <Line type="monotone" dataKey="node4_125" stroke="#324879" />
                                <Line type="monotone" dataKey="node4_160" stroke="#dbb31d" />
                                <Line type="monotone" dataKey="node4_200" stroke="#8b98b8" />
                                <Line type="monotone" dataKey="node4_250" stroke="#6b964f" />
                                <Line type="monotone" dataKey="node4_315" stroke="#f0ab8c" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <FindDealers />
            </div>
        </div>
    )
}