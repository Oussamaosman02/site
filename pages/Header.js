import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { MdOutlineDownload, MdCode, MdOutlineOpenInBrowser } from "react-icons/md";



export default function Header() {
    return (
        <header>
            <Link href="/">
            <img src="shastralogo.png" />
           </Link>
            <div className="alignItems">
            <button className={styles.blueBtn} onClick={() => { window.open('https://github.com/shastra-os', "_blank") }}><MdCode className={styles.icon}/>GitHub</button>
                <button className={styles.blueBtn} onClick={() => { window.open('https://osdn.net/projects/shastraos/downloads/77132/ShastraDignity-Beta-2022.05.15-x86_64.iso/', "_blank") }}><MdOutlineDownload className={styles.icon}/>Install</button>
            </div>
        </header>
    )
}
