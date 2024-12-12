import React, { useEffect } from 'react'
import { useAuth } from '../components/AuthContext'
import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../assets/imgwelcome.svg";
import fondImage from "../assets/Welcome-screen.svg";
import WatchIcon from "../assets/icons/folder.svg";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { login, user, logout } = useAuth()
  const navigate= useNavigate()
 useEffect(()=>{
      if (user) {
        navigate('/home')
      }
 }, [user, navigate])
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${fondImage})`,
          zIndex: 1,
        }}
      >
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "white",
            textAlign: "center"
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '0.4rem',
              marginBottom: '0.6rem'
            }}
          >
            <img
              src={WatchIcon}
              alt="Watch Icon"
              style={{
                width: '40px',
                height: '40px'
              }}
            />
            <Typography variant='h4'
              sx={{
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
              WATCH
            </Typography>
          </Box>
          <Typography variant='body1' sx={{ marginBottom: '2rem' }}>
            Enjoy the newest movies
          </Typography>

          <Button
            onClick={login}
            variant='contained'
            color='primary'
            sx={{
              backgroundColor: '#6200ea',
              marginBottom: '1rem',
              '&:hover': { backgroundColor: '#3700b3' }
            }}
          >
            Log in
          </Button>    
          <Typography variant='body2'>
            Np account?{' '}
            <a href="/signup" style={{ color: '#bb86fc', textDecoration: 'none' }}>Sign up</a>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Welcome