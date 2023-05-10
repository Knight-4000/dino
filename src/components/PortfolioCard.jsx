import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import './card.css';

export default function PortfolioCard() {
  return (
    <>
     <div className="flex justify-center">
        <div className="block max-w-sm rounded-lg bg-white">
            <a href="#">
                <img className="rounded-t-lg"
                    src="https://firebasestorage.googleapis.com/v0/b/rescue-a2794.appspot.com/o/portfolio-pic.png?alt=media&token=2a21c519-1bc6-436e-a67e-5ba976baa693"
                    alt="" />
            </a>
            <div className="p-6">
                <h5 className="mb-2 text-xl text-center">Portfolio</h5>
                <p className="mb-4 text-center">Single Page App</p>
                  <div className='row outer'>
                    <div class="container m-auto grid grid-cols-2 inner">
                        <SiReact className='mx-auto card-icons react-icon'/>
                        <SiTailwindcss className='mx-auto card-icons tailwind-icon' />
                    </div>
                  </div>
                 <h5 className='text-center'><a href="#">Github</a></h5>
              </div>
          </div>
      </div>
    </>
  )
}