import React from 'react'

const Updates = () => {
  return (
    <>
        <section id="updates">
            <div className="mt-8 border-t-2 border-gray-900 dark:border-gray-400 ">
                <h2 className="my-8 font-bold text-6xl leading-[3rem]">
                    Latest<br/>updates
                </h2>
                <ol className="mt-6">
                    <li className="flex flex-col justify-around min-h-[6rem] border-t-2 border-gray-200 md:grid md:grid-cols-3">
                        <span className="font-bold text-xs md:text-base lg:text-xl md:flex md:ml-6 md:items-center">January 2022</span>
                        <span className="font-bold text-sm md:text-xl lg:text-4xl md:col-span-2 md:flex md:items-center">NAF acquires 20% ownership in Share and NAF CEO joins the board</span>
                    </li>
                    <li className="flex flex-col justify-around min-h-[6rem] border-t-2 border-gray-200 md:grid md:grid-cols-3">
                        <span className="font-bold text-xs md:text-base lg:text-xl md:flex md:ml-6 md:items-center">November 2021</span>
                        <span className="font-bold text-sm md:text-xl lg:text-4xl md:col-span-2 md:flex md:items-center">Share signs partnership agreement with NAF and close to 500.000 members</span>
                    </li>
                    <li className="flex flex-col justify-around min-h-[6rem] border-t-2 border-gray-200 md:grid md:grid-cols-3">
                        <span className="font-bold text-xs md:text-base lg:text-xl md:flex md:ml-6 md:items-center">September 2021</span>
                        <span className="font-bold text-sm md:text-xl lg:text-4xl md:col-span-2 md:flex md:items-center">Orbit signs 9 new coworking partners to grow the network</span>
                    </li>
                    <li className="flex flex-col justify-around min-h-[6rem] border-t-2 border-gray-200 md:grid md:grid-cols-3">
                        <span className="font-bold text-xs md:text-base lg:text-xl md:flex md:ml-6 md:items-center">July 2021</span>
                        <span className="font-bold text-sm md:text-xl lg:text-4xl md:col-span-2 md:flex md:items-center">Share secures If Forsikring as a long term partner in the Nordics</span>
                    </li>
                    <li className="flex flex-col justify-around min-h-[6rem] border-t-2 border-gray-200 md:grid md:grid-cols-3">
                        <span className="font-bold text-xs md:text-base lg:text-xl md:flex md:ml-6 md:items-center">June 2021</span>
                        <span className="font-bold text-sm md:text-xl lg:text-4xl md:col-span-2 md:flex md:items-center">Spoton becomes available to 74% of all households in Norway</span>
                    </li>
                </ol>
            </div>
        </section>
    </>
  )
}

export default Updates