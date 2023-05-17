
//-----------------------------------------------------------------------------------------------//
// INCURSION - REDIRECTIONARE DIN HOME PAGE SPRE CATEGORII//

const salesIncursion =document.querySelector('.sales')
salesIncursion.addEventListener('click', ()=>{
    location.replace('sales.html');
})


const brandsIncursion =document.querySelector('.brands')
brandsIncursion.addEventListener('click', ()=>{
    location.replace('brands.html');
})

const invisibleImage =document.querySelector('.imgInvizibila');
invisibleImage.addEventListener('click', ()=>{
    location.replace('specificProduct.html?creationId=35.html');
})






//-----------------------------------------------------------------------------------------------//
// CAROUSEL//

const containerMare= document.querySelector('.slideshow-container')
console.log(containerMare)
const containerMic1=containerMare.children[0]
const containerMic2=containerMare.children[1]
const containerMic3=containerMare.children[2]


const img1= containerMic1.getElementsByTagName('img')[0];
const img2= containerMic2.getElementsByTagName('img')[0];
const img3= containerMic3.getElementsByTagName('img')[0];


// console.log(img3)



function clickImageCarousel(event){

    if(event.target===img1){
    location.replace('specificProduct.html?creationId=15.html');
    }
    if(event.target===img2){
        location.replace('specificProduct.html?creationId=17.html');
    }if(event.target===img3){
        location.replace('specificProduct.html?creationId=48.html');
    }

}

img1.addEventListener('click',clickImageCarousel)
img2.addEventListener('click',clickImageCarousel)
img3.addEventListener('click',clickImageCarousel)





//-----------------------------------------------------------------------------------------------//
// REDIRECTIONARE ARTICOLE DIN HOME PAGE SPRE CATEGORII//

const linksToPagesForArticles= ['/bath.html','/ceiling.html','/chandeliers.html', '/pendants.html','/wall.html','/lamps.html','/outdoor.html','/brands.html'];


const divCategories= document.getElementsByClassName('categories')[0];
// console.log(divCategories);
// console.log(divCategories.children[2]);
function selectEachCategory (lista){
    for(let i=0; i<lista.children.length; i++){
        const articleCategory =lista.children[i];
        // console.log(li);
        articleCategory.addEventListener('click', ()=>{
            location.replace(linksToPagesForArticles[i]);
        });

    };
};

if (divCategories){
    selectEachCategory(divCategories);
}




//---------------------------------------------------------------------------------------------------//
//INCURSION------------------------------------//


let slidePosition = 0;
let slides = document.getElementsByClassName("Containers");

if(slides){
SlideShow();
    function SlideShow() {
        let i;
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slidePosition++;
        if (slidePosition > slides.length) {slidePosition = 1}
        slides[slidePosition-1].style.display = "block";
        setTimeout(SlideShow, 3000); // Change image every 2 seconds
      } 
}