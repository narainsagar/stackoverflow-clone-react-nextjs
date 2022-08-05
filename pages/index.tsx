import type { NextPage } from 'next'
import Footer from '../components/_Footer'
import { ThemeProvider } from 'react-bootstrap'
import Home from '../components/Home'
import Header from '../components/_Header'
import Head from 'next/head'
import styles from '../styles/Main.module.css'

const HomePage: NextPage = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Head>
        <title>Stack Overflow - Where Developers Learn, Share, & Build Careers</title>
        <meta name="description" content="Clone Project for Stackoverflow Jobs" />
        <link rel="shortcut icon" href="https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196" />
      </Head>
      <Header />
      <Home />
      <div className={styles.container}>
        <Home />
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default HomePage
