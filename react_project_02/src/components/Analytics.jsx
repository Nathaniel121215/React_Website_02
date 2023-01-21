import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='bg-white py-[5rem] px-4'>
        <div className='grid md:grid-cols-2 max-w-[1240px] mx-auto gap-5'>
            <div className='flex justify-center'>
                <img src={Laptop} alt='' className='w-[30rem]'></img>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='text-[#00DF9A] font-bold'>DATA ANALYTICS DASHBOARD</div>
                <div className='text-2xl sm:text-3xl md:text-4xl font-bold py-1'>Manage Data Analytics Centrally</div>
                <div className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    molestiae delectus culpa hic assumenda, voluptate reprehenderit
                    dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                    eveniet ex deserunt fuga?
                </div>

                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>

        </div>



    </div>
  )
}

export default Analytics