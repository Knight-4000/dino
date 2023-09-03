import './projects.css';
import { motion } from "framer-motion";

export default function RowWrapper({children}) {
  const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    rotate:[0,10,0],
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
  }

}
  return (
    <motion.div variants={imageAnimate}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:false, amount:0.5}}
      whileHover={{
        scale: 1.1, transition: { duration: 1 }, }} >
      <div className='flex justify-center'>
        <div className="home-card mx-auto ">
          <div className='flex justify-center shadow'>
              <div className='block max-w-sm first-line:rounded-lg bg-white rounded-xl'>{children}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
