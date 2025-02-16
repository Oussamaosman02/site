import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'
import { MdCode,MdDownload,MdPerson } from "react-icons/md";
const yash={
    position:"absolute",
    right: "0",
    marginTop: "100vh",
    left: "0",
    padding: "1rem",
    textAlign: "center",
}
export default function About() {
    return (
        <div className={'container'}>
            <Head>
                <title>About Shastra</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="keywords" content="Shastra, ShastraOS, Shastra linux, shastraos, Shastra OS, ShastraOS websites, Linux, Linux OS, OS, Gnome, Web3 OS, Web3 based OS, Web3 based Operating System, Vivek Pal, Arch Linux " />
                <meta name="theme-color" content="#317EFB"/>
                <link rel="icon" href="/favicon.ico" />
				<link rel='manifest' href='/manifest.json' />
                <link rel='apple-touch-icon' href='/icon-192x192.png' />
            </Head>
            <Header />
            <div className={styles.buttonGap}>
                
                    <button className={styles.blueBtn} onClick={() => { window.open('https://vivekpal.in') }}><MdPerson className={styles.icon}/>Vivek Pal</button>
            </div>
            <br/>
            <Footer />
        </div>
    )
}
