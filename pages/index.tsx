import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '../layout/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Secret Code App</h1>
        <Link href="codes">
          <a >Codes Pages</a>
        </Link>
      </div>
    </Layout>
  )
}

export default Home
