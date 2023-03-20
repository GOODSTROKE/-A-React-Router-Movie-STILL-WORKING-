import React, { useState } from 'react'
import MovieForm from './component/MovieForm'
import MovieList from './component/MovieList'
import MoviePage from './component/MoviePage'
import Navbar from './component/Navbar'
import './App.css'

function App() {
  const [movies, setMovies] = useState([
    {
      actors:
        'Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield',
      director: 'Francis Lawrence',
      imdbRating: '7.2',
      plot: 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
      title: 'I Am Legend',
      year: '2007',
    },
    {
      actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
      director: 'James Cameron',
      imdbRating: '7.9',
      plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      title: 'Avatar',
      year: '7.9',
    },
    {
      actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
      director: 'Joss Whedon',
      imdbRating: '8.1',
      plot: 'Earths mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
      title: 'The Avengers',
      year: '2012',
    },
    {
      actors: 'Gerard Butler, Lena Headey, Dominic West, David Wenham',
      director: 'Zack Snyder',
      imdbRating: '7.7',
      plot: 'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.',
      title: '300',
      year: '2006',
    },
  ])

  const [isAddMovie, setIsAddMovie] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState('')
  const [isIndexSelected, setIsIndexSelected] = useState(false)

  console.log('selectedIndex', selectedIndex)

  const addMovie = (data) => {
    setMovies([...movies, data])
    alert('Movie added')
  }

  const handleMovieListPage = () => {
    setIsAddMovie(false)
    setSelectedIndex('')
    setIsIndexSelected(false)
  }

  const handleAddMoviePage = () => {
    setIsAddMovie(true)
    setSelectedIndex('')
    setIsIndexSelected(false)
  }

  const handleShowSingleMovie = (index) => {
    console.log('index', index)
    setSelectedIndex(index)
    setIsIndexSelected(true)
  }

  React.useEffect(() => {}, [isAddMovie])
  return (
    <>
      <Navbar
        handleMovieListPage={handleMovieListPage}
        handleAddMoviePage={handleAddMoviePage}
      />
      <div className='App App-header'>
        {isIndexSelected ? (
          <MoviePage movie={movies[selectedIndex]} />
        ) : isAddMovie ? (
          <MovieForm addMovie={addMovie} />
        ) : (
          <MovieList
            movies={movies}
            handleShowSingleMovie={handleShowSingleMovie}
          />
        )}
      </div>
    </>
  )
}

export default App
