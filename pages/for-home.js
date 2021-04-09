import Head from 'next/head'
import Link from "next/link";
import Nav from "../Components/nav";
import FindDealers from "../Components/findDealers";



export default function Home() {
    return (
        <div className="">
            <Head>
                <title>Naveka Node - вентиляционная установка для дома, квартиры и офиса</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Naveka NODE - вентиляционные установки для дома и офиса. Готовые решения для приточной и приточно-вытяжной вентиляции" />
            </Head>
            <div className="h-full">
                <Nav />
                <main className="bg-gradient-to-br from-blue-400 to-blue-900 px-4 pb-10">
                    <div className="lg:w-2/3 mx-auto flex flex-wrap py-10 items-center">
                        <div className="w-full lg:w-2/4 text-white">
                            <h1 className="text-2xl lg:text-4xl font-bold py-10 text-white leading-10">
                                Для дома и офиса
                                <small className="text-5xl text-indigo-800 pt-3 uppercase block">Naveka Node</small>
                            </h1>
                            <p className="py-3 text-xl max-w-prose">Naveka Node создана для организации вентиляции в обычных помещениях и помещениях с повышенной влажностью. </p>
                            <p className="pb-10 text-xl max-w-prose">Naveka Node - готовы работать «из коробки». Достаточно смонтировать установку в помещении, подсоединить воздуховоды и датчик температуры для вентиляционного канала, подключить к электросети и включить. </p>
                            <div>
                                <Link href="dealers">
                                <a className="rounded-md py-2 shadow px-4 bg-lime text-white hover:bg-indigo-900 tracking-wide font-medium">
                                    Купить Naveka Node
                                </a>
                                </Link>
                            </div>

                        </div>
                        <div className="w-full lg:w-2/4 p-5 order-first lg:order-last">
                            <img src="/pics/naveka-node-ventilacija-v-dome.png" alt="" />
                        </div>
                    </div>
                </main>
                <div className="px-5 lg:px-0 lg:w-2/3 mx-auto pb-10">
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-extrabold py-10">Преимущества всех наших установок</h2>
                        <div className="flex flex-wrap text-xl">
                            <div className="pr-10 py-5"># 3 года гарантии</div>
                            <div className="pr-10 py-5"># Автоматика встроена</div>
                            <div className="pr-10 py-5"># Дистанционный пульт управления</div>
                            <div className="pr-10 py-5"># Безопасный нагрев воздуха</div>
                            <div className="pr-10 py-5"># Продуманы для монтажа в ограниченном пространстве</div>
                            <div className="pr-10 py-5"># Изоляция из негорючей минеральной ваты</div>
                        </div>
                    </div>
                    <h2 className="text-5xl text-center uppercase font-semibold py-20 ">Приточные установки</h2>
                    <div className="flex flex-wrap justify-between items-center mb-20">
                        <div className="lg:w-2/4 lg:pr-10">
                            <h3 className="text-2xl lg:text-3xl font-extrabold pb-10">Node2</h3>
                            <p className="mb-5 text-xl"><span className=""><img src="/check.svg" alt="установлен" class="h-6 inline mr-3" /></span>Установлен самый тихий в своем классе немецкий вентилятор типа — улитка</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен" className="h-6 inline mr-3"/>Максимально безопасный РТС нагреватель с защитным термостатом</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен" className="h-6 inline mr-3"/>Максимальный напор воздуха до 480 Па</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен" className="h-6 inline mr-3"/>Для установки внутри помещений от +5°C</p>
                            <p className="mb-10 text-xl max-w-prose">Рекомендована к выбору для помещений, в которые требуется только подача приточного воздуха и к работе вентиляционной установки предъявляются особые требования по издаваемому шуму.</p>
                            <div>
                                <Link href="/node2">
                                    <a className="rounded-md py-2 shadow px-4 ring ring-indigo-800 border-indigo-800 text-indigo-800 hover:bg-indigo-900 hover:text-white tracking-wide font-medium">
                                        Подробнее
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/4 lg:pl-10 order-first lg:order-last">
                            <img src="/ustanovki/node2.png" className="max-h-96" alt="Naveka Node2" />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="lg:w-2/4 lg:pl-10">
                            <img src="/ustanovki/node4.jpg" className="max-h-96" alt="Naveka Node4" />
                        </div>
                        <div className="lg:w-2/4 lg:pr-10">
                            <h3 className="text-2xl lg:text-3xl font-extrabold pb-10">Node4</h3>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Установлен напористый, немецкий вентилятор типа — мотор-колесо</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен" className="h-6 inline mr-3"/> ТЭНы из нержавеющей стали с защитными термостатами</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен" className="h-6 inline mr-3"/> Максимальный напор воздуха до 770 Па</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Можно установить как в помещении, так и на улице до -30°C</p>
                            <p className="mb-10 text-xl max-w-prose">Рекомендована к выбору для вентиляции помещений с большой и разветвленной сетью вентиляционных каналов. Node4 способна произвести существенное давление воздуха даже в общирной сети воздуховодов.</p>
                            <div>
                                <Link href="/node4">
                                    <a className="rounded-md py-2 shadow px-4 ring ring-indigo-800 border-indigo-800 text-indigo-800 hover:bg-indigo-900 hover:text-white tracking-wide font-medium">
                                        Подробнее
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-5 lg:px-0 lg:w-2/3 mx-auto pb-10">
                    <h2 className="text-5xl text-center uppercase font-semibold py-20">Приточно-вытяжные установки</h2>
                    <div className="flex flex-wrap text-xl">
                        <div className="pr-10 py-5"># Рекуператор позволяет сэкономить тепловую энергию (электричество или вода) по сравнению с приточной установкой без рекуператора</div>
                        <div className="pr-10 py-5"># Окупаемость стоимости рекуператора примерно 1 год</div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center my-20">
                        <div className="lg:w-2/4 lg:pr-10">
                            <h3 className="text-2xl lg:text-3xl font-extrabold pb-10">Node1</h3>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Пластинчатый рекуператор — алюминиевый. КПД* рекуператора до 60%</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Установлены самые тихие в своем классе немецкие вентиляторы типа — улитка</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Есть исполнение для влажных помещений — AQUA</p>
                            <p className="mb-5 text-xl max-w-prose">Рекомендована к выбору там, где требуется экономия энергии при нагреве приточного воздуха и предъявляются особые требования к шуму от вентиляции. Комплектуются водяными или безопасными РТС нагервателями.</p>
                        </div>
                        <div className="lg:w-2/4 lg:pl-10 order-first lg:order-last">
                            <img src="/ustanovki/naveka-node1.png" className="max-h-96" alt="Naveka Node1" />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center mb-20">
                        <div className="lg:w-2/4 lg:pl-10">
                            <img src="/ustanovki/node3.png" className="max-h-96" alt="Naveka Node3" />
                        </div>
                        <div className="lg:w-2/4 lg:pr-10">
                            <h3 className="text-2xl lg:text-3xl font-extrabold pb-10">Node3</h3>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Роторный рекуператор. КПД* рекуператора до 80%</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Установлены самые тихие в своем классе немецкие вентиляторы АС типа — улитка, или ЕС моторы</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Не требует дренажной системы для отвода конденсата</p>
                            <p className="mb-5 text-xl max-w-prose">Рекомендована к выбору в случае, если требуется максимальная энергоэффективность приточно-вытяжной вентиляции. Данная установка не имеет ограничений в применении.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center mb-20">
                        <div className="lg:w-2/4 lg:pr-10">
                            <h3 className="text-2xl lg:text-3xl font-extrabold pb-10">Node5</h3>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Пластинчатый рекуператор — мембранный. КПД* рекуператора до 65%</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Установлен напористый, немецкий вентилятор типа — мотор-колесо</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Есть уличное исполнение</p>
                            <p className="mb-5 text-xl"><img src="/check.svg" alt="установлен"
                                                             className="h-6 inline mr-3"/> Не требует дренажной системы для отвода конденсата</p>
                            <p className="mb-10 text-xl max-w-prose">Рекомендована к выбору для помещений с сухим воздухом. Из-за особенностей рекуператора способна передавать влагу от вытяжного воздуха приточному, что позволяет поддерживать комфортный климат. Существует исполнение Node5 для установки за пределами помещения.</p>
                            <div>
                                <Link href="/node5">
                                    <a className="rounded-md py-2 shadow px-4 ring ring-indigo-800 border-indigo-800 text-indigo-800 hover:bg-indigo-900 hover:text-white tracking-wide font-medium">
                                        Подробнее
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-2/4 lg:pl-10 order-first lg:order-last">
                            <img src="/ustanovki/naveka-node5.jpg" className="max-h-96" alt="Naveka Node5" />
                        </div>
                    </div>
                    <p className="text-sm">*КПД - коэффициент полезного действия.</p>
                </div>
            </div>
            <FindDealers />
        </div>
    )
}