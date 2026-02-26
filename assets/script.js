// Simple form/UX script (no backend required)
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }
});
