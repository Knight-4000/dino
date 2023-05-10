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
                    src="https://firebasestorage.googleapis.com/v0/b/rescue-a2794.appspot.com/o/jwI3HD74OzYPqgxsXI3Q3tY9xhA2-kitty-2.jpg-d05aa6a5-d970-4a53-819a-2ebd395cd2bf?alt=media&token=5f0a4710-1820-4532-889c-3c401b680fbf"
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