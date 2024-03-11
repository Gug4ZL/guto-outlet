const form = document.querySelector(".formulario")
const slideRigth = document.querySelector(".marcas")
const slideLeft = document.querySelector(".marcas")



const abrir = () =>{
    form.style.opacity = 1
    form.style.left = "50%"
}

const fechar = () =>{
    form.style.opacity = 0
    form.style.left = "-21%"
}

const left = () =>{
    slideLeft.style.marginLeft = "-220px"
}
const rigth = () =>{
    slideRigth.style.marginRight = "-128px"
    
}


