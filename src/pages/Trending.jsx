import React, { useEffect, useState } from 'react'
import { getTrendingMovies } from '../api'
import { Box, Typography } from '@mui/material'
import MovieCard from '../components/MovieCard'
import { useLocation } from 'react-router-dom'

const Trending = ({text}) => {
  const [movies, setMovies] = useState()
  const location=useLocation()

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingMovies = await getTrendingMovies()
      setMovies(trendingMovies)
    }
    fetchMovies()
  }, [])

  return (
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
       >{text==='home'? 'Trending':'Trending at this moment'}</Typography>
      {console.log('PATH ',location.pathname)}
     
      {movies ? (
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            padding: "10px",
             }}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </Box>
      ) :
        <p>Cargando...</p>}
    </Box>
  )
}


export default Trending