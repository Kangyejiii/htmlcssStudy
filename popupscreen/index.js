const openButton = document.getElementById("open"),
        modal = document.querySelector(".modal"),
        overlay = modal.querySelector(".modal_overlay"),
        closeBtn = modal.querySelector("button");

const openModal = () =>{
    modal.classList.remove("hidden"); //기본설정이 hidden 누르면 보이게끔 클래스를 지워주자
}

const closeModal = () => {
    modal.classList.add("hidden");
}
// 버튼 클릭 리스너 
openButton.addEventListener("click",openModal);

closeBtn.addEventListener("click",closeModal);
//뒤에 배경눌러도 꺼지게끔
overlay.addEventListener("click",closeModal);