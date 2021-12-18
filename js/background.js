const images = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// <img> 생성
const bgImage = document.createElement("img");
// 백틱으로 <img src=""> 지정해준다
bgImage.src = `img/${chosenImage}`;

// body에 html 추가
document.body.prepend(bgImage); // 가장 아래 위치








const first = document.getElementById("first");
first.appendChild(bgImage);