import './style.css';


import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

let facile = document.getElementById('facile');
let rapide = document.getElementById('rapide');
let rentable = document.getElementById('rentable');
let d1 = document.getElementById('d1')

new Splide( '#caroussel-partenaire', {type    : 'loop', autoplay: 'pause', perPage : 6, arrows: false, pagination: false, pauseOnHover: false, pauseOnFocus: false}).mount( { AutoScroll } );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {arrows: false} ).mount();
  } );

  new Splide('#caroussel-real', {type: 'loop', autoplay: 'true', interval:'4000', arrows: false, pagination: false, pauseOnHover: false, autoWidth: true, gap: "4em"}).mount();

  d3.style.display = "none";
  d2.style.display = "none";
  d1.style.display="block";

  facile.addEventListener("click",() =>{
    if(getComputedStyle(d1).display != "none"){
      facile.style.backgroundColor = "#E02B88";
      facile.style.color ="white";
      facile.style.textDecorationColor = "#E02B88"
    } else {
      d3.style.display = "none";
      d2.style.display = "none";
      d1.style.display="block";
      facile.style.backgroundColor = "#E02B88";
      facile.style.color ="white";
      facile.style.textDecorationColor = "#E02B88"
      rapide.style.backgroundColor = "white";
      rapide.style.color ="#E02B88";
      rentable.style.backgroundColor = "white";
      rentable.style.color ="#E02B88";
    }
  })

  rapide.addEventListener("click",()=>{
    if(getComputedStyle(d2).display != "none"){
    } else {
      d3.style.display = "none";
      d2.style.display = "block";
      d1.style.display="none";
      rapide.style.backgroundColor = "#E02B88";
      rapide.style.color ="white";
      rapide.style.textDecorationColor = "#E02B88"
      facile.style.backgroundColor = "white";
      facile.style.color ="#E02B88";
      rentable.style.backgroundColor = "white";
      rentable.style.color ="#E02B88";
    }
  })

  rentable.addEventListener("click",()=>{
    if(getComputedStyle(d3).display != "none"){
      
    } else {
      d3.style.display = "block";
      d2.style.display = "none";
      d1.style.display="none";
      rentable.style.backgroundColor = "#E02B88";
      rentable.style.color ="white";
      rentable.style.textDecorationColor = "#E02B88"
      rapide.style.backgroundColor = "white";
      rapide.style.color ="#E02B88";
      facile.style.backgroundColor = "white";
      facile.style.color ="#E02B88";
    }
  })

