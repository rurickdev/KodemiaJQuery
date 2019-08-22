let bloc = $('.box')

const changeColorToElement = (element) => {
  element.css('background-color', getRandomColor())
}

const getRandomColor = () => {
  return ('#' + Math.floor(Math.random() * 16777215).toString(16))
}

const buildBlocs = () => {
  let dividendo = 2
  for (let i = 1; i < 6; i++) {
    let secondBloc = `<div class="box box-${i}">${i}</div>`
    $(`.box-${i - 1}`).append(secondBloc)

    secondBloc = $(`.box-${i}`)

    secondBloc.css('height', `${100 / dividendo}vh`)
    secondBloc.css('width', `${100 / dividendo}vw`)
    secondBloc.css('z-index', `${i}`)
    secondBloc.css('z-index', `${i}`)
    secondBloc.css('left', `${secondBloc.parent().width()}px`)

    changeColorToElement($(`.box-${i}`))
    dividendo = dividendo * 2
  }
}

changeColorToElement(bloc)
buildBlocs()

