const images = [ "0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

/* js에서 작성하고 HTML에 추가 */
const bgImage = document.createElement("img");

bgImage.src = `../img/${chosenImage}`;

document.body.appendChild(bgImage);