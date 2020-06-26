//const sayHi = document.getElementById("hi");
//querySelector 이용하기
const sayHi = document.querySelector("#hi");

console.log(sayHi);
sayHi.innerHTML="bye";

//html-> DOM 으로 바꿀 수 있다 (document object module) 하나의 오브젝트로 

//자바스크립트에서 쓰는 html 표기방식들을 볼 수 있다.
console.dir(sayHi);
//example
// sayHi.style.color = 'red';
//이런 방식은 soso.. 스타일은 css에서만 하고싶다면?
// 방법1) 클래스를 새로 생성해서 그곳에다가 원하는 스타일을 넣고 코드로 클래스를 지정해주자 


const CHANGE_HI = "changecolor";

function changeHi(){

    //방법1)
    // const hasClass =sayHi.classList.contains(CHANGE_HI);
    // if(hasClass){
    //     sayHi.classList.remove(CHANGE_HI);
    // }else{
    //     sayHi.classList.add(CHANGE_HI);
    // }


    //방법2)

    sayHi.classList.toggle(CHANGE_HI);
}

function init(){
    sayHi.addEventListener("click",changeHi);

}

init();


document.title = ' hey';




function noticeSize(){
   
}

//자바스크립트가 이벤트륿 받기 기다리는 중,,!
//포인트 함수 호출할때 functionName()  이 아니라 function 이라 작성하기 //
//() 넣으면 원할때 함수 호출되는 것이아니라 바로 그냥 함수 호출이 된다.
window.addEventListener("resize",noticeSize);
