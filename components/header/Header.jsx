import Link from "next/link";
import styles from './Header.module.css'
import * as motion from "framer-motion/client"
import logo from '../../data/logo.png'
import Image from "next/image";
export const FadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0, staggerChildren: 0.1 },
  },
};

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Image src={logo}
          width='100'
          height='100'
          alt="logo"

        />

      </header>
    </>








    // <div className={styles.nav}>
    //     <ul>
    //        <motion.li 
    //        initial="hidden"
    //        animate="visible"
    //        variants={FadeContainer} 
    //        ><Link href={'/'}>Home</Link></motion.li> 
    //         <motion.li 
    //         whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><Link href={'about'}>About</Link></motion.li>
    //        <motion.li 
    //         whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><Link href={'contact'}>Contact</Link></motion.li> 
    //        <motion.li 
    //         whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><Link href={'blog'}>Blog</Link></motion.li>
    //         <motion.li 
    //         whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} ><Link href={'projects'}>Projects</Link></motion.li>
    //     </ul>
    // </div>
  )
}