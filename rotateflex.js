
const prevEl = document.getElementById("prev");

const nextEl = document.getElementById("next");

const imageContainer = document.querySelector(".image-container");

console.log(imageContainer)

let changeposition=0

     prevEl.addEventListener("click", () => {
     
     changeposition = changeposition + 45

     imageContainer.style.transform = `perspective(1000px) rotateY(${changeposition}deg)`;

});

     nextEl.addEventListener("click", () => {


     changeposition = changeposition - 45

     console.log(changeposition)

     imageContainer.style.transform = `perspective(1000px) rotateY(${changeposition}deg)`;

});

function autoroll() {
     imageContainer.style.transform = `perspective(1000px) rotateY(${changeposition}deg)`;
  timer = setTimeout(() => {
    changeposition = changeposition - 45;
    autoroll();
  }, 3000);
     
}
autoroll()