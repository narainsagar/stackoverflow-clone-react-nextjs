import styles from '../styles/Main.module.css'
import type { NextPage } from 'next'
import Image from 'next/image'

const Footer: NextPage = () => {
    return (
        <footer className={styles.footer} style={{ height: 100}}>
            <a
                href="https://stackoverflow.com/jobs"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by {''}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    )
}

export default Footer;