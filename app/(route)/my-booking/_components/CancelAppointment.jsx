import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
     AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
import { Button } from '@/components/ui/button'
  

const CancelAppointment = ({onContinueClick}) => {
    
  return (
    <div>
        <AlertDialog>
            <AlertDialogTrigger varient="outline" className="bg-white text-red-600 border border-red-500 hover:bg-red-500 hover:text-white text-sm p-2
             rounded-lg">
            Cancel Appointment
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to Cancel Appointment?</AlertDialogTitle>
                <AlertDialogDescription>
                   This action cannot be undone, and a 20% feel will be charged to your Account for this action. 
                  This will also permanently delete your account
                    and remove your data from our servers.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => onContinueClick()}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}



export default CancelAppointment