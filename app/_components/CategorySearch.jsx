'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import GlobalApi from  '../_utils/GlobalApi';
import Image from 'next/image'
import Link from 'next/link'

const CategorySearch = () => {

  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    getCategoryList();
  },[])

  const getCategoryList = ()=> {
    GlobalApi.getCategory().then(res => {
      setCategoryList(res.data.data);
    } )
  }
  return (
    <div className='mb-10 items-center flex flex-col gap-2 px-5'>
        <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'>Doctors</span></h2>
        <h2 className='text-gray-400 text-xl'>Search your favorite Doctor & Specialists and Book an Appointment in one click</h2>

        <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
          <Input type="text" placeholder="Search" />
          <Button type="submit"><Search className='h-6 w-6 mr-2'/>  Search</Button>
        </div>

       <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-5">
          {categoryList.length> 0? categoryList.map((item,index) => index<6 &&(
            <Link href={'/search/'+ item.attributes?.Name} className="flex flex-col text-center  items-center p-5 bg-blue-50 m-2 rounded-lg gap-2 hover:scale-110 transition-all ease-out cursor-pointer" key={index}>
              <Image src={item.attributes?.Icon?.data.attributes?.url} alt='Icon' width={40} height={40}/>
              <label className='text-blue-600 text-sm'>{item?.attributes?.Name}</label>
            </Link>
          )):
          [1,2,3,4,5,6].map((item, index) => (
            <div className="m-2 bg-slate-200 w-[130px] h-[130px] rounded-lg animate-pulse" key={index}>
                
            </div>
        ))}
        </div>
    </div>
  )
}

export default CategorySearch