import React, { useEffect } from 'react'
import { useAuth } from '../components/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import Trending from './Trending'

function Home() {
  const { user } = useAuth()
  const navigate= useNavigate()
  useEffect(
    ()=>{
      if (!user) {
        navigate('/')
      }
    }
    ,[user])

  return (
    <>
    <Box>

    <Trending text='home' />
    </Box>
    {console.log('USER', user)
    }
{/* <Sidebar/> */}


    </>
  )
}

export default Home