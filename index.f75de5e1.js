"use strict";
const nav = document.querySelector(".gallery__list");
nav.addEventListener("click", (even)=>{
    even.preventDefault();
    const mainImage = document.querySelector("#largeImg");
    mainImage.src = even.target.parentElement.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
