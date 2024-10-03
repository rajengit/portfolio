
import * as motion from "framer-motion/client"
export default function Form(){
 const headingFromLeft = {
        hidden: { x: -200, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 70,
          },
        },
      };
    return(
        <motion.h1 
         initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
                //  animate={{
                    
                   
                //     y: 0,
                //     scale: 1,
                //     rotate: 0,
                //     opacity:1
                // }} 
                // viewport={{ once: true }}
                variants={headingFromLeft}
              
                 >
                  this is the form section
                 </motion.h1>
    )
}