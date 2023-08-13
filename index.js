const menuBtn = document.getElementById("menuBtn");


const navOpt = document.querySelector
(".navMenu");

menuBtn.addEventListener("click", ()=>{
    navOpt.classList.toggle("navShow")
  
})


window.addEventListener("click",function(event){
    if(event.target != menuBtn){navOpt.classList.remove("navShow") }

} )



function Drop() {
    document.getElementById("dropdown").classList.toggle("show");
}


let count = 0;

const btns =document.querySelectorAll('.btn');
const value =document.querySelector('#qtyNum');





btns.forEach(function (btn){
btn.addEventListener("click", function (e)
{const timz = e.currentTarget.classList;
    if (timz.contains("minus")){
        count--; }
    else if( timz.contains("plus")){
        count++
    }
    else(count=0)
   
    value.textContent=count;

});
});

//get all values with query selector



