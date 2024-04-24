'use client'
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import DoctorDetails from '../_components/DoctorDetails';
import DoctorListSuggestions from '../_components/DoctorListSuggestions';

const Details = ({params}) => {
  const [doctor, setDoctor] = useState([])

  useEffect(() => {
    getDoctorById();
  },[])

  const getDoctorById = ()=> {
    GlobalApi.getDoctorById(params.recordId).then(res => {
      setDoctor(res.data.data);
    } )
  }
  return (
    <div className='p-5 md:p-20'>
      <h2 className='font-bold text-[22px] text-center'>Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 ">
          <div className="col-span-3 ">
            <DoctorDetails doctor={doctor}/>
          </div>
          <div className="">
              <DoctorListSuggestions/>
          </div>
      </div>
    </div>
  )
}

export default Details