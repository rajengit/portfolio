import Image from 'next/image'
import styles from './Profile.module.css'
import img from '../../data/profile.jpg'
import * as motion from "framer-motion/client"

import Link from 'next/link'


export default function ProfileCard() {
    return (
        <>
            <section className={styles.hero} >
                <div className={styles.hero_container}>
                    <div className={styles.intro_text}>
                        <h1 className={styles.heading_primary}>Hello i am <span className={styles.heading_span}>Rajendra</span></h1>
                        <p className={styles.hero_description}>Passionate front-end developer with a strong focus on creating intuitive, responsive, and visually compelling web applications. With expertise in HTML, CSS, JavaScript, and modern libraries like React.js</p>

                        <button>LinkedIn</button>
                        <button>Instagram</button>
                        <button>gitHub</button>
                        <button>Youtube</button>
                    </div>
                    <div className={styles.profile_pic_box}>
                        <Image
                            src={img}
                            width='300'
                            height='300'
                            
                            
                            alt="Picture of the author"
                            className={styles.profile_pic}

                        />
                    </div>

                </div>
            </section>



            {/* <motion.div className={styles.container}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: "spring",
                        damping: 8,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }} >
                <div className={styles.item}>
                    <h4>Hello ! I am Rajendra choudhary.finding role in front-end development. I have been practicing front-end development for the 2 years</h4>
                </div>
                <div>

                    <Image
                        src={img}
                        width={140}
                        height={140}
                        alt="Picture of the author"
                    />
                    <h1>Rajendra Choudhary</h1>
                    <h3>Software developer</h3>
                </div>

            </motion.div> */}

        </>
    )
}