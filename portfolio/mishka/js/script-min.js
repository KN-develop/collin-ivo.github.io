for(var cartAddLink=document.querySelectorAll(".button--add-to-cart"),modalAddPopup=document.querySelector(".modal-add"),i=0;i<cartAddLink.length;i++)cartAddLink[i].addEventListener("click",function(e){e.preventDefault(),modalAddPopup.classList.add("page-modal--show")});window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),modalAddPopup.classList.contains("page-modal--show")&&modalAddPopup.classList.remove("page-modal--show"))});var navToggle=document.querySelector(".main-nav__toggle"),navMenu=document.querySelector(".main-nav__list");navMenu.classList.remove("site-list--nojs"),navMenu.classList.add("site-list--closed"),navToggle.classList.remove("main-nav__toggle--nojs"),navToggle.classList.add("main-nav__toggle--closed"),navToggle.addEventListener("click",function(e){navMenu.classList.contains("site-list--closed")?(navMenu.classList.remove("site-list--closed"),navMenu.classList.add("site-list--opened"),navToggle.classList.remove("main-nav__toggle--closed"),navToggle.classList.add("main-nav__toggle--opened")):(navMenu.classList.remove("site-list--opened"),navMenu.classList.add("site-list--closed"),navToggle.classList.add("main-nav__toggle--closed"),navToggle.classList.remove("main-nav__toggle--opened"))});