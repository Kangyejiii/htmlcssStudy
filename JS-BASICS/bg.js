const body = document.querySelector("body");

// 이미지 5개 저장했으니 5로 지정
const IMG_NUMBER = 5;


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `Images/${imgNumber + 1}.jpg`;
    //img 태그에 클래스 추가
    image.classList.add('bgImage');
    
    //body.appendChild(image);
    body.prepend(image);
    //api 쓸경우
    //image.addEventListener("loaded",handleImgLoad);
}

function genRandom(){
    //이미지 랜덤 하기위한 함수
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
const randomNumber = genRandom();
paintImage(randomNumber);

}

init();
