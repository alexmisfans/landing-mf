import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import FeaturesTable from '../components/features'
import HeroSection from '../components/heroSection'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturesTable/>
    </div>
  )
}

export default Home
