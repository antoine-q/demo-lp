import './style.css';


import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

let facile = document.getElementById('facile');
let rapide = document.getElementById('rapide');
let rentable = document.getElementById('rentable');
let d1 = document.getElementById('d1')


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {arrows: false, autoplay: true, interval:4000} ).mount();
    new Splide('#caroussel-real', {type: 'loop', autoplay: 'true', interval:'4000', arrows: false, pagination: false, pauseOnHover: false, autoWidth: true, gap: "4em"}).mount();
    new Splide( '#caroussel-partenaire', {type    : 'loop', autoplay: 'pause', perPage : 6, arrows: false, pagination: false, pauseOnHover: false, pauseOnFocus: false}).mount( { AutoScroll } );


    let scrollPos = [4050,4550,4750,5050,5250];
    const etapes = document.querySelector('.d-etapes');
    const etapesListe = document.querySelectorAll('.d-etapes');
    
    function checkPosition(){
      let windowY = window.scrollY;
      
      etapesListe.forEach((etapesElement, keyElement) => {
        if(windowY < scrollPos[keyElement]) {
          etapesElement.classList.add('zt-step');
        } else {
          etapesElement.classList.remove('zt-step');
        }
      })
      }
    
    window.addEventListener("scroll", checkPosition);
      

    const onglets = document.querySelectorAll('.d-title');
    const panneaux = document.querySelectorAll('div[class^="panneau-"]');
  
    onglets.forEach((ongletElement, ongletKey) => {
      ongletElement.addEventListener('click', function () {
        onglets.forEach(element => { element.classList.remove('zt-selected') });
        ongletElement.classList.add('zt-selected');
        panneaux.forEach((panneauElement, panneauKey) => {
          panneauElement.classList.add('hidden');
          if (panneauKey === ongletKey) {
            panneauElement.classList.remove('hidden');
          }
        });
      });
    });

} );


 

