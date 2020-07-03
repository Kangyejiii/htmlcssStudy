const slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    slideCount = slide.length,
    slideWidth = 300,
    slideMargin = 30,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

let currentIndex = 0;

//리스트의 갯수에 따라 너비가 증가해야한다 그 갯수를 알기위해 querySelectorAll로
//리스트의 처음과 끝을 알기위해 선언

//ul의 너비를 바꿔야한다. -> 갯수가 늘어나거나 줄어들게 되면 그림이 아래로 떨어질것이다ㅏ.
//마지막 이미지의 마진은 제거해야하니깐 
slides.style.width = (slideWidth+slideMargin)*slideCount - slideMargin+
'px';

function moveSlide(num) {
    
    slides.style.left = -(slideWidth+slideMargin)*num + 'px' ;
    currentIndex = num;
    console.log(currentIndex);

}
//여기서는 3개씩 보이니깐 - 3
nextBtn.addEventListener('click',function(){
    if(currentIndex < slideCount -3 ){
    moveSlide(currentIndex + 1); 
    }else {
        moveSlide(0);
        //끝까지 가면 앞으로 후루룩 
    }
});

prevBtn.addEventListener('click',function(){
    if(currentIndex > 0){
        moveSlide(currentIndex-1);
    } else {
        moveSlide(slideCount -3);
        //맨첫번째 칸에서 이전버튼 누르면 맨 뒷페이지로 
    } 

});

