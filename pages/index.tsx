import type { NextPage } from 'next'
import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

const Home = ({ exploreData, cardsData }) => {


  
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* Header */}
      <Header />
    {/* Banner */}
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
             {exploreData?.map((item:any) => (
              <SmallCard
                  key={item.img}
                  img={item.img}
                  distance={item.distance}
                  location={item.location}
                />
               ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
              {cardsData?.map(item => (
                <MediumCard 
                    key={item.img}
                    img={item.img}
                    title={item.title}
                  />
              ))}
          </div>
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb'
          buttonText='Get Inspired'
        />
      </main>
      <Footer

      
      />
    </div> 
  )
}

export async function getStaticProps() {
    const res = await fetch('https://links.papareact.com/pyp')
    const exploreData = await res.json()

    const data = await fetch('https://links.papareact.com/zp1')
    const cardsData = await data.json()
    
    return {
      props: {
        exploreData,
        cardsData,
      }
    }
}


export default Home
