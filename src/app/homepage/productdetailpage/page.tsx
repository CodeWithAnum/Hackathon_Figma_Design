import React from 'react'
import Image from 'next/image'
import { SlOptions } from "react-icons/sl";

const Productdetail = () => {
  return (
    <div>
       <section className="text-gray-600 body-font overflow-hidden">
        
       <div className='wrapper'>
        <p>Home / Shop / Men / T-shirts</p>
      </div>

  <div className="container px-5 py-24 mx-auto lg:flex">
    <div className="lg:w-4/5 mx-auto flex flex-wrap space-x-2 space-y-4 gap-[14px]">
    <Image src={"/images/image 1.svg"} alt="hero-image" width={444} height={530}/>
    <div className='lg:space-y-2 flex space-x-2 sm:ml-[2px]'>
    <Image src={"/images/image 2.svg"} alt="hero-image" width={111} height={106} className='lg:w-[152px] lg:h-[167px] lg:flex'/>
    <Image src={"/images/image 5.svg"} alt="hero-image" width={111} height={106} className='lg:w-[152px] lg:h-[167px] lg:flex'/>
    <Image src={"/images/image 6.svg"} alt="hero-image" width={111} height={106} className='lg:w-[152px] lg:h-[167px] lg:flex'/>
     </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 lg:mt-[-44px]">
        <h1 className="text-black text-5xl title-font font-bold mb-1">
          ONE LIFE GRAPHIC T-SHIRT
        </h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              stroke="orange"
              fill="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-600 ml-3">4.5/5</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 space-y-4">
            <div className='mt-[52px] ml-[-144px]'>
           <p className='font-bold text-2xl'>$260 
            <span className='line-through ml-[16px]'>$300 </span>
              -40%</p>
           </div>
          </span>
        </div>
        <p className="leading-relaxed">
        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="flex border-t mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex mt-[18px]">
            <span className="mr-3">Select Colors</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-[#314F4A] rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-gray-300 ml-1 bg-[#31344F] rounded-full w-6 h-6 focus:outline-none" />
          </div>
          <div className="flex ml-6 items-center mt-6">
            <span className="mr-3">Choose Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
              </select>
              
            </div>
          </div>
        </div>
        <div className="flex">
        <span className="title-font font-medium text-2xl text-gray-900">
          <button className="flex ml-auto text-black bg-[#F0F0F0] w-[150px] text-center justify-center border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            - 1 +
          </button>
          </span>
          <button className="flex ml-auto text-white justify-center w-[262px] bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Add to Cart
          </button>
         
        </div>
      </div>
    </div>
  </div>
</section>


        <div>
            <div className='wrapper'>
                <span>
                    <ul className='flex gap-[68px] justify-between text-xl border-b'>
                        <li>Product Details</li>
                        <li className='underline'>Rating & Reviews</li>
                        <li>FAQs</li>
                    </ul>
                </span>
            </div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <section className="text-gray-600 body-font lg:mt-[-144px]">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 className="flex-grow lg:ml-[-184px] sm:pr-16 text-2xl font-medium title-font text-gray-900">
        All Reviews (451)
      </h1>
      <div className='space-x-4 flex lg:mr-[-196px]'>
      <div>
      <Image src={"/images/Frame 19.svg"} alt="hero-image" width={48} height={48} className='flex hidden sm:block'/>
      </div>
      <div className='space-x-2'>
      <button className="flex-shrink-0 text-black bg-[#F0F0F0] rounded-lg border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
        Latest
      </button>
      <button className="flex-shrink-0 text-white bg-black rounded-lg border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
        Write a Review
      </button>
      </div>
      </div>
    </div>
  </div>
</section>

    <div className="flex flex-wrap -m-4 lg:mt-[-84px]">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
          <p className='lg:text-2xl flex lg:justify-end lg:mt-[-46px]'>
            <SlOptions />
            </p>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            Samantha D.
          </h2>
          <p className="leading-relaxed text-base">
          I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to shirt.
          </p>
          <br/>
          <p>
          Posted on August 14, 2023
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
          <p className='lg:text-2xl flex lg:justify-end lg:mt-[-46px]'>
            <SlOptions />
            </p>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            Alex M.
          </h2>
          <p className="leading-relaxed text-base">
          The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I am quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.
          </p>
          <br/>
          <p>
          Posted on August 15, 2023
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <p className='lg:text-2xl flex lg:justify-end lg:mt-[-46px]'>
            <SlOptions />
            </p>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            Ethan R.
          </h2>
          <p className="leading-relaxed text-base">
          This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designers touch in every aspect of this shirt.
          </p>
          <br/>
          <p>
          Posted on August 16, 2023
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 hidden sm:block">
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
          <p className='lg:text-2xl flex lg:justify-end lg:mt-[-46px]'>
            <SlOptions />
            </p>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            Olivia P.
          </h2>
          <p className="leading-relaxed text-base">
          As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. Its evident that the designer poured their creativity into making this t-shirt stand out.
          </p>
          <br/>
          <p>
          Posted on August 17, 2023
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 hidden sm:block">
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
          <p className='lg:text-2xl flex lg:justify-end lg:mt-[-46px]'>
            <SlOptions />
            </p>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            Liam K.
          </h2>
          <p className="leading-relaxed text-base">
          This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designers skill. Its like wearing a piece of art that reflects my passion for both design and fashion.
          </p>
          <br/>
          <p>
          Posted on August 18, 2023
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4 hidden sm:block">
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center mb-4">
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="orange"
              stroke="orange"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
          <p className='lg:text-2xl flex lg:justify-end lg:mt-[-46px]'>
            <SlOptions />
            </p>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            Ava H.
          </h2>
          <p className="leading-relaxed text-base">
          I am not just wearing a t-shirt; I am wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.
          </p>
          <br/>
          <p>
          Posted on August 19, 2023
          </p>
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-black bg-[#F0F0F0] w-[230px] h-[52px] rounded-lg border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Load More Reviews
    </button>
  </div>
</section>

        </div>

    </div>
  )
}

export default Productdetail
