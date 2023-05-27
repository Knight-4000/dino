import './App.css';
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Nav from "./components/Nav";
import AmberCard from './components/AmberCard';
import PortfolioCard from './components/PortfolioCard';
import About from './components/About';
import RescueCard from './components/RescueCard';
import TurboCityCard from './components/TurboCityCard';
import CarMarketCard from './components/CarMarketCard';

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
      <Nav />
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
            <div className="home-card mx-auto ">
              <div id="section2">
                <Fade duration={3000}>
                  <About />
                </Fade>
              </div>
            </div>
            <div className="home-card mx-auto ">
              <div id="section3" className="flex justify-center">
                <Fade duration={3000}>
                  <PortfolioCard />
                </Fade>
                </div>
              </div>
              <div className="home-card container mx-auto ">
                <div className="flex justify-center">
                <Fade duration={3000}>
                  <CarMarketCard />
                </Fade>
              </div>
            </div>
            <div className="home-card mx-auto ">
              <div className="flex justify-center">
                <Fade duration={3000}>
                  <RescueCard />
                </Fade>
              </div>
            </div>
              <div className="home-card mx-auto ">
                <div className="flex justify-center">
                <Fade duration={3000}>
                  <AmberCard />
                </Fade>
              </div>
            </div>
            <div className="home-card container mx-auto ">
                <div className="flex justify-center">
                <Fade duration={3000}>
                  <TurboCityCard />
                </Fade>
              </div>
            </div>
            <div className="home-card container mx-auto ">
                <div className="flex justify-center">
                <a href="https://www.caranddriver.com/reviews/a15106129/2016-chevrolet-camaro-ss-automatic-test-review/">Link</a>
              </div>
            </div>
           </div>
  );
}

export default App;
