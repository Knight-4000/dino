import * as React from "react";
import { motion } from "framer-motion";
import { AiOutlineHome } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const links = ["Home", "About", "Projects", "Contact"];
export const MenuItem = ({ i }) => {

  return (
    <motion.li
      variants={variants}
      className="menu-link"
    >
      <AiOutlineHome className='icon-placeholder' />
      <div>Home</div>
    </motion.li>
  );
};
