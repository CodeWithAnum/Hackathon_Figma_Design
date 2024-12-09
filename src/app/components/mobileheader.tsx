import React from 'react'
import Link from 'next/link'
import { IoSearchOutline } from 'react-icons/io5'
import { LuShoppingCart } from 'react-icons/lu'
import { CgProfile } from 'react-icons/cg'

const Mobileheader = () => {
  return (
    <div>
        <header className='lg:hidden bg-white shadow-md md:hidden'>
        <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>

            {/*Left Section */}
            <h1 className='text-2xl font-bold'>SHOP.CO</h1>

            {/*Right Section: Icons */}
            <div className='flex items-center space-x-4'>

                {/*Search Icons */}
                <button className='h-6 w-6'>
                <IoSearchOutline />
                </button>

                {/*Cart Icon */}
                <button className='w-6 h-6'>              
                <LuShoppingCart />
                </button>

                {/*Profile Icon */}
                <button className='w-6 h-6'>
                <CgProfile />
                </button>
                </div>
            </div>

            {/*Navigation Bar */}
            <div className='bg-gray-100 border-t border-gray-200 lg:hidden'>
                <input type='checkbox' id='menu-toggle' className='hidden peer'/>
                <label htmlFor='menu-toggle' className='block text-black px-4 py-3 cursor-pointer'>
                    <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    >
                        <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                    </svg>
                </label>
                
                <nav className='peer-checked:block hidden lg:flex flex-col lg:flex-row px-4'>
                    <Link href='/homepage' className='block py-2 text-black hover:text-gray-600'>
                    Home
                    </Link>
                    <Link href='#On Sale' className='block py-2 text-black hover:text-gray-600'>
                    On Sale
                    </Link>
                    <Link href='#new arrival' className='block py-2 text-black hover:text-gray-600'>
                    New Arrivals
                    </Link>
                    <Link href='#Brands' className='block py-2 text-black hover:text-gray-600'>
                    Brands
                    </Link>

                    {/*Shop Dropdown */}
                    <div className='group relative'>
                        <button className='block py-2 text-black hover:text-gray-200'>
                            Shop
                        </button>
                        <div className='absolute left-0 w-40 bg-white border border-gray-200 hidden group-hover:block'>
                            <Link href='/homepage/casual' className='block px-4 py-2 hover:bg-gray-100'>
                            Casual
                            </Link>
                            <Link href='/homepage/cart' className='block px-4 py-2 hover:bg-gray-100'>
                            Cart
                            </Link>
                            <Link href='/homepage/productdetailpage' className='block px-4 py-2 hover:bg-gray-100'>
                            Product Description
                            </Link>
                        </div>
                    </div>
                </nav>

            </div>
        
        



       </header>
    </div>
  )
}

export default Mobileheader
