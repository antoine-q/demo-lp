import './style.css';


import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

new Splide( '#caroussel-partenaire', {type    : 'loop', autoplay: 'pause', perPage : 6, arrows: false, pagination: false}).mount( { AutoScroll } );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {arrows: false} ).mount();
  } );