const burger = document.querySelector(".burger");
const navMobile = document.querySelector(".nav-mobile")
const linksMobile = document.querySelectorAll(".nav-link-mobile")
/* profile pictures */
const selfie = document.querySelector(".selfie-img");
const selfieContainer = document.querySelector(".img-container")
const avatar = document.querySelector("avatar-img")


/* BURGER ANIMATION AND SLIDE SIDE-BAR */
burger.addEventListener("click", () => {
  if (burger.classList.contains("toggle")){
    navMobile.style.transform = "translateX(110%)"
  }
  else{
    navMobile.style.transform = "translateX(0)"
  }
  navMobile.classList.toggle("nav-open")
  burger.classList.toggle("toggle")
  document.body.classList.toggle("hide")
  
})
/* BURGER ANIMATION AND SLIDE SIDE-BAR WHEN LINK CLICKED*/
linksMobile.forEach(linkMobile => {
  linkMobile.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    burger.classList.contains("toggle") ? navMobile.style.transform = "translateX(0)" : navMobile.style.transform = "translateX(110%)"
    document.body.classList.toggle("hide");
  })
})

/* Showselfie */
selfieContainer.addEventListener("mouseover", () => {
  selfie.style.visibility = "visible"
  
})
selfieContainer.addEventListener("mouseleave", () => {
  selfie.style.visibility = "hidden"
  
})

/* Function copy() */
const copy = () => {
  const copyText = document.querySelector(".copyText");
  copyText.select();
  document.execCommand("copy");
  
}





