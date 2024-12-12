import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import  watch  from "../assets/icons/folder.svg";
import  bell  from "../assets/icons/bell.svg";
import  calendar  from "../assets/icons/calendar.svg";
import  comment  from "../assets/icons/comment.svg";
import  film  from "../assets/icons/film.svg";
import  heart  from "../assets/icons/heart.svg";
import  trendingUp  from "../assets/icons/trending-up.svg";
import  users  from "../assets/icons/users.svg";
import  logoutIcon  from "../assets/icons/log-out.svg";
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom'


function Sidebar() {
  const {logout,user } = useAuth()
  const navigate= useNavigate()

 const navItems=[
    { text: "Home", path: "/home" ,imageIcon:film},
    { text: "Favorites", path: "/favorites" ,imageIcon:heart },
    { text: "Trending", path: "/trending" ,imageIcon:trendingUp},
    { text: "Coming Soon", path: "/coming-soon" ,imageIcon:calendar},
    { text: "Community", path: "/community" ,imageIcon:users},
    { text: "Social", path: "/social" ,imageIcon:comment},
  ]

  const handleClick=()=> {
     logout()
  }
  
  return (
      <Box
        sx={{
          backgroundColor: "#21201E",
          color: "white",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >

        <Box
          sx={{
            display: 'flex',
            alignItems:'center',
            justifyContent:'center',
            marginBottom: '2rem'
          }}
        >
          <img
              src={watch}
              alt="Watch Icon"
              style={{
                width: '40px',
                height: '40px',
              }}
            />
        <Typography variant="h5" sx={{ margin:'2rem 1rem'}}>
        WATCH
        </Typography>
          </Box>  
        <List>
          {navItems.map((item, index) => (
            <ListItem 
             button
             key={index}
             component={Link}
             to={item.path} 
             sx={{
               color: "#ffffff50" ,
               display:'flex',
               gap:'1rem',
               '&:hover':{
                backgroundColor:'#21201E',
                color:'white'
               }
              }}>
                <img
              src={item.imageIcon}
              alt={`${item.text} Icon`}
              style={{
                width: '15px',
                height: '15px'
              }}
            />
              <ListItemText primary={item.text} />
            </ListItem>
          ))
          }
         <ListItem
          sx={{
            color: "#ffffff50" ,
            display:'flex',
            gap:'1rem',
            '&:hover':{
             backgroundColor:'#21201E',
             color:'white'
            }
           }}>
             <img
           src={logoutIcon}
           alt={` Icon logout`}
           style={{
             width: '15px',
             height: '15px'
           }}

           onClick={handleClick}
         />
         {!user?(
            navigate('/')
         ):(
           <ListItemText 
           button
           onClick={handleClick}
           
           primary='Log Out'/>
         )}
          </ListItem> 
        </List>
      </Box>
  )
}

export default Sidebar