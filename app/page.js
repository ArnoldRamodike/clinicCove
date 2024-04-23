'use client'
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import { useEffect, useState } from "react";
import GlobalApi from "./_utils/GlobalApi";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorList();
  }, [])

  const getDoctorList = () => {
      GlobalApi.getDoctorList().then(res => {
          setDoctorList(res.data.data);
      })
  }

  return (
   <div>
      <Hero/>
      <CategorySearch/>
      <DoctorList doctorList={doctorList}/>
   </div>
  );
}
