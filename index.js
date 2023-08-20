const slideImages = [{
        Id: 1,
        img: "images/image-product-1.jpg",

    },

    {
        Id: 2,
        img: "images/image-product-2.jpg",

    },
    {
        Id: 3,
        img: "images/image-product-3.jpg",

    },
    {
        Id: 4,
        img: "images/image-product-4.jpg",

    }


]


// slideshow data
const IMG = document.getElementById("product-img");
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
let slideImagesIDValue = 2;
// navigation
const menuBtn = document.getElementById("menuBtn");
const overlay = document.querySelector(".overlay");
const menuCloseBtn = document.querySelector(".close-btn");
//clicking on 
const clickedImgContainer = document.querySelector(".clickableImgContainer")
const navOpt = document.querySelector(".navMenu");
const closeClickableImg = document.querySelector(".closeClickableImg");
// counter functionalities
const plusBtn = document.querySelector(".plus")
const minusBtn = document.querySelector(".minus")
const numberOfGoods = document.querySelector("#qtyNum");
let count = 0
// add to cart
const cartBtn = document.querySelector("#addtocart")




plusBtn.addEventListener("click", function () {
    count++;
    numberOfGoods.textContent = count;
})

minusBtn.addEventListener("click", function () {
    count--;
    numberOfGoods.textContent = count;
})

// //////////////break=============
// //////////////////



cartBtn.addEventListener("click", function(){
    
})
//
//
//FUNCTIONS=====
// 
function overlayStyle() {
    overlay.style.visibility = "visible";
}

function noOverlayStyle() {
    overlay.style.visibility = "hidden";
}
// 
// show shoe images but on large screen
function ClickFullScreen() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth <= 900) {
        noOverlayStyle();
    } else {
        overlayStyle();
        clickedImgContainer.style.visibility = "visible";
    }
}





closeClickableImg.addEventListener("click", function () {

    clickedImgContainer.style.visibility = "hidden";
    noOverlayStyle()
})


// 
// 




menuBtn.addEventListener("click", () => {
    navOpt.classList.toggle("navShow");
    overlayStyle();
})

menuCloseBtn.addEventListener("click", function () {
    navOpt.classList.remove("navShow");
    noOverlayStyle();
})

// removing navbar if other parts of the screen  is clicked
// window.addEventListener("click", function (event) {
//     if (event.target != menuBtn) {
//         navOpt.classList.remove("navShow");
//         // overlay.style.visibility = "hidden";
//     }
// })


// Dropdown menu
function Drop() {
    document.getElementById("dropdown").classList.toggle("show");
}


// Slide show buttons 


function showPerson() {
    let item = slideImages[slideImagesIDValue];
    IMG.src = item.img;

}

nextBtn.addEventListener("click", function () {
    slideImagesIDValue++
    if (slideImagesIDValue > slideImages.length - 1) {
        slideImagesIDValue = 0;
    }
    return showPerson(slideImagesIDValue)
})




prevBtn.addEventListener("click", function () {
    slideImagesIDValue--
    if (slideImagesIDValue < 0) {
        slideImagesIDValue = slideImages.length - 1;
    }
    return showPerson(slideImagesIDValue)
})


/*

  functionalities

  1. add to cart from counter
  2. Counter DONE
  3.View images  DONE
  4. sidebar nav on small screens  DONE



*/

function Counter() {

}