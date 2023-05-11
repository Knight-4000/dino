import React from 'react'
import emailjs, { sendForm } from "emailjs-com";
import { Form } from "semantic-ui-react";
import Swal from "sweetalert2";
import './contact.css';

export default function Contact() {  

  const SERVICE_ID = "process.env.SERVICE_ID"
  const TEMPLATE_ID = "process.env.TEMPLATE_ID"
  const PUBLIC_KEY = "process.env.REACT_APP_PUBLIC_KEY"
  const PRIVATE_KEY = "process.env.PRIVATE_ID"
  
    const handleOnSubmit = async (e) => {
      e.preventDefault()
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY, PRIVATE_KEY)
      .then((result) => 
      {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
          showConfirmButton: true
        }).then(function(){
            window.location.reload();
        })
      }, (error) => { 
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    }
  return (
    <>
    <Form onSubmit={handleOnSubmit}>
      <div className="flex items-center min-h-screen">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
            <div className="text-center">
              <h1 className="my-3 contact-header">Contact Me</h1>
            </div>
            <div className="m-7">
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
                    Full Name
                  </label>
                  <input
                   type="text"
                   name="user_name"
                   placeholder="John Doe"
                   className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                </div>
                <div className="mb-6">
                 <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                    Email Address
                 </label>
                  <input
                    type="email"
                    name='user_email'
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-600"
                    >
                      Your Message
                    </label>
                    <textarea
                     type="text"
                     rows={5}
                     name='user_message'
                     placeholder="Your Message"
                     className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring"
                    />
                </div>
                <div className="mb-6">
                    <button type="submit" className="w-full px-3 py-4 text-white rounded-md focus:outline-none contact-button">
                      Send Message
                    </button>
                </div>
              </div>
            </div>
          </div>
       </div>
     </Form>
   </>
  )
}
