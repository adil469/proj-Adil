import React from 'react'

const Gearup = () => {
  return (
    <div className=''>
      <h2 className='ml-4 font-bold'>Gear Up</h2>
      <div className='grid grid-cols-2 shadow:md text-end pr-10'>

      <div className='text-lg'>Shop Men's</div>
      <div className='text-lg'>Shop Women's</div>
      </div>

      <div className='flex justify-around'>
          <div>
              <img src="/Image (10).png" alt="" className='bg-gray-300' />
              <div className='flex justify-between font-bold items-center '>
              <h3>Nike Dri-FIT ADV TechKnit Ultra</h3>
              <p>₹ 3 895</p>
              </div>
              <p>Men's Short-Sleeve <br /> Running Top</p>
          </div>
          <div>
            
              <img src="/Image (12).png" alt="" className='bg-gray-400'/>
              <div className='flex justify-between font-bold items-center '>
              <h3>Nike Dri-FIT Challenger</h3>
              <p>₹ 2 495</p>
              </div>
              <p>Men's 18cm (approx.) 2 <br />-in-1 Versatile Shorts</p>
          </div>
          <div>
              <img src="/Image (13).png" alt="" className='bg-gray-300' />
              <div className='flex justify-between font-bold items-center '>
              <h3>Nike Dri-FIT ADV Run Division</h3>
              <p>₹ 5 295</p>
              </div>
              <p>Women's Long-Sleeve <br /> Running Top</p>
          </div>
          <div>
              <img src="/Image (14).png" alt="" className='bg-gray-400'/>
              <div className='flex justify-between font-bold items-center '>
              <h3>Nike Fast</h3>
              <p>₹ 3 795</p>
              </div>
              <p >Women's Mid-Rise 7/8 Running <br />Leggings with Pockets</p>
          </div>
      </div>
    </div>
  )
}

export default Gearup
