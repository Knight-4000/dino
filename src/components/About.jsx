import { motion } from "framer-motion"
import { SiReact, SiRubyonrails, SiTailwindcss, SiRedux, SiJavascript, SiExpress } from 'react-icons/si';
import { BsBootstrapFill } from "react-icons/bs";
import { FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import IconCard from "../IconCard";
import '../components/Projects/projects.css';


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
            <div className="grid grid-cols-2 lg:grid-cols-3">
              <IconCard><SiReact className='react-icon icon-large'/><p className="text-black">React</p></IconCard>        
              <IconCard><SiRubyonrails className='rails-icon icon-large'/><p className="text-black">Rails</p></IconCard>        
              <IconCard><SiTailwindcss className='tailwind-icon icon-large'/><p className="text-black">Tailwind</p></IconCard>        
              <IconCard><SiRedux className='redux-icon icon-large'/><p className="text-black">Redux</p></IconCard>        
              <IconCard><BsBootstrapFill className='bootstrap-icon icon-large'/><p className="text-black">Bootstrap</p></IconCard>        
              <IconCard><FaNodeJs className='node-icon icon-large'/><p className="text-black">Node JS</p></IconCard>        
              <IconCard><FaHtml5 className='html-icon icon-large'/><p className="text-black">Html</p></IconCard>        
              <IconCard><FaCss3Alt className='css-icon icon-large'/><p className="text-black">CSS</p></IconCard>        
              <IconCard><SiJavascript className='javascript-icon icon-large'/><p className="text-black">Javascript</p></IconCard>        
              <IconCard><SiExpress className='icon-large'/><p className="text-black">Express</p></IconCard>        
            </div>
        </div>
      </motion.div>
    </>
  )
}