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
//clicking on the image
const clickedImgContainer = document.querySelector(".clickableImgContainer");
const clickableImage = document.querySelector(".clickableImg")
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
const hoverableThumbnails = Array.from(document.querySelectorAll(".smallImages"));
// cart closing
const closeCartBtn = document.querySelector(".close-cart");



plusBtn.addEventListener("click", function () {
    count++;
    numberOfGoods.forEach(node => {
        node.textContent = count;
    });

})



// function showPerson() {
//     let item = slideImages[value];
//                  object            
//     IMG.src = item.img;

// };

minusBtn.addEventListener("click", function () {
    count--;
    numberOfGoods.forEach(node => {
        node.textContent = count;
    });

})


// //////////////break=============
// hoverableThumbnails.forEach(element => {
//     element.addEventListener("click", function () {

//         let indexNum = indexOf(element)
//         console.log(indexNum)
//         IMGdisplay = slideImages[indexNum];
//         IMG.textContent = IMGdisplay


//     });
// });




hoverableThumbnails.forEach(element => {
    element.addEventListener("click", function () {
        const indexNum = hoverableThumbnails.indexOf(element);
        console.log(indexNum);
        const IMGdisplay = slideImages[indexNum];
       
        showPerson(IMGdisplay)
    });
});




/* picture navigation.
  if i click on a smallImage, it shall open to big image
   take small img
      check the id of the small img
      match the id on a big img 

   display ihe big img  on big screen
      


*/
// //////////////////



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
    Drop()
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


function showPerson(value) {
    let item = slideImages[value];
    IMG.src = item.img;

};

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





// \




/*

  functionalities

  1. add to cart from counter DONE
  2. Counter DONE
  3.View images  DONE
  4. sidebar nav on small screens  DONE
  5.Hoverable thumbnails and making their images bigger

  PROBLEMS
  1. Flex for thumbnails isnt allowing them take full width
  2.absolute num for cart icon looks squeezed.
  3.qtgy num is shaking continuiusly when numbers for #qtynum(nmber of goods) increases by 1
  

*/