/** 
  1. Use useEffect to Fetch Data Once
  2. Store in a state
  3. Display using JSX > display title and description using the .map higher order function
  Display > console.log(data)
**/

import { useEffect, useState } from 'react'

const MovieSearch = () => {
  let [textInput, setTextInput] = useState('')
  let [updateBtn, setUpdateBtn] = useState(textInput)
  let [movies, setMovies] = useState(null)

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=1fdec7e5&s=${updateBtn}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search)
        setTextInput('')
      })
      .catch((err) => console.log(err))
  }, [updateBtn])

  const handleInput = (event) => {
    setTextInput(event.target.value)
  }

  const handleSubmit = () => {
    setUpdateBtn(textInput)
  }

  return (
    <>
      <h1>Movie Search</h1>
      <input type='text' onChange={handleInput} value={textInput} />
      <button onClick={handleSubmit}>Search</button>

      {movies &&
        movies.map((movie) => {
          return <h1>{movie.Title}</h1>
        })}
    </>
  )
}

export default MovieSearch
