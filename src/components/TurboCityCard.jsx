import { SiReact } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import './card.css';
import video from "./TurboCity.mov"

export default function TurboCityCard() {
  return (
    <>
     <div className="flex justify-center">
        <div className="block max-w-sm rounded-lg bg-white">
          <video width="750" height="500" controls >
            <source src={video} type="video/mp4"/>
          </video>
            <div className="p-6">
                <h5 className="mb-2 text-xl text-center">Turbo City</h5>
                <p className="mb-4 text-center">Retro 80s Mall</p>
                  <div className='row outer'>
                    <div class="container m-auto grid grid-cols-2 inner">
                        <SiReact className='mx-auto card-icons react-icon'/>
                        <BsFillBootstrapFill className='mx-auto card-icons bootstrap-icon' />
                    </div>
                  </div>
                 <h5 className='text-center'><a href="https://github.com/Knight-4000/turbo-city">Github</a></h5>
              </div>
          </div>
      </div> 
    </>
  )
}