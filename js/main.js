const buttonText = 'Click Me!'
const redSquare = '<div class="square red"></div>'
const greenSquare = '<div class="square green"></div>'
const button = `<button>${buttonText}</button>`

$('body').append(greenSquare)
$('body').append(redSquare)

$('.square').append(button)

let squares = document.getElementsByClassName('square')

$('button').click(({ target }) => {
  console.log(target)
  $(target).parent().slideUp()
})

