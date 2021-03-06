import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Navbar from '../components/navbar'
import Header from '../components/header'
import Intro from '../components/intro'
import Featured from '../components/featured'
import CoInvention from '../components/coinvention'
import Updates from '../components/updates'

export default function Home() {
  return (
    <>
      <Head>
        <title>Railway_</title>
        <meta name="description" content="Railway.no copy" />
        <link rel="icon" href="/railway.ico" />
      </Head>

      
      <div className="bg-gradient-to-b from-white to-slate-100 dark:bg-gradient-to-b dark:from-black dark:to-slate-600 dark:text-gray-100">
        <div className="mx-2 md:mx-6 ">
        <Navbar/>
        <Header/>
        <main className="lg:ml-[25vw]">
          <Intro/>
          <Featured />
          <CoInvention />
          <Updates />
        </main>
        </div>
        <footer className="flex flex-col justify-center items-center w-full pt-24 pb-12">
          <h2 className="text-2xl font-bold py-4">Kevin Tivert 
            {' '}<a className="text-xl font-normal hover:text-[#0029fe] hover:dark:text-orange-600 cursor-pointer">Github</a> 
            {' '}<a className="text-xl font-normal hover:text-[#0029fe] hover:dark:text-orange-600 cursor-pointer">Portfolio</a>
            </h2>
          <p className="text-lg">
            This website is a copy of <a className="font-bold hover:text-[#0029fe] hover:dark:text-orange-600 cursor-pointer" href="https://railway.no/" >railway</a>.<br/>
          </p>
          <p className="text-base">
            The copy is done for practice purpose.
          </p>
        </footer>
      </div>
    </>
  )
}
