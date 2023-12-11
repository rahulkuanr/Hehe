const images = [
  { src: "assets/images/1.jpg", posX: 15, posY: 280, speedX: 1, speedY: -1 },
  { src: "assets/images/2.jpg", posX: 30, posY: 265, speedX: -2, speedY: 1 },
  { src: "assets/images/3.jpg", posX: 45, posY: 240, speedX: 2, speedY: -2 },
  { src: "assets/images/4.jpg", posX: 60, posY: 225, speedX: -1, speedY: -2 },
  { src: "assets/images/5.jpg", posX: 75, posY: 210, speedX: -1, speedY: 1 },
  { src: "assets/images/6.jpg", posX: 90, posY: 195, speedX: -1, speedY: -1 },
  { src: "assets/images/7.jpg", posX: 105, posY: 180, speedX: 1, speedY: -2 },
  { src: "assets/images/8.PNG", posX: 120, posY: 165, speedX: -2, speedY: 2 },
  { src: "assets/images/9.jpg", posX: 135, posY: 150, speedX: -1, speedY: -1 },
  { src: "assets/images/10.jpg", posX: 150, posY: 135, speedX: -1, speedY: -1 },
  { src: "assets/images/11.jpg", posX: 165, posY: 120, speedX: 1, speedY: -1 },
  { src: "assets/images/12.jpg", posX: 180, posY: 105, speedX: -2, speedY: -2 },
  { src: "assets/images/13.jpg", posX: 195, posY: 90, speedX: 2, speedY: -1 },
  { src: "assets/images/14.jpg", posX: 210, posY: 75, speedX: -1, speedY: 1 },
  { src: "assets/images/15.jpg", posX: 225, posY: 60, speedX: 1, speedY: 2 },
  { src: "assets/images/16.jpg", posX: 240, posY: 45, speedX: -2, speedY: -1 },
  { src: "assets/images/17.jpg", posX: 265, posY: 30, speedX: -1, speedY: -1 },
  { src: "assets/images/18.jpg", posX: 280, posY: 15, speedX: -1, speedY: -2 },
];

function createImageElement(src, posX, posY) {
  const image = document.createElement("img");
  image.src = src;
  image.className = "floating-image";
  image.style.left = posX + "px";
  image.style.top = posY + "px";
  image.style.objectFit = "cover";
  document.body.appendChild(image);
  return image;
}

function moveImage(imageObj) {
  // Update position
  imageObj.posX += imageObj.speedX;
  imageObj.posY += imageObj.speedY;

  // Reverse direction when reaching edges
  if (
    imageObj.posX + imageObj.image.width > window.innerWidth ||
    imageObj.posX < 0
  ) {
    imageObj.speedX = -imageObj.speedX;
  }

  if (
    imageObj.posY + imageObj.image.height > window.innerHeight ||
    imageObj.posY < 0
  ) {
    imageObj.speedY = -imageObj.speedY;
  }

  // Apply new position
  imageObj.image.style.left = imageObj.posX + "px";
  imageObj.image.style.top = imageObj.posY + "px";

  // Call the function again
  requestAnimationFrame(() => moveImage(imageObj));
}

// Initialize images
// images.forEach((imageObj) => {
//   imageObj.image = createImageElement(
//     imageObj.src,
//     imageObj.posX,
//     imageObj.posY
//   );
//   moveImage(imageObj);
// });

function initializeImages() {
  let index = 0;
  const intervalId = setInterval(() => {
    const imageObj = images[index];
    imageObj.image = createImageElement(
      imageObj.src,
      imageObj.posX,
      imageObj.posY
    );
    moveImage(imageObj);
    index++;

    if (index === images.length) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// Initialize images with setInterval
initializeImages();
