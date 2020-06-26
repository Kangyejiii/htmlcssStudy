const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");

//2. ** Date Class! **
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    

    //처음에 쓴 코드 
//    const seconds = date.getSeconds() < 10 ? "0"+date.getSeconds(): date.getSeconds();

//  Ternary Operator (삼항 연산자) >> condition ? firstExpression : secondExpression
// 1의 자리 숫자를 '01' 두자리로 표현. 
    clockTitle.innerText=`${hours < 10 ? `0${hours}`: hours }:${minutes < 10? `0${minutes}` : minutes}:${seconds < 10? `0${seconds}`: seconds}`;
}


// 1. init() 생성
function init() {
    getTime();
    setInterval(getTime,1000);
}

init();