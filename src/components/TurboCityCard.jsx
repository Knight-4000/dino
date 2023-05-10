import { SiReact } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import './card.css';

export default function TurboCityCard() {
  return (
    <>
     <div className="flex justify-center">
        <div className="block max-w-sm rounded-lg bg-white">
            <a href="#">
                <img className="rounded-t-lg"
                    src="https://firebasestorage.googleapis.com/v0/b/turbocity-43ae6.appspot.com/o/TurboCity.png?alt=media&token=141625a0-8927-4437-91d1-02993759d34d"
                    alt="" />
            </a>
            <div className="p-6">
                <h5 className="mb-2 text-xl text-center">Turbo City</h5>
                <p className="mb-4 text-center">Retro 80s Mall</p>
                  <div className='row outer'>
                    <div class="container m-auto grid grid-cols-2 inner">
                        <SiReact className='mx-auto card-icons react-icon'/>
                        <BsFillBootstrapFill className='mx-auto card-icons bootstrap-icon' />
                    </div>
                  </div>
                 <h5 className='text-center'><a href="#">Github</a></h5>
              </div>
          </div>
      </div> 
    </>
  )
}