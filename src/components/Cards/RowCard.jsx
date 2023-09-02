import './card.css';  
import { motion } from "framer-motion";

export default function RowCard({children}) {

  return (
    <motion.div whileHover={{
      scale: 1.2, transition: { duration: 1 }, }}>
      <div className='row outer'>
        <div className="container m-auto grid grid-cols-2 inner">
          {children}
        </div>
      </div>
    </motion.div>
    
  )
}
