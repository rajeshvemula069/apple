const chairImages = ["images/chair.png", "images/greenchair.jpg", "images/yellowchair.jpg", "images/bluechair.jpg" ]
let chairCont = document.querySelector(".product-image")

let red = document.querySelector(".red")

let green = document.querySelector(".green")

let Yellow = document.querySelector(".yellow")

let blue = document.querySelector(".blue")

let defaultImgItems = `<img src = "${chairImages.at(0)}">`
chairCont.innerHTML = defaultImgItems;

let greenImgItems = `<img class ='w-100' src= "${chairImages.at(1)}">`
let yellowImgItems = `<img class= 'w-100' src= "${chairImages.at(2)}">`
let blueImgItems = `<img class= 'w-100' src= "${chairImages.at(3)}">`    
 red.addEventListener("click", function () {
    chairCont.innerHTML = defaultImgItems
})
green.addEventListener("click", function () {
    chairCont.innerHTML = greenImgItems
})
Yellow.addEventListener("click", function () {
    chairCont.innerHTML = yellowImgItems
})

blue.addEventListener("click", function () {
    chairCont.innerHTML = blueImgItems
})