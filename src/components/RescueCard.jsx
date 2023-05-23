import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import './card.css';
import video from "./Rescue.mov"

export default function RescueCard() {
  return (
    <>
     <div className="flex justify-center">
        <div className="block max-w-sm rounded-lg bg-white">
          <video width="750" height="500" controls >
              <source src={video} type="video/mp4"/>
            </video>
            <div className="p-6">
                <h5 className="mb-2 text-xl text-center">Coldwater Rescue</h5>
                <p className="mb-4 text-center">Animal Shelter</p>
                  <div className='row outer'>
                    <div class="container m-auto grid grid-cols-2 inner">
                        <SiReact className='mx-auto card-icons react-icon'/>
                        <SiTailwindcss className='mx-auto card-icons tailwind-icon' />
                    </div>
                  </div>
                 <h5 className='text-center'><a href="https://github.com/Knight-4000/cw-rescue">Github</a></h5>
              </div>
          </div>
      </div>
    </>
  )
}