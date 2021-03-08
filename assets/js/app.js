function handleMenuOpen(element) {
    element.style.display = 'none'
    document.querySelector('.btn-menu-close').style.display = 'block'
    document.querySelector('.navbar .desktop').style.left = '0'
}

function handleCloseMenu(element) {
    element.style.display = 'none'
    document.querySelector('.btn-menu-open').style.display = 'block'
    document.querySelector('.navbar .desktop').style.left = '-1000px'
}

window.onscroll = function() {trocarCor()};

const trocarCor = () => {
  if(document.documentElement.scrollTop > 50) {
    document.querySelector("header").style.backgroundColor = "#ddd";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent";
    document.querySelector(".logo div").style.color = "#21272f"
  }
}