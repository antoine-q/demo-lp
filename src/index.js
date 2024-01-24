import './style.css';
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#image-carousel', { arrows: false }).mount();
  
  new Splide('#caroussel-partenaire', { type: 'loop', autoplay: 'pause', perPage: 6, arrows: false, pagination: false, pauseOnHover: false, pauseOnFocus: false }).mount({ AutoScroll });
  
  new Splide('#caroussel-real', { type: 'loop', autoplay: 'true', interval: '4000', arrows: false, pagination: false, pauseOnHover: false, autoWidth: true, gap: "4em" }).mount();

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
  



});