// * ------ Exercise 1 ------ * //

// const buttonText = 'Click Me!'
// const redSquare = '<div class="square red"></div>'
// const greenSquare = '<div class="square green"></div>'
// const button = `<button>${buttonText}</button>`

// $('body').append(greenSquare)
// $('body').append(redSquare)

// $('.square').append(button)

// let squares = document.getElementsByClassName('square')

// $('button').click(({ target }) => {
//   $(target).parent().slideUp()
// })

// * ------ Exercise 1 ------ * //
const btnDel = '<button class="btn-delete">Delete</button>'
const btnFav = '<button class="btn-favorite">Favorite</button>'

const songsNames = [
  'Los chicos no lloran',
  'Bambu',
  'Morena mía',
  'Manos vacías',
  'Aire soy',
  'Te amaré',
  'Y como un lobo',
  'Tu Salvación'
]

const favorites = []

const buildSongsList = (songList) => {
  const disk = `<div class="song"></div>`
  for (let index = 0; index < songList.length; index++) {
    $(`.songs`).append(disk)
    let song = $($('.song')[index])
    song.append(`<div class="title"><h2>${songList[index]}</h2></div>`)
    song.append(btnDel)
    song.append(btnFav)

    let buttonDelte = $($('.btn-delete')[index])
    buttonDelte.click(deleteSong)

    let buttonFavorite = $($('.btn-favorite')[index])
    buttonFavorite.click(favoriteSong)
  }
}

const buildFavoritesSongsList = (favList) => {
  const disk = `<div class="song favorite-song"></div>`
  for (let index = 0; index < favList.length; index++) {
    $('.favorites').append(disk)
    let song = $($('.favorite-song')[index])
    song.append(`<div class="title"><h2>${favList[index]}</h2></div>`)
    // song.append(btnDel)

    // let buttonDelte = $($('.btn-delete')[index])
    // buttonDelte.click(deleteSong)
  }
}

const deleteSong = ({ target }) => {
  let song = $($(target).parent())
  song.remove()
}

const favoriteSong = ({ target }) => {
  $('.favorites').empty()
  $('.favorites').text('Favorites')

  let title = $($($(target).siblings('.title')).children('h2')).text()
  favorites.push(title)

  let song = $($(target).parent())
  song.remove()

  buildFavoritesSongsList(favorites)
}

buildSongsList(songsNames)