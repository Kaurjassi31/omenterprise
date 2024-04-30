import React from 'react'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const clerklogin = () => {
  return (
    <>
     <SignedOut>
              <SignInButton className="mt-3 p-2" style={{border:"none",fontSize:"18px",backgroundColor:"transparent"}}  />
            </SignedOut>
            <SignedIn>
              <div className='mt-2 p-2'>
              <UserButton className="mt-3 p-2" style={{border:"none",fontSize:"18px",backgroundColor:"transparent"}} />
              </div>
             
            </SignedIn>
      
    </>
  )
}

export default clerklogin

