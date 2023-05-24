import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import './card.css';
import video from "./Car-Market.mov"

export default function CarMarketCard() {
  return (
    <>
     <div className="flex justify-center">
        <div className="block max-w-sm rounded-lg bg-white">
        <video width="750" height="500" poster="https://firebasestorage.googleapis.com/v0/b/car-market-f4481.appspot.com/o/Car-Market-Screenshot.png?alt=media&token=7c5ac565-4be3-4a82-b5c4-c088b8a77904" controls >
            <source src={video} type="video/mp4"/>
          </video>
            <div className="p-6">
                <h5 className="mb-2 text-xl text-center">Car-Market</h5>
                <p className="mb-4 text-center">Online Car Shopping</p>
                  <div className='row outer'>
                    <div class="container m-auto grid grid-cols-2 inner">
                      <SiReact className='mx-auto card-icons react-icon'/>
                        <SiTailwindcss className='mx-auto card-icons tailwind-icon' />
                    </div>
                  </div>
                 <h5 className='text-center'><a href="https://github.com/Knight-4000/car-market">Github</a></h5>
              </div>
          </div>
      </div> 
    </>
  )
}