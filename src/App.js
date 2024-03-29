import './App.css';
import { motion} from "framer-motion";
import About from './components/About';
import OuterWrapper from './components/Projects/OuterWrapper';
import InnerWrapper from './components/Projects/InnerWrapper';
import video1 from "./videos/Car-Market.mov"
import video2 from "./videos/Rescue.mov"
import video3 from "./videos/Green-Amber.mov"
import video4 from "./videos/TurboCity.mov"
import { SiReact, SiRubyonrails, SiTailwindcss } from 'react-icons/si';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { AiTwotoneLock } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';

import Menu from './components/Navigation/Menu';

function App() {
  const intro1 = "Hello, I'm Bill G."
  const intro2 = "Ruby on Rails and React Developer"

  // Beginning of animating intro
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.06,
        // Affects speed more than delay
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  // Ending of animating intro

  return (
    <div className="App">
      <Menu/>
        <div id="section1" className='intro-container'>
          <motion.h3 className='text-center' variants={sentence} initial="hidden" animate="visible">
            {intro1.split("").map((char, index) => {
                return (
                  <motion.span className="intro-one" key={char + "-" + index} variants={letter}>
                  {char}
                  </motion.span>
                )
              })}
              <div className='barrier'></div>
                {intro2.split("").map((char, index) => {
                  return (
                    <motion.span className="text-center intro-two" key={char + "-" + index} variants={letter}>
                    {char}
                    </motion.span>
                  )
                })}
             </motion.h3>
            </div>
            <div className='container'>
              <div className="home-card mx-auto ">
                <div id="section2">
                  <About />
                </div>
              </div>
              <div id="section3">
                <h3 className='recent text-center'>Recent Projects</h3>
                <OuterWrapper >
                  <img className="rounded-t-xl"
                    src="https://firebasestorage.googleapis.com/v0/b/rescue-a2794.appspot.com/o/portfolio-pic.png?alt=media&token=2a21c519-1bc6-436e-a67e-5ba976baa693"
                    alt="" />
                  <div className='p-6'>
                    <h5 className="mb-2 text-xl text-center">Portfolio</h5>
                    <p className="mb-4 text-center">Single Page App</p>
                    <InnerWrapper>
                      <SiReact className='mx-auto card-icons react-icon'/>
                      <SiTailwindcss className='mx-auto card-icons tailwind-icon' />
                    </InnerWrapper>
                    <div className='flex justify-center'> 
                      <a href="https://github.com/Knight-4000/dino" style={{ color: 'black' }}>
                        <FaGithubSquare className='card-icons' />
                      </a>
                    </div>
                  </div>
                </OuterWrapper>    
                <OuterWrapper >
                  <img className="rounded-t-xl" 
                    src="https://firebasestorage.googleapis.com/v0/b/car-market-86f22.appspot.com/o/purr-therapy.png?alt=media&token=6d499b8d-86d4-4ef2-8cd7-cebedb5aa5a5" 
                    alt=""/>
                  <div className='p-6'>
                    <h5 className="mb-2 text-xl text-center">Purr Therapy</h5>
                    <p className="mb-4 text-center">Feline Therapists</p>
                    <InnerWrapper>
                      <SiReact className='mx-auto card-icons react-icon'/>
                      <SiTailwindcss className='mx-auto card-icons tailwind-icon' />
                      <a href="https://github.com/Knight-4000/purr">
                        <FaGithubSquare className='mx-auto card-icons' style={{ color: 'black' }}/>
                      </a>
                      <a href="http://purr-therapy-92f9ec2054c1.herokuapp.com">
                        <GiWorld className='mx-auto card-icons' style={{ color: 'black' }}/>
                      </a>
                    </InnerWrapper>
                   </div>
                </OuterWrapper>
                <OuterWrapper >
                  <video width="750" height="500" 
                  poster="https://firebasestorage.googleapis.com/v0/b/car-market-f4481.appspot.com/o/Car-Market-Screenshot.png?alt=media&token=7c5ac565-4be3-4a82-b5c4-c088b8a77904" controls className='rounded-t-xl'>
                    <source src={video1} type="video/mp4"/>
                  </video>
                  <div className='p-6'>
                    <h5 className="mb-2 text-xl text-center">Car-Market</h5>
                    <p className="mb-4 text-center">Online Car Shopping</p>
                      <InnerWrapper>
                        <SiReact className='mx-auto card-icons react-icon'/>
                        <SiTailwindcss className='mx-auto card-icons tailwind-icon' />
                      </InnerWrapper>
                      <div className='flex justify-center'> 
                        <a href="https://github.com/Knight-4000/car-market" style={{ color: 'black' }}>
                          <FaGithubSquare className='card-icons' />
                        </a>
                      </div>
                   </div>
                </OuterWrapper>
                <OuterWrapper >
                  <video width="750" height="500" poster="https://firebasestorage.googleapis.com/v0/b/turbocity-43ae6.appspot.com/o/rescue.png?alt=media&token=71be7c08-8748-4b52-a6b1-2d59fd899b9b" controls className='rounded-t-xl'>
                    <source src={video2} type="video/mp4"/>
                  </video>
                  <div className='p-6'>
                    <h5 className="mb-2 text-xl text-center">Coldwater Rescue</h5>
                    <p className="mb-4 text-center">Animal Shelter</p>
                    <InnerWrapper>
                      <SiReact className='mx-auto card-icons react-icon'/>
                      <SiTailwindcss className='mx-auto card-icons tailwind-icon' />
                    </InnerWrapper>
                      <div className='flex justify-center'> 
                        <a href="https://github.com/Knight-4000/cw-rescue" style={{ color: 'black' }}>
                          <FaGithubSquare className='card-icons' />
                        </a>
                      </div>
                   </div>
                </OuterWrapper>
                <OuterWrapper >
                  <video width="750" height="500" poster="https://firebasestorage.googleapis.com/v0/b/turbocity-43ae6.appspot.com/o/Green-Amber.png?alt=media&token=dec4617f-34eb-44a6-89a4-406e09a60112" controls className='rounded-t-xl'>
                    <source src={video3} type="video/mp4"/>
                  </video>
                  <div className='p-6'>
                    <h5 className="mb-2 text-xl text-center">Green Amber</h5>
                    <p className="mb-4 text-center">E-commerce/Vegan Takeout </p>
                    <InnerWrapper>
                      <SiRubyonrails className='mx-auto card-icons rails-icon'/>
                      <BsFillBootstrapFill className='mx-auto card-icons bootstrap-icon' />
                    </InnerWrapper>
                    <div className='flex justify-center'>
                      <AiTwotoneLock className='card-icons'/>
                    </div>
                  </div>
                </OuterWrapper>
                <OuterWrapper>
                  <video width="750" height="500" poster="https://firebasestorage.googleapis.com/v0/b/turbocity-43ae6.appspot.com/o/TurboCity.png?alt=media&token=141625a0-8927-4437-91d1-02993759d34d" controls className='rounded-t-xl'>
                    <source src={video4} type="video/mp4"/>
                  </video>
                  <div className='p-6'>
                    <h5 className="mb-2 text-xl text-center">Turbo City</h5>
                    <p className="mb-4 text-center">Retro 80s Mall</p>
                    <InnerWrapper>
                      <SiReact className='mx-auto card-icons react-icon'/>
                      <BsFillBootstrapFill className='mx-auto card-icons bootstrap-icon' />
                    </InnerWrapper>
                    <div className='flex justify-center'> 
                      <a href="https://github.com/Knight-4000/turbo-city" style={{ color: 'black' }}>
                        <FaGithubSquare className='card-icons' />
                      </a>
                    </div>
                  </div>
                </OuterWrapper>
                </div>
              </div>
            </div>
          );  
        }

export default App;