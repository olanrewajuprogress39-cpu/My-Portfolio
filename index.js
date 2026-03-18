
                 /*  menubar */

    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    }


               /*  active menu */


   

 /* ══════════════════════════════════════════════
      PORTFOLIO FILTER
   ══════════════════════════════════════════════ */


   

   const viewdesign = document.querySelector('#viewdesign')
   const viewdesign2 = document.querySelector('#viewdesign-2')
   const projectcontainer = document.querySelector('.project-container');
   const projectcontainer2 = document.querySelector('.project-container-2');
   const cross = document.querySelector('.cross');
   const cross2 = document.querySelector('.cross2');

   viewdesign.addEventListener('click', function(){
    projectcontainer.style.display = 'flex';
   });
   cross.addEventListener('click', function(){
    projectcontainer.style.display = 'none';
   });

   viewdesign2.addEventListener('click', function(){
    projectcontainer2.style.display = 'flex';
   });
   cross2.addEventListener('click', function(){
    projectcontainer2.style.display = 'none';
   });

  
