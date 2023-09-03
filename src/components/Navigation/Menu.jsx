import './menu.css';
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  };   
export default function MenuTwo() {
  const [open, cycleOpen] = useCycle(false, true);
   
  return (
      <header className='fixed h-16'>
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 300
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 }
              }}
            >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={cycleOpen}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={cycleOpen}
              
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={cycleOpen}
            >
              Projects
            </Link>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
    <div>
      <button onClick={cycleOpen}>{open ? <FaTimes /> : <GiHamburgerMenu />}</button>
    </div>
  </header>
  )
}
