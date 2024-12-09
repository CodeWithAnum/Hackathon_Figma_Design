import React from 'react'
import Link from 'next/link';
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
        <div className='bg-black text-white text-center py-2 text-sm'>
            <p>Sign up and get 20% off to your first order.{" "}
            <a href="#" className='underline'>Sign Up Now</a>
            </p>
        </div>
        {/*Main Navigation*/}
        <div className='max-w-7xl hidden sm:block mx-auto flex justify-between items-center p-4'>
            <h1 className='text-2xl font-bold hidden sm:block '>SHOP.CO</h1>
            <nav className='hidden md:flex space-x-6'>
                
                <div className='relative group md:ml-[250px] ml-[-1104px] mt-[-22px]'>
                    {/*Dropdown Trigger */}
                    <button>Shop</button>
                    {/*DropDown Menu */}
                    <div className='absolute hidden group-hover:block rounded shadow-md mt-2 z-10'>
                        <Link href="/homepage" className='block px-4 py-2'>Home</Link>
                        <Link href="/homepage/cart" className='block px-4 py-2'>Cart</Link>
                        <Link href="/homepage/casual" className='block px-4 py-2'>Casual</Link>
                        <Link href="/homepage/productdetailpage" className='block px-4 py-2'>Product Description</Link>
                    </div>
                </div>
                <Link href="#On Sale" className='mt-[-22px]'>On Sale</Link>
                <Link href="#new arrival" className='mt-[-21px]'>New Arrivals</Link>
                <Link href="#Brands" className='mt-[-20px]'>Brands</Link>

                <div>
                    <button className='w-[577px] rounded border-[#F0F0F0]'>
                   <div className='lg:ml-[164px] flex md:ml-[144px] md:mt-[-26px]'>
                    <IoSearchOutline />
                    </div>
                        <input type="text" placeholder='Search for products...' />
                    </button>
                </div>
            
            <div className='flex space-x-4 mt-[-16px]'>
                <Link href="/homepage/cart">
            <LuShoppingCart />
            </Link>
            <CgProfile />
            </div>
            </nav>

           
        </div>


    </header>
     

  )
}

export default Header
