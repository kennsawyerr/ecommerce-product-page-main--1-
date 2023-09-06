// navigation
const menuBtn = document.getElementById("menuBtn");
const overlay = document.querySelector(".overlay");
const menuCloseBtn = document.querySelector(".close-btn");
//clicking on the image
const clickedImgContainer = document.querySelector(".clickableImgContainer");
const navOpt = document.querySelector(".navMenu");
const closeClickableImg = document.querySelector(".closeClickableImg");
// counter functionalities
const plusBtn = document.querySelector(".plus")
const minusBtn = document.querySelector(".minus")
const numberOfGoods = document.querySelectorAll("#qtyNum");
console.log(numberOfGoods)
let count = 0;
// add to cart
const cartBtn = document.querySelector("#addtocart");
const dropdownContentforProductAdded = document.querySelector(".product-added");
const absoluteNumforCartQuantity = document.querySelector(".absolute-num");
// hoverable img

// cart closing
const closeCartBtn = document.querySelector(".close-cart");

const prevBtn = document.querySelector(".prev")
const NextBtn = document.querySelector(".next")




plusBtn.addEventListener("click", function () {
    count++;
    numberOfGoods.forEach(node => {
        node.textContent = count;
    });

})

minusBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
    }
    numberOfGoods.forEach(node => {
        node.textContent = count;
    });

})

// ========================//

// slideshow arrows controls
prevBtn.addEventListener("click", function () {
    plusSlides(-1);
})

NextBtn.addEventListener("click", function () {
    plusSlides(1);
})













cartBtn.addEventListener("click", function () {

    // if (qtyNum=0){add-to-cart button  CANNOT BE CLICKED}
    let numberOfGoods = count;


    if (numberOfGoods !== 0) {
        //make the "The Container is empty" invisible
        document.getElementById("empty").style.display = "none";
        absoluteNumforCartQuantity.style.display = "block";
        dropdownContentforProductAdded.style.visibility = "visible";

    } else if (numberOfGoods === 0) {
        //make the "The Container is empty" visible
        document.getElementById("empty").style.display = "unset";
        absoluteNumforCartQuantity.style.display = "none";
        dropdownContentforProductAdded.style.visibility = "hidden";

    }

})


closeCartBtn.addEventListener("click", function () {
    //make the "The Container is empty" visible
    document.getElementById("empty").style.display = "unset";
    absoluteNumforCartQuantity.style.display = "none";
    dropdownContentforProductAdded.style.visibility = "hidden";
})

//
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





menuBtn.addEventListener("click", () => {
    navOpt.classList.toggle("navShow");
    overlayStyle();
})

menuCloseBtn.addEventListener("click", function () {
    navOpt.classList.remove("navShow");
    noOverlayStyle();
})

// Dropdown menu
function Drop() {
    document.getElementById("dropdown").classList.toggle("show");
}






// slideshow 


let slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("clickableImg");
    let dots = document.getElementsByClassName("smallImages");
    if (n > slides.length) { //restart it when it reaches the end.length
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length //reset to the last element when its less than 1
    }
    for (i = 0; i < slides.length; i++) { // each picture is hidden . as long as i is = 0 && i<length, go thru each one and make all slides not to show at all.
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { //
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}














// slideshow 2


let slideIndex2 = 1;
showSlides2(slideIndex2);



// Next/previous controls
function plusSlides(n) {
    showSlides2(slideIndex2 += n);
}




// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("clickableImg2");
    let dots2 = document.getElementsByClassName("smallImages2");
    if (n > slides2.length) { //restart it when it reaches the end.length
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length //reset to the last element when its less than 1
    }
    for (i = 0; i < slides2.length; i++) { // each picture is hidden . as long as i is = 0 && i<length, go thru each one and make all slides not to show at all.
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) { //
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
}


// counter  Done
// slideshow arrows  Done
//cart
//flex done