import React, { useEffect, useState } from 'react'
import { useAuth } from '../components/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { Box, Typography } from '@mui/material'
import MovieCard from '../components/MovieCard'
import { db } from '../firebase'

function Favorites ({text}) {

  const {user}=useAuth()
  const [favorites, setFavorites]=useState([])

  useEffect(()=>{
    const fetchFavorites=async () => {
      if(!user) return
      const userFavoritesRef= doc(db, 'favorites', user.uid)
      const docSnap=await getDoc(userFavoritesRef)
      if(docSnap.exists()){
        setFavorites(docSnap.data().movies || [])
      }
    }
    fetchFavorites()
  },[user])

  return (
    <>
      <Box sx={{
        backgroundColor:'#21201E',
        minHeight: "100vh", 
        padding: '10px 50px 50px',
      }}>
        <Typography
       variant='h6'
       sx={{
         paddingBlockStart:text==='home'?'2rem':'0rem',
         paddingInlineStart:'1.5rem',
         color:'white'
        }}
       >{text==='home'? 'Favorites':'My fovorites movies'}</Typography>
        {favorites ? (
          <Box sx={{
              display: 'grid',
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              padding: "10px",
          }}>
            {favorites.map(movie=>(
              <>
              <MovieCard key={movie.id} movie={movie}/>
              </>
            ))}
          </Box>
        ) : 
        <p>Cargando...</p>}
      </Box>
    </>
  )
}

export default Favorites