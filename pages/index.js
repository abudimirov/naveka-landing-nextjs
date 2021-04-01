import Head from 'next/head'
import Link from "next/link";
import Nav from "./Components/nav";


export default function Home() {
  return (
    <div className="min-w-full">
      <Head>
        <title>Naveka - вентиляционное оборудование</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="h-screen">
          <Nav />
          <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
              <div className="flex items-center px-4 bg-gradient-to-br from-blue-400 to-blue-900 text-white">
                  <div>
                      <h1 className="py-6 text-4xl uppercase"><span className="font-semibold">Российское</span> вентиляционное оборудование</h1>
                      <p className="py-2 font-medium"><span className="font-bold">Вентиляция Naveka</span> производится на основе современных технологий, качественных материалов и богатого профессионального опыта коллектива единомышленников.</p>
                      <p className="py-2 font-medium">Возможность поставки вентиляционного оборудования в комплекте с системами автоматики и управления, как правило, даёт ещё и выгодное ценовое решение вентиляционных задач.</p>
                        <div className="flex flex-nowrap py-10">
                            <a href="https://www.youtube.com/watch?v=XTjv4p-aXuw" target="_blank">
                                <img className="transform hover:scale-105 duration-700 ease-in-out" src="/video-1.png" alt="" />
                            </a>
                            <a href="https://www.youtube.com/watch?v=TB7t3obDPng" target="_blank">
                                <img className="transform hover:scale-105 duration-700 ease-in-out" src="/video-2.png" alt="" />
                            </a>
                        </div>

                  </div>
                  </div>
              <div className="col-span-2 grid grid-cols-2">
                  <div className="col-span-2 overflow-hidden">
                      <Link href="/for-business">
                          <a>
                              <div className="h-full flex items-center transform hover:scale-105 duration-700 ease-in-out" style={{ backgroundImage: 'url("/VAST22.jpg")', backgroundSize: 'cover' }}>
                                  <div className="text-white px-4 py-10 lg:py-0 lg:px-20 w-2/4">
                                      <p className="text-2xl uppercase">Промышленные решения</p>
                                      <h2 className="text-2xl font-semibold">Naveka Vast1</h2>
                                  </div>
                              </div>
                          </a>
                      </Link>
                  </div>
                  <div className="overflow-hidden">
                      <Link href="/for-home">
                          <a>
                              <div className="h-full flex items-center transform hover:scale-105 duration-700 ease-in-out" style={{ backgroundImage: 'url("/for-home.png")', backgroundSize: 'cover' }}>
                                  <div className="text-white py-10 lg:py-0 px-4 lg:px-20">
                                      <p className="text-2xl uppercase">Для дома и офиса</p>
                                      <h2 className="text-2xl font-semibold">Naveka Node</h2>
                                  </div>
                              </div>
                          </a>
                      </Link>
                  </div>
                  <div className="overflow-hidden">
                      <Link href="/kanal">
                          <a>
                              <div className="h-full flex items-center transform hover:scale-105 duration-700 ease-in-out" style={{ backgroundImage: 'url("/kanalnaja-ventilacija-naveka.png")', backgroundSize: 'cover' }}>
                                  <div className="text-white py-10 lg:py-0 px-4 lg:px-20">
                                      <p className="text-2xl uppercase">Канальная вентиляция</p>
                                      <h2 className="text-2xl font-semibold">Naveka V</h2>
                                  </div>
                              </div>
                          </a>
                      </Link>
                  </div>
              </div>
          </div>
      </main>
    </div>
  )
}