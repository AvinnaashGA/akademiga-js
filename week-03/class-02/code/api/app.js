// * EXERCISE API > RENDER ARRAY USING MAP METHOD
// * SEARCH USING QUERY STRING OF PARAMETER S IN OMDBAPI

const colOne = document.querySelector('.col-1')
const section = document.querySelector('section')
const searchInput = document.querySelector('input')

const processData = (search) => {
  let url = 'http://www.omdbapi.com/'
  let queryStrings = `?apikey=1fdec7e5&s=${search}`

  fetch(url + queryStrings)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.table(data.Search)
      let movieArr = data.Search
      movieArr.map((movie) => {
        let { Title: title, Year: year, Poster: urlPoster, Type: type } = movie
        // let h3 = document.createElement('h3')
        // h3.classList.add('map-1')

        section.innerHTML += `
        <div>
         <h2>Title - ${title}</h2>
         <p>Year Released - ${year}</p>
        </div>
        <div>
         <img src=${urlPoster}>
         </div>
         `
        //  colOne.appendChild(mapOne)
        // colTwo.appendChild(mapTwo)

        // console.log(movie)
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
searchInput.addEventListener('change', (e) => {
  let search = e.target.value
  processData(search)
})

// query strings

// let optionMethod = {
//   method: 'POST'
// }

/*
Http Request @ Verbs
GET
POST
PUT
DELETE
*/

/*
Create an input to Search the Title of the Movie
Dynamically change the url query strings to do that
*/
