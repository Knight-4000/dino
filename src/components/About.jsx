import React from 'react'

export default function About() {
  return (
    <>
        <div className='about'>
            <h2 className='about-intro'>Welcome</h2>
            <p className='about-statement'> I am a <span>Ruby on Rails</span> and <span>React</span> developer proficient in the skills below</p>
            <ul className='py-4'>
                <li className='py-1 list-disc'>Ruby on Rails</li>
                <li className='py-1 list-disc'>React JS</li>
                <li className='py-1 list-disc'>Redux</li>
                <li className='py-1 list-disc'>Bootstrap </li>
                <li className='py-1 list-disc'>Tailwind </li>
                <li className='py-1 list-disc'>HTML </li>
                <li className='py-1 list-disc'>CSS </li>
                <li className='py-1 list-disc'>JavaScript </li>
            </ul>
        </div>
    </>
  )
}