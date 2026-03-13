
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
   
   const veiwdesignicon = document.querySelector('#viewdesign');
   const viewdesign = document.querySelector('.project-img');
   const closedesign = document.querySelector('.cross');

   

   veiwdesignicon.addEventListener('click', ()=>{
    viewdesign.style.display = 'flex';
   });

   closedesign.addEventListener('click', ()=>{
    viewdesign.style.display = 'none';
   });

   const viewdesignicon2 = document.querySelector('#viewdesign-2');
   const viewdesign2 = document.querySelector('.project-img-2');
   const closedesign2 = document.querySelector('.cross2');


   viewdesignicon2.addEventListener('click', ()=>{
    viewdesign2.style.display = 'flex';
   });

   closedesign2.addEventListener('click', ()=>{
    viewdesign2.style.display = 'none';
   });


  