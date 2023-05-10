import { SiRubyonrails } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { AiTwotoneLock } from "react-icons/ai";
import './card.css';

export default function AmberCard() {
  return (
    <>
    <div className="flex justify-center">
        <div className="block max-w-sm rounded-lg bg-white">
            <a href="#">
                <img className="rounded-t-lg"
                    src="https://firebasestorage.googleapis.com/v0/b/turbocity-43ae6.appspot.com/o/Green-Amber.png?alt=media&token=dec4617f-34eb-44a6-89a4-406e09a60112"
                    alt="" />
            </a>
            <div className="p-6">
                <h5 className="mb-2 text-xl text-center">Green Amber</h5>
                <p className="mb-4 text-center">Ecommerce / Vegan Takeout</p>
                    <div className='row outer'>
                        <div class="container m-auto grid grid-cols-2 inner">
                            <SiRubyonrails className='mx-auto card-icons rails-icon'/>
                            <BsFillBootstrapFill className='mx-auto card-icons bootstrap-icon' />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <AiTwotoneLock className='card-icons'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}