const form =document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";


//localStorage 이름 저장하는 메소드
function saveName(text){
    localStorage.setItem(USER_LS,text); //key : USER_LS value : text
}



//form 제출 할 때 호출되는 메소드 
function handleSubmit(event){
    //input창에 글자를 적고 enter을 누르면 마치 새로고침한것처럼 사라지는데 이 기본 동작을 막을 수 있게 하는 기능
    event.preventDefault();
    //<input> 태그에 적었던 값을 호출하고싶을 때 -> input.value
    const currentValue = input.value;
    paintGreeting(currentValue);
    //value 저장
    saveName(currentValue);
}

//유저가 있을 경우 form은 제거, 환영인사는 보이게 하는 함수
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); 
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//currentUser가 존재하지 않는 경우 form을 활성화
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);

}
//localStorage에 대해 학습
 
 function loadName(){
     const currentUser = localStorage.getItem(USER_LS);
    
     if(currentUser===null){
        askForName();
        //유저가 없을경우
     }else {
        //유저가 있을경우
        paintGreeting(currentUser);
     }
 }

function init(){
loadName();


}

init();
