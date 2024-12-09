import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='wrapper'>
       <section className="text-gray-600 body-font lg:mt-[-82px]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-4xl lg:text-5xl lg:font-bold
       mb-4 font-bold text-black">
      FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p className="mb-8 leading-relaxed">
      Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Shop Now
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image src={"/images/Pic 1.svg"} alt="hero-image" width={1440} height={663}/>
    </div>
  </div>
</section>
       
      <div>
        <div className='bg-black flex space-x-20 justify-center h-[122px] lg:mt-[-96px]'>
        <Image src={"/images/Group.svg"} alt="hero-image" width={166.48} height={33.16}/>
        <Image src={"/images/zara-logo-1 1.svg"} alt="hero-image" width={166.48} height={33.16}/>
        <Image src={"/images/gucci-logo-1 1.svg"} alt="hero-image" width={166.48} height={33.16}/>
        <Image src={"/images/prada-logo-1 1.svg"} alt="hero-image" width={166.48} height={33.16}/>
        <Image src={"/images/Group (1).svg"} alt="hero-image" width={166.48} height={33.16}/>
        </div>
      </div>

      <div id='new arrival'>
      <section className="text-black body-font mt-[66px]">
        <div className='text-center font-bold text-5xl'>
      <h1>NEW ARRIVALS</h1>
      </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
  
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-298 rounded overflow-hidden">
        <Image src={"/images/Frame 32.svg"} alt="hero-image" width={295} height={298}/>
        </a>
        <div className="mt-4">
          <h3 className="text-black font-bold text-[20px] tracking-0 title-font mb-1">
          T-SHIRT WITH TAPE DETAILS
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex gap-4">
          <Image src={"/images/Frame 10.svg"} alt="hero-image" width={104} height={18.49}/>
            4.5/5
          </h2>
          <p className="mt-1 font-bold text-2xl">$120</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-298 rounded overflow-hidden">
        <Image src={"/images/Frame 33.svg"} alt="hero-image" width={295} height={298}/>
        </a>
        <div className="mt-4">
          <h3 className="text-black font-bold text-[20px] tracking-0 title-font mb-1">
          SKINNY FIT JEANS
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex gap-4">
          <Image src={"/images/Frame 10.svg"} alt="hero-image" width={104} height={18.49}/>
          3.5/5
          </h2>
          <p className="mt-1 font-bold">
          <Image src={"/images/Frame 59.svg"} alt="hero-image" width={189} height={32}/>
          </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-298 rounded overflow-hidden">
        <Image src={"/images/Frame 34.svg"} alt="hero-image" width={295} height={298}/>
        </a>
        <div className="mt-4">
          <h3 className="text-black font-bold text-[20px] tracking-0 title-font mb-1">
          CHECKERED SHIRT
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex gap-4">
          <Image src={"/images/Frame 10.svg"} alt="hero-image" width={104} height={18.49}/>
            4.5/5
          </h2>
          <p className="mt-1 font-bold text-2xl">$180</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-298 rounded overflow-hidden">
        <Image src={"/images/Frame 38.svg"} alt="hero-image" width={295} height={298}/>
        </a>
        <div className="mt-4">
          <h3 className="text-black font-bold text-[20px] tracking-0 title-font mb-1">
          SLEEVE STRIPED T-SHIRT
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex gap-4">
          <Image src={"/images/Frame 10.svg"} alt="hero-image" width={104} height={18.49}/>
            4.5/5
          </h2>
          <p className="mt-1 font-bold">
          <Image src={"/images/Frame 59.svg"} alt="hero-image" width={189} height={32}/>
          </p>
        </div>
      </div>
       <div>
      <button className='border-black border-2 rounded-lg lg:ml-[514px] h-[52px] w-[218px] justify-center mt-[28px]'>View All</button>
      </div>

    </div>
  </div>
</section>

      </div>

      <div id='On Sale'>
      <section className="text-black body-font mt-[66px]">
        <div className='text-center font-bold text-5xl'>
      <h1>TOP SELLING</h1>
      </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
  
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-298 rounded overflow-hidden">
        <Image src={"/images/Frame 32 (1).svg"} alt="hero-image" width={295} height={298}/>
        </a>
        <div className="mt-4">
          <h3 className="text-black font-bold text-[20px] tracking-0 title-font mb-1">
          VERTICAL STRIPED SHIRT
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex gap-4">
          <Image src={"/images/Frame 10.svg"} alt="hero-image" width={104} height={18.49}/>
          5.0/5
          </h2>
          <p className="mt-1 font-bold">
          <Image src={"/images/Frame 59.svg"} alt="hero-image" width={189} height={32}/>
          </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-298 rounded overflow-hidden">
        <Image src={"/images/Frame 33 (1).svg"} alt="hero-image" width={295} height={298}/>
        </a>
        <div className="mt-4">
          <h3 className="text-black font-bold text-[20px] tracking-0 title-font mb-1">
          COURAGE GRAPHIC T-SHIRT
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex gap-4">
          <Image src={"/images/Frame 10.svg"} alt="hero-image" width={104} height={18.49}/>
          4.0/5
          </h2>
          <p className="mt-1 font-bold text-2xl">$145</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-298 rounded overflow-hidden">
        <Image src={"/images/Frame 34 (1).svg"} alt="hero-image" width={295} height={298}/>
        </a>
        <div className="mt-4">
          <h3 className="text-black font-bold text-[20px] tracking-0 title-font mb-1">
          LOOSE FIT BERMUDA SHORTS
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex gap-4">
          <Image src={"/images/Frame 10.svg"} alt="hero-image" width={104} height={18.49}/>
          3.0/5
          </h2>
          <p className="mt-1 font-bold text-2xl">$80</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-298 rounded overflow-hidden">
        <Image src={"/images/Frame 38 (1).svg"} alt="hero-image" width={295} height={298}/>
        </a>
        <div className="mt-4">
          <h3 className="text-black font-bold text-[20px] tracking-0 title-font mb-1">
          FADED SKINNY JEANS
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex gap-4">
          <Image src={"/images/Frame 10.svg"} alt="hero-image" width={104} height={18.49}/>
          4.5/5
          </h2>
          <p className="mt-1 font-bold text-2xl">
          $210
          </p>
        </div>
      </div>
       <div>
      <button className='border-black border-2 ml-[44px] lg:ml-[512px] rounded-lg h-[52px] w-[218px] justify-center mt-[28px]'>View All</button>
      </div>

    </div>
  </div>
</section>

      </div>

      <div id='Brands' className='hidden sm:block ml-[50px]'>
      <Image src={"/images/Frame 60.svg"} alt="hero-image" width={1239} height={866}/>
      </div>

      <div className='lg:hidden wrapper'>
      <Image src={"/images/Frame 104.svg"} alt="hero-image" width={358} height={975}/>
      </div>

      <div className='mt-[12px] py-12'>
        <h1 className='text-5xl font-bold text-start'>OUR HAPPY CUSTOMERS</h1>
        <div className='mt-[28px] lg:flex gap-x-4'>
      <Image src={"/images/Frame 22.svg"} alt="hero-image" width={400} height={239}/>
      <Image src={"/images/Frame 61.svg"} alt="hero-image" width={400} height={239} className='hidden sm:block'/>
      <Image src={"/images/Frame 62.svg"} alt="hero-image" width={400} height={239} className='hidden sm:block'/>
      </div>
      </div>
      
    </div>
  )
}

export default HomePage
