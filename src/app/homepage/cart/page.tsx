import React from 'react'
import Image from 'next/image'

const Cart = () => {
  return (
    <div className='wrapper space-y-8'>

      <div>
        <p>Home / Cart</p>
        </div>
       
       <div className='mt-[64px]'>
          <h1 className='text-5xl font-bold'>YOUR CART</h1>
       </div>
       <div className='lg:flex space-y-4 lg:space-x-4'>
      <Image src={"/images/Frame 27 (1).svg"} alt="hero-image" width={715} height={508}/>
      <Image src={"/images/Frame 28.svg"} alt="hero-image" width={505} height={458} />
       </div>
    </div>
  )
}

export default Cart
