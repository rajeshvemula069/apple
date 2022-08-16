const phoneImages =["images/Black.jpg", "images/blue.jpg", "images/Red.jpg", "images/white.jpg"];
let phoneCont = document.getElementById("phoneShow")
let Black=document.getElementById("Black")

let blue=document.getElementById("blue")

let Red=document.getElementById("Red")

let white=document.getElementById("white")
let defaultImgItems =`<img src= "${phoneImages.at(0)}">`
phoneCont.innerHTML = defaultImgItems;

let blueImgItems=`<img src= "${phoneImages.at(1)}">`
let RedImgItems=`<img src= "${phoneImages.at(2)}">`
let whiteImgItems=`<img src= "${phoneImages.at(3)}">`
Black.addEventListener("click", function(){
    phoneCont.innerHTML=defaultImgItems
    })
   
blue.addEventListener("click", function(){
    phoneCont.innerHTML = blueImgItems
    })
    
    Red.addEventListener("click", function(){
    phoneCont.innerHTML = RedImgItems
    })
    
    white.addEventListener("click", function(){
    phoneCont.innerHTML = whiteImgItems
    })