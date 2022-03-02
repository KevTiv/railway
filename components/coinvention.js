import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import img1 from '../public/img/hero_img_4.png'
import img2 from '../public/img/hero_img_5.png'
import img3 from '../public/img/hero_img_6.png'

import oi from '../public/svg/oi.svg'
import flyt from '../public/svg/flyt.svg'
import circle from '../public/svg/circle.svg'

const CoInvention = () => {
  return (
    <>
        <section id="co-invention">
            <div className="mt-8 border-t-2 border-gray-900 dark:border-gray-400 ">
                <h2 className="my-2 font-bold text-xs md:text-base">Earlier Co-Inventions</h2>

                <div className={`w-full z-10 ${styles.horinzontal_scroll}`}>
                    <div className="top-0 left-0 flex w-fit">
                        <div id="oi" className="mx-4 min-w-[15.5rem] h-fit py-6 whitespace-normal">
                            <Image src={img1} alt='breafast' layout='responsive'/>
                            <div className="flex flex-col justify-between min-h-[6rem] my-2 border-b-2 border-gray-200 md:h-32">
                                <Image src={oi} alt='Oi logo' layout='responsive'/>
                                <h2 className="mt-2 font-bold text-base leading-5 md:text-2xl md:leading-6 lg:text-3xl">Improving the everyday economy</h2>
                            </div>
                            <p className="mt-3 text-sm leading-4 md:text-lg lg:text-xl">
                                Together with Gjensidige Bank we built Oi, a new, proactive take on personal economy. Gjensidige Bank and Oi were acquired by Nordea in 2019.
                            </p>
                        </div>
                        <div id="flyt" className="mx-4 min-w-[15.5rem] h-fit py-6 whitespace-normal">
                            <Image src={img2} alt='electrical power line' layout='responsive'/>
                            <div className="flex flex-col justify-between min-h-[6rem] my-2 border-b-2 border-gray-200 md:h-32">
                                <Image src={flyt} alt='Flyt logo' layout='responsive'/>
                                <h2 className="mt-2 font-bold text-base leading-5 md:text-2xl md:leading-6 lg:text-3xl">Exposing the power utility industry</h2>
                            </div>
                            <p className="mt-3 text-sm leading-4 md:text-lg lg:text-xl">
                                Together with Agder Energi we built Flyt, a different power distribution company making money by helping people save energy. Flyt merged with Oss Norge in 2019.
                            </p>
                        </div>
                        <div id="circle" className="mx-4 min-w-[15.5rem] h-fit py-6 whitespace-normal">
                            <Image src={img3} alt='Truck driver seat view' layout='responsive'/>
                            <div className="flex flex-col justify-between min-h-[6rem] my-2 border-b-2 border-gray-200 md:h-32">
                                <Image src={circle} alt='Circle logo' layout='responsive'/>
                                <h2 className="mt-2 font-bold text-base leading-5 md:text-2xl md:leading-6 lg:text-3xl">Empowering professional drivers</h2>
                            </div>
                            <p className="mt-3 text-sm leading-4 md:text-lg lg:text-xl">
                                Together with Circle K Europe we built Circle K Pro, a virtual office for workers on the road. Circle K Pro was integrated as a new global initiative in 2020.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CoInvention