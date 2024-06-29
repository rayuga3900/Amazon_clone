 
const images = [
    'amazon_ad/amazon_tshirt.jpg',
    'amazon_ad/amazon_ad_scotch-brite.jpg',
    'amazon_ad/amazon-ad-mobile.jpg'
];

let currentIndex = 0;

 
function updateImage() {
let slider=document.querySelector(".slider").children[1];
    slider.src = images[currentIndex];
 let shop=document.querySelector(".shop-section");
if(currentIndex==0)
{
shop.style.backgroundColor="#fae4cd";
}
else if(currentIndex==1)
{
shop.style.backgroundColor="#a3a07f";
}
else if(currentIndex==2)
{
shop.style.backgroundColor="#ab7d52";
}
}

 
function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

 
function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}

 
updateImage();
