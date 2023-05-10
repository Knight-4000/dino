import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import './card.css';

export default function RescueCard() {
  return (
    <>
     <div className="flex justify-center">
        <div className="block max-w-sm rounded-lg bg-white">
            <a href="#">
                <img className="rounded-t-lg"
                    src="https://firebasestorage.googleapis.com/v0/b/turbocity-43ae6.appspot.com/o/rescue.png?alt=media&token=71be7c08-8748-4b52-a6b1-2d59fd899b9b"
                    alt="" />
            </a>
            <div className="p-6">
                <h5 className="mb-2 text-xl text-center">Coldwater Rescue</h5>
                <p className="mb-4 text-center">Animal Shelter</p>
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