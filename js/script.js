'use strict';

let elResult = document.querySelector(".movies__result")
let elList = document.querySelector(".movies__list")
let elSelect = document.querySelector(".select")
let elForm = document.querySelector("form")
let elFormInput = document.querySelector("form-input")
let elsearchBar = document.getElementById('searchBar')

elResult.textContent = films.length



const generateGenres = function(films){
  const filteredGenres = []

  films.forEach(film => {
    film.genres.forEach(genre => {
      if(!filteredGenres.includes(genre)){
        filteredGenres.push(genre)
      }
    })
  })

  filteredGenres.forEach(genre => {
    let newOption = document.createElement('option')

    newOption.value = genre
    newOption.textContent = genre

    elSelect.appendChild(newOption)
  })
}







const renderFilms = function(filmsArray, element) {
  filmsArray.forEach(movie => {
    //CREATE
    let newItem = document.createElement('li')
    let newCard = document.createElement('div')
    let newImg = document.createElement('img')
    let newCardBody = document.createElement('div')
    let newCardTitle = document.createElement('h5')
    let newCardGenres = document.createElement('ul')

    movie.genres.forEach(genre => {
      let newGenre = document.createElement('li')

      newGenre.textContent = genre

      newCardGenres.appendChild(newGenre)
    })



    //SET ATTRIBUTE
    newItem.setAttribute('class', 'movies__item')
    newCard.setAttribute('class', 'card')
    newCard.style.width = '18rem'
    newImg.setAttribute('class', 'card-img-top')
    newImg.setAttribute('src', movie.poster)
    newCardBody.setAttribute('class', 'card-body')
    newCardTitle.setAttribute('class', 'card-title')

    //TEXT CONTENT
    newCardTitle.textContent = movie.title

    //APPEND
    element.appendChild(newItem)
    newItem.appendChild(newCard)
    newCard.appendChild(newImg)
    newCard.appendChild(newCardBody)
    newCardBody.appendChild(newCardTitle)
    newCardBody.appendChild(newCardGenres)
  })
}



renderFilms(films, elList)
generateGenres(films)




elForm.addEventListener('submit', function(evt) {
  evt.preventDefault()

  let selectValue = elSelect.value

  elList.innerHTML = null




  let filterResult = films.filter((genreValue) => selectValue === "all" || genreValue.genres.includes(selectValue))


  elResult.textContent = filterResult.length

  renderFilms(filterResult, elList)
})




elsearchBar.addEventListener('keyup', (evt) => {
  const searchString = evt.target.value

  let hpCharacters = films.filter(film => searchString.toLowerCase() === film.title.slice(0, searchString.length).toLowerCase(), elList.innerHTML = null)
  elResult.textContent = hpCharacters.length
  renderFilms(hpCharacters, elList)
  generateGenres(hpCharacters)
})
