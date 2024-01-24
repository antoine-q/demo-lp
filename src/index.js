import './style.css';


import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

function elPosition (a) {
  var b = a.getBoundingClientRect();
  return {
    clientX: a.offsetLeft,
    clientY: a.offsetTop,
    viewportX: (b.x || b.left),
    viewportY: (b.y || b.top)
  }
}

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {arrows: false, autoplay: true, interval:4000} ).mount();
    new Splide('#caroussel-real', {type: 'loop', autoplay: 'true', interval:'4000', arrows: false, pagination: false, pauseOnHover: false, autoWidth: true, gap: "4em"}).mount();
    new Splide( '#caroussel-partenaire', {type    : 'loop', autoplay: 'pause', perPage : 6, arrows: false, pagination: false, pauseOnHover: false, pauseOnFocus: false}).mount( { AutoScroll } );



    const etapesListe = document.querySelectorAll('.d-etapes');

    let scrollPos = [4000,4500,4700,5000,5200];

    etapesListe.forEach((etapesElement, keyElement )=> {
      var positions = elPosition(etapesElement);
      scrollPos[keyElement] = positions.clientY;
    })

    console.log(scrollPos);
    
    console.log(scrollPos);
    function checkPosition(){
      let windowY = window.scrollY;

      etapesListe.forEach((etapesElement, keyElement) => {
        if(windowY < scrollPos[keyElement]-(scrollPos[keyElement]*0.1)) {
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


 

