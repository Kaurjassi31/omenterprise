import React, { useEffect, useState } from 'react'
import { auth, provider } from "./config"
import {signInWithPopup} from "firebase/auth";
import home from './home';

const signIn = () => {

    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)

        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

  return (
    <div>
        {value? <home/> :
        <button onClick={handleClick}>Signin with Google</button>
  }
    </div>
  )
}

export default signIn
