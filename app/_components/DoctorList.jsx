

import Image from 'next/image'
import React from 'react'

const DoctorList = ({doctorList}) => {
    console.log(doctorList.map(items => (items.attributes)))
  return (
    <div className='mb-10 px-8'>
       <h2 className='font-bold text-xl'>Popular Doctors</h2> 
       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-4">
        {doctorList.length> 0? doctorList.map((doctor, index) => (
            <div className="border-[1px] rounded-lg p-3 cursor-pointer hover:border-primary hover:shadow-sm" key={index}>
                <Image src={doctor.attributes?.Image?.data?.attributes?.url} alt='Doctor Image' width={500} height={200} className='h-[200px] w-full object-cover rounded-lg'/>
                <div className="mt-3 items-baseline flex flex-col gap-1">
                    <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>{doctor.attributes?.category?.data?.attributes?.Name}</h2>
                    <h2 className='font-bold'>{doctor.attributes?.Name}</h2>
                    <h2 className='text-primary text-sm'>{doctor.attributes?.Years_of_Experience} Years Experience</h2>
                    <h2 className='text-gray-500 text-sm'>{doctor.attributes?.Address}</h2>

                    <h2 className='p-2 px-3 mt-2 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] 
                    cursor-pointer hover:bg-primary hover:text-white'>Book now</h2>
                </div>
            </div>
        )) :
        [1,2,3,4,5,6].map((item, index) => (
            <div className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse" key={index}>
                
            </div>
        ))
            
        }
       </div>
    </div>
  )
}

export default DoctorList