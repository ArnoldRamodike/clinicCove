'use client'
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi';
import DoctorList from '@/app/_components/DoctorList';

const Search = ({params}) => {
  const [doctorList, setDoctorList] = useState([])
  useEffect(() => {
    getDoctor();

  },[])

  const getDoctor = () => {
    GlobalApi.getDoctorByCategory(params.cname).then(res => {
      setDoctorList(res.data.data);
    });
    
  }

  return (
    <div className='mt-5'>
      <DoctorList doctorList={doctorList} header={params.cname+'s'}/>
    </div>
  )
}

export default Search