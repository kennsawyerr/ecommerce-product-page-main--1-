const slideImages=[
    {
        Id: 1,
        img: "images/image-product-1.jpg",
    
    },

    {
        Id: 2,
        img: "images/image-product-2.jpg",
    
    }
,
    {
        Id: 3,
        img: "images/image-product-3.jpg",
    
    }
,
    {
        Id: 4,
        img: "images/image-product-4.jpg",
    
    }


]


// slideshow data
const IMG =document.getElementById("product-img");
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
let slideImagesIDValue = 2;


// ==========
// navigation
const menuBtn = document.getElementById("menuBtn");
const overlay = document.querySelector(".overlay");





const navOpt = document.querySelector
(".navMenu");

menuBtn.addEventListener("click", ()=>{
    navOpt.classList.toggle("navShow");
    // document.body.style.filter = "brightness(10%)";
    overlay.classList.toggle("overlayShow");
  
})

// removing navbar if other parts of the screen  is clicked
window.addEventListener("click",function(event){
    if(event.target != menuBtn){navOpt.classList.remove("navShow") }

} )


// Dropdown menu
function Drop() {
    document.getElementById("dropdown").classList.toggle("show");
}


// Slide show buttons 


function showPerson(){
    let item = slideImages[slideImagesIDValue];
    IMG.src = item.img;
   
      }

      nextBtn.addEventListener("click", function(){
        slideImagesIDValue++
        if( slideImagesIDValue > slideImages.length-1){
            slideImagesIDValue= 0;
        }
        return showPerson(slideImagesIDValue)
    })
    

    
    
    prevBtn.addEventListener("click", function(){
        slideImagesIDValue--
        if( slideImagesIDValue < 0 ){
            slideImagesIDValue= slideImages.length-1;
        }
        return showPerson(slideImagesIDValue)
    })