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

  songList.forEach(name => {
    $('.songs-list').append(`
      <div class="song-card" data-song-name="${name}">
        <p class="song-name">${name}</p>
        <div class="button-wrapper">
          <button class="btn-danger">Delete</button>
          <button class="btn-success">Favourite</button>
        </div>
      </div>
    `)

    $('.btn-danger').on('click', deleteSong)
    $('.btn-success').on('click', favouriteSong)
  })
}

const deleteSong = (event) => {
  $(event.target).closest('.song-card').remove()
}

const favouriteSong = (event) => {
  $(event.target).closest('.song-card').appendTo('.favourites-songs')
  $(event.target).remove()
}

buildSongsList(songsNames)