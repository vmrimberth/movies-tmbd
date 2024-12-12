import { Box } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'
import DynamicNavbar from './DynamicNavBar'
import { Outlet } from 'react-router-dom'


const MainLayout = ({children}) => {
  return (
    <Box
    sx={{
        display:'flex',
        height:'100vh',
        width:'98.9vw'
    }}
    >
        <Sidebar/>

<Box sx={{ 
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height:'100vh'
   }}>
        <DynamicNavbar />
        <Box
          sx={{
            flex: 1,
            overflowY: "auto", 
            backgroundColor: "#1E1E1E",
            height:'200px'
          }}
        >
          {children}
          <Outlet />
        </Box>
      </Box>

    </Box>
  )
}

export default MainLayout