import { Link } from 'react-scroll'
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';

export default function Nav() {
  return (
    <>
      <nav className="h-16 fixed top-0 inset-x-0">
        <div className='row outer'>
          <div class="container m-auto grid grid-cols-4 inner">
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
           <AiOutlineHome className='mx-auto icon' />
          </Link>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
           <HiOutlineInformationCircle className='mx-auto icon' />
          </Link>
            <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
           <BsGear className='mx-auto icon' />
          </Link>
          <Link
            activeClass="active"
            to="section4"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
           <BiEnvelope className='mx-auto icon' />
          </Link> 
          </div>
        </div>
      </nav>
    </>
  )
}