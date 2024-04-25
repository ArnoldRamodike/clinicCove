'use client'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Header = () => {
    const Menu=[
        {
            id: 1,
            name: 'Home',
            path: '/',
        },
        {
            id: 2,
            name: 'Explore',
            path: '/explore',
        },
        {
            id: 3,
            name: 'Contact Us',
            path: '/Contact',
        },
    ]
    const {user} = useKindeBrowserClient();
    
  return (
    <div className='flex items-center justify-between p-4 shadow-sm'>
        <div className="flex items-center gap-10">
            <Link href={'/'} className='cursor-pointer'>
             <Image src='/logo.svg' alt="logo" width={180} height={180} />
            </Link>
   
            <ul className='md:flex gap-8 hidden'>
                {Menu.map((item, index) => (
                    <Link href={item.path} className='hover:text-primary hover:scale-105 transition-all ease-in-out cursor-pointer' key={index}>{item.name}</Link>
                ))}
            </ul>
        </div>
        {user? (
                    <Popover>
                    <PopoverTrigger className='w-44'>
                        <Image src={'/user.png'} alt={'/user.png'} width={50} height={50} className='rounded-full'/> 
                    </PopoverTrigger>
                    <PopoverContent>
                        <ul className='flex flex-col gap-2'>
                            <Link href={'/profile'} className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>Profile</Link>
                            <Link href={'/my-booking'} className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>My bookings</Link>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                            <LogoutLink>Log out</LogoutLink>
                            </li>
                        </ul>
                    </PopoverContent>
                   </Popover>
             ) :( 
             <LoginLink><Button>Get started</Button></LoginLink>
            )
            }
        
       
    </div>
  )
}

export default Header