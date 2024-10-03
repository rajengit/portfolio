import styles from './Skills.module.css'
import * as motion from "framer-motion/client"

export const FadeContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delayChildren: 0, staggerChildren: 0.1 },
    },
};
export default function Skills() {
    return (
        <>
            <div className={styles.container}>
                <motion.h1 initial ={{opacity:0}}
                 animate={{
                    
                    x: 100,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    opacity:1
                }} 
                viewport={{ once: true }}
              
                 >Top Skills</motion.h1>
                <motion.ul className={styles.list}
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
                    }}
                  
                >
                    <li >HTML</li>
                    <li >CSS</li>
                    <li >JavaScript</li>
                    <li >React.js</li>
                    <li >Next.js</li>
                    <li >Tailwind Css</li>
                    <li>C Programming</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Git</li>
                    <li>FireBase</li>
                    <li>Node.js</li>

                </motion.ul>
            </div>
        </>
    )
}

