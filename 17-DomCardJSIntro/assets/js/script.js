 const div1=document.querySelector(".div1")
 const color2=document.querySelector(".color2")
 const color1=document.querySelector(".color1")
 color2.addEventListener("click",function () {
    div1.style.backgroundColor="red"
})
color1.addEventListener("click",function () {
    div1.style.backgroundColor="#F1AE05"
})
//STARS
let icon = document.querySelectorAll('.fa-star');
icon.forEach(function(star, index) {
  star.addEventListener('click', function() {
    for (let i = 0; i < icon.length; i++) {
      if (i <= index) {
        icon[i].style.color = "black";
      } else {
        icon[i].style.color = "grey";
      }
    }
  });
});
//SIZES
for (let i = 0; i < sizes.children.length; i++) {
    sizes.children[i].addEventListener("click", () => {
      for (let j = 0; j < sizes.children.length; j++) {
        sizes.children[j].style.cssText = "";
      }
      sizes.children[i].style.cssText = `
          width: 1.5rem;
          color: #fff;
          border-radius: 50%;
          display: grid;
          place-items: center;
          gap:10px
          height: 1.5rem;
          background-color: #25d393;
         
        `;
    });
  }

   const parentdiv=document.querySelector(".parentdiv")
   const color11 = document.querySelector(".color1");
 const color22 = document.querySelector(".color2");
 
 color22.addEventListener("click", () => {
   parentdiv.classList.add("change");
 });

 color11.addEventListener("click", () => {
   parentdiv.classList.remove("change");
 });

 
