import { motion } from "framer-motion"

export default function About() {
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
    <>
      <motion.div variants={imageAnimate}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
      >
        <div className='about'>
            <h2 className='about-intro'>Welcome</h2>
            <p className='about-statement'> I am a <span>Ruby on Rails</span> and <span>React</span> developer proficient in the skills below</p>
            <ul className='py-4'>
                <li className='py-1 list-disc'>Ruby on Rails</li>
                <li className='py-1 list-disc'>React JS</li>
                <li className='py-1 list-disc'>Redux</li>
                <li className='py-1 list-disc'>Bootstrap </li>
                <li className='py-1 list-disc'>Tailwind </li>
                <li className='py-1 list-disc'>HTML </li>
                <li className='py-1 list-disc'>CSS </li>
                <li className='py-1 list-disc'>JavaScript </li>
            </ul>
        </div>
      </motion.div>
    </>
  )
}