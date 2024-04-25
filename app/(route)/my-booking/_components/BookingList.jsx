import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image'
import React from 'react'
import CancelAppointment from './CancelAppointment';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

const BookingList = ({bookingList, expired, updateRecord}) => {

  const cancelAppointment=(item) => {
    GlobalApi.deleteBooking(item.id).then(res => {
      if (res) {
        toast('Booking cancelled Successfully');
        updateRecord();
      }
    })
  }
  return (
    <div className=''>
      {bookingList && bookingList.map((item, index) => (
        <div className="flex gap-4 items-center border p-5 m-3 rounded-lg" key={index}>
          <Image src={'/work.jpg'} alt='Doctor Image' width={ 70} height={70} className='rounded-full object-cover h-[70px] w-[70px]'/>
          <div className="flex flex-col gap-2 w-full">
            <h2 className='font-bold text-[18px] items-center text-gray-500 flex justify-between'>
              {item.attributes.doctor.data.attributes.Name}
              {!expired&& <CancelAppointment onContinueClick={() =>cancelAppointment(item)}/>}
              </h2>
            <h2 className='flex  gap-2'><MapPin className='text-red-600'/> {item.attributes.doctor.data.attributes.Address}</h2>
            <h2 className='flex gap-2'> <Calendar className='text-primary'/> appointments on {moment( item.attributes.Time).format('DD-MMM-YYYY')}</h2>
            <h2 className='flex gap-2'><Clock className='text-primary'/> At Time: {item.attributes.Date}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookingList