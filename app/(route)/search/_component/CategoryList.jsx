'use client'

import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
// import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react"
import {  Command,  CommandEmpty,  CommandGroup,  CommandInput,  CommandItem,  CommandList,  CommandSeparator,  CommandShortcut} from "@/components/ui/command"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([])
    const params = usePathname();
    const category = params.split('/')[2];
    useEffect(() => {
      getCategoryList();
    },[])
  
    const getCategoryList = ()=> {
      GlobalApi.getCategory().then(res => {
        setCategoryList(res.data.data);
      } )
    }
  return (
    <div className='h-screen mt-5 flex flex-col '>
        <Command>
         <CommandInput placeholder="search..." />
           <CommandList className="overflow-visible">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions" >
                {categoryList&& categoryList.map((item, index) => (
                     <CommandItem key={index}>
                        <Link href={'/search/'+item.attributes?.Name} 
                            className={`p-2 flex gap-2 text-[12px] text-blue-600 items-center rounded-md cursor-pointer w-full 
                            ${category == item.attributes.Name && 'bg-red-200' }`}>
                            <Image src={item.attributes?.Icon?.data.attributes?.url} alt="Icon" width={25} height={25} />
                            <label>{item.attributes.Name}</label>
                        </Link>
                    </CommandItem>
                ))}
               </CommandGroup>
           </CommandList>
        </Command>
    </div>
  )
}

export default CategoryList