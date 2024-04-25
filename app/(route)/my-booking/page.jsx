'use client'

import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from './_components/BookingList'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'


const MyBooking = () => {

    const [bookingList, setBookingList] = useState([]);

    const {user} = useKindeBrowserClient();

    useEffect(() => {
      getUserBookingList();
    }, [])
    

    const getUserBookingList = () => {
        GlobalApi.getUserBookingList(user?.email).then(res => {
            setBookingList(res.data.data);
        })
    }

    const filterUserBooking = (type) => {
        const result = bookingList?.filter(item => 
          type=='upcoming'?  new Date(item.attributes.Time) >= new Date()
          :  new Date(item.attributes.Time) <= new Date()
        );
        return result;
    }
  return (
    <div className='px-4 sm:px-10 mt-1'>
        <h2 className='font-bold 2xl:'>My Booking</h2>
        <Tabs defaultValue="upcoming" className="w-full mt-5">
            <TabsList className="w-full justify-start">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
                <BookingList bookingList = {filterUserBooking('upcoming')}
                updateRecord={() => getUserBookingList()} 
                expired={false}
                />
            </TabsContent>
            <TabsContent value="expired">
                <BookingList bookingList = {filterUserBooking('expired')} 
                 updateRecord={() => getUserBookingList()} 
                 expired={true}/>
            </TabsContent>
        </Tabs>

    </div>
  )
}

export default MyBooking