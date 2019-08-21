// * ------ Exercise 1 ------ * //

const urlBase = 'https://jquerycrud-ed8dc.firebaseio.com/songsList/.json'

let songsNames = {}

const buildSongsList = (songs) => {
  $.each(songs, (key, value) => {
    $('.songs-list').append(`
      <div class="song-card" data-song-name="${value.name}">
        <p class="song-name">${value.name}</p>
        <p><b>${value.author}</b></p>
        <p><b>${value.gender}</b></p>
        <p><b>${value.country}</b></p>
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
  $(event.target).closest('.song-card').appendTo('.favourite-songs')
  $(event.target).remove()
}

const pushNewSong = () => {
  const name = $('#name').val()
  const author = $('#author').val()
  const gender = $('#gender').val()
  const country = $('#country').val()

  const song = {
    name,
    author,
    gender,
    country
  }

  postSongs(song)

  $('.songs-list').empty()
  getSongs()
}

const getSongs = () => {
  $.ajax({
    method: "GET",
    url: urlBase,
    success: (response) => {
      buildSongsList(response)
    }
  })

}

const postSongs = (song) => {
  $.ajax({
    method: "POST",
    url: urlBase,
    data: JSON.stringify(song),
    success: (response) => {
    }
  })
}

getSongs()
$('#submit-data').click(pushNewSong)