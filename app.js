let list = document.querySelector(".list");
let imgs = Array.from(list.children);
const nextBtn = document.querySelector(".btn-right");
const prevBtn = document.querySelector(".btn-left");

//getting imgs width
const imgWidth = imgs[0].getBoundingClientRect().width;
// console.log(imgWidth);

//arraying imgs next to each other
function setImgPositon(img, index) {
  img.style.left = imgWidth * index + "px";
}
imgs.forEach(setImgPositon);

// move to Img Function
const moveToImg = function (list, currentImg, targetImg) {
  list.style.transform = "translateX(-" + targetImg.style.left + ")";
  currentImg.classList.remove("current-img");
  targetImg.classList.add("current-img");
};

// Hide/Show Arrows
const hideShowArrows = function (imgs, prevBtn, nextBtn, targetIndex) {
  if (targetIndex === 0) {
    prevBtn.classList.add("hiden");
    nextBtn.classList.remove("hidden");
  } else if (targetIndex === imgs.length - 1) {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }
};

//-------------------------------------------------------------
// When we click on the right button, move images to the left
//-------------------------------------------------------------
nextBtn.addEventListener("click", function () {
  const currentImg = list.querySelector(".current-img");
  const nextImg = currentImg.nextElementSibling;
  //   console.log(nextImg);
  //   const nextIndex = imgs.findIndex(function (img) {
  //     img === nextImg;
  //   });
  const nextIndex = imgs.findIndex((img) => img === nextImg);

  moveToImg(list, currentImg, nextImg);
  hideShowArrows(imgs, prevBtn, nextBtn, nextIndex);
});

//------------------------------------------------------------
// When we click on the left button, move images to the right
//------------------------------------------------------------
prevBtn.addEventListener("click", function () {
  const currentImg = list.querySelector(".current-img");
  const prevImg = currentImg.previousElementSibling;
  //   const prevIndex = imgs.findIndex(function (img) {
  //     return img === prevImg;
  //   });
  const prevIndex = imgs.findIndex((img) => img === prevImg);

  moveToImg(list, currentImg, prevImg);
  hideShowArrows(imgs, prevBtn, nextBtn, prevIndex);
});
