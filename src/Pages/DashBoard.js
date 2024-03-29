import React, { useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'
import {useSelector } from 'react-redux'

import MainPage from './MainPage'
import GoalForm from './GoalForm'

const DashBoard = () => {


  const navigate = useNavigate()

  const {user} = useSelector((state)=>state.auth)


  useEffect(() => {
    if(!user){
      return navigate('/login')
    }
  }, [user,navigate])
  
  return (
    <div>
      {/* <MainPage/> */}
      <section className='heading'>
        <h1> welcome {user && user.name}</h1>
        <p>Goals DashBoard</p>
      </section>

      <GoalForm/>
    </div>
  )
}

export default DashBoard