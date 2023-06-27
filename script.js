function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

//}

const img = document.querySelector("#profile img")
// se tiver light mode, adicionar a imagem respectiva
  if (html.classList.contains("light")) {
  img.setAttribute('src', './assets/avatar-light.png')}
  else {
  img.setAttribute('src', './assets/avatar.png')
  }


}

// pegar a tag img


// substituir a imagem
//se tiver sem light mode, manter a imagem
