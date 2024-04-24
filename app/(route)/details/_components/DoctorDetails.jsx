import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DoctorDetails = ({doctor}) => {
  const socialMediaList= [
    {
      id:1,
      icon: '/user.png',
      url: ''
    },
    {
      id:2,
      icon: '/user.png',
      url: ''
    },
    {
      id:3,
      icon: '/user.png',
      url: ''
    },
  ]
  // console.log(doctor.attributes?.categories?.data[0]?.attributes.Name);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg">
      <div className="">
        <Image src={doctor.attributes?.Image?.data?.attributes?.url} width={200} height={200} alt='Doctor Image' className='rounded-lg w-full h-[280px] object-cover'/>
      </div>
      <div className="col-span-2 mt-5 md:px-10 flex flex-col gap-3 items-baseline">
        <h2 className='font-bold text-2xl'>{doctor.attributes?.Name}</h2>
        <h2 className='flex gap-2 text-gray-500 text-md'><GraduationCap/> <span>{doctor.attributes?.Years_of_Experience} Years of Experience</span></h2>
        <h2 className='flex text-md gap-2 text-gray-500'><MapPin/> <span>{doctor.attributes?.Address}</span></h2>
        <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>{doctor.attributes?.categories?.data[0]?.attributes?.Name}</h2>
        <div className="flex gap-3">
          {socialMediaList.map((item, index) => {
            <Image src={item.icon} alt='social Media Icon' width={30} height={30} key={index}/>
          })}
        </div>
        <Button className="mt-3 rounded-full">Book Appointment</Button>
      </div>
    </div>
    <div className="p-3 border-[1px] rounded-lg mt-5">
        <h2 className='font-bold text=[20px]'>About Me</h2>
        <p className='text-gray-500 tracking-wide mt-2'>{doctor?.attributes?.About}</p>
      </div>
  </>
  )
}

export default DoctorDetails