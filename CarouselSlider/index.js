const SHOWING_CLASS = "showing";
//첫번째 슬라이드 정하기 
const firstSlide = document.querySelector(".slider_item:first-child");
//firstSlide.classList.add(SHOWING_CLASS); 

const slide = () => {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    //console.log(currentSlide);
    if(currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        //nextElementSibling 공부
        //현재 슬라이드에서 다음 슬라이드를 찾아서 class 를 add 
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            //nextSlide가 없는 경우는 마지막 슬라이드!
            firstSlide.classList.add(SHOWING_CLASS); 
        }

    }else { //현재슬라이드가 null이라면 첫 번째 슬라이드로 
        firstSlide.classList.add(SHOWING_CLASS); 
    }
}
//0초마다 function 호출
setInterval(slide,2000);

