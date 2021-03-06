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
                <title>Naveka Node5 - ????????????????-???????????????? ???????????????????????????? ?????????????????? ?????? ????????, ???????????????? ?? ??????????</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="?????????????????? ?????????????????? Naveka Node5 ?????? ????????????????-???????????????? ???????????????????? ?????????? ??????????????????. " />
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
                            <p className="mb-5 text-xl px-5 lg:px-0 max-w-prose">????????????????-???????????????? ?????????????????? Node5 ?????????????????????????? ?????? ?????? ???????????????????????? ??????????????????????, ??????????, ?????????????????????????????????? ????????????, ?????? ?? ?????? ???????????????? ???????? ?????? ????????????????. ?????????????????????? ?? ??????????????, ?????? ?????????????????? ???????????????????? ???? ???????????????? ???????????? ????????.</p>
                            <div className="my-5 text-xl flex flex-nowrap items-center justify-between bg-indigo-50 py-10 px-5 rounded-md max-w-prose">
                                <img src="/idea.svg" alt="????????????????????????" className="h-20 inline mr-3"/>
                                <p>?????????????????????????? ?? ???????????? ?????? ?????????????????? ?? ?????????? ????????????????. ????-???? ???????????????????????? ???????????????????????? ???????????????? ???????????????????? ?????????? ???? ?????????????????? ?????????????? ????????????????????, ?????? ?????????????????? ???????????????????????? ???????????????????? ????????????. ???????????????????? ???????????????????? Node5 ?????? ?????????????????? ???? ?????????????????? ??????????????????.</p>
                            </div>
                            <a href="https://progress-nw.ru/download/docs/2020/ustanovki/Node5.pdf" rel="nofollow" className="text-xl px-10 lg:px-0 hover:text-indigo-900"><img src="/download.svg" alt="?????????????? ?????????????? Node5" className="h-8 mr-4 inline align-text-bottom" /> ?????????????? Node5</a>
                        </div>
                    </div>
                    <div className="flex flex-wrap px-5 lg:px-0">
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/motor-koleso-ebmpapst.png" alt="???????????????????? ebmpapst" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">???????????????? ???????????????????? ebmpapst</h3>
                                <p className="text-xl">???????????????????????????????????????????? ??????????-????????????</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/recuperator-membranniy.jpg" alt="?????????????????????? ????????????????????" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">???????????????????? ??????????????????????</h3>
                                <p className="text-xl">?????? ???????????????????????? ???? 65%</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/ptc-nagrevatel.png" alt="ptc" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">???????????????????? ?????? ??????????????????????</h3>
                                <p className="text-xl">?????????????????????????? ????????????????????????</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/pult.png" alt="???????????????????? ebmpapst" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">????????????????????</h3>
                                <p className="text-xl">???????????????????? ???????????????????? ?? ???????????????? ?????????? ????</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/filtr.png" alt="???????????????????? ebmpapst" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">???????????????????? ??????????????</h3>
                                <p className="text-xl">???????????????????? ?????????????????????????? ???????????????? ???????????? G4 ?? ?????????? ???????? ?????????????????????????? ???????????????? ?????????? ???????????? ??????????????</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start pb-5 lg:w-2/4">
                            <img className="p-5 lg:w-1/4" src="/pics/tolshina-25.jpg" alt="???????????????????????? 25 ????" />
                            <div className="lg:w-3/4">
                                <h3 className="text-2xl lg:text-3xl font-extrabold pb-2">??????????????????????????????????</h3>
                                <p className="text-xl">?????????????? ???????????????? 25 ????. ???????????? ???? ???????????????????????? ??????????</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 lg:px-0  w-full h-96">
                        <h3 className="text-2xl lg:text-3xl font-extrabold my-10">???????????????????????????????? ???????????????????????????? Node5</h3>
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
                                    value: "??????????, ????",
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