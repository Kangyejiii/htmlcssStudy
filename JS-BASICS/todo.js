const  toDoform = document.querySelector(".js-toDoform"),
    toDoinput = toDoform.querySelector("input"),
    toDolist = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';


//Array 
let toDos = [];



//todolist 지우기
function deleteToDo(event){
    // console.dir(event.target);
    // console.log(event.target.parentNode);
    //delete child element

    const btn = event.target;
    const li = btn.parentNode;
    //html에 있는 ul 태그 가지고오기 -> toDolist
    //html 에서만 제거
    toDolist.removeChild(li);
    //array제거할 요소 return -> filter(condition) ,filter 도 순회하면서 condition에 맞는 array를 반환한다
    //여기서 li.id 는 제거된 list의 id => 즉 return 된 array는 제거된리스트를 제외한 나머지를 뜻한다.
    const cleanToDos = toDos.filter(function(toDo){
         return toDo.id!==parseInt(li.id);
        });
   // console.log(cleanToDos);
   //새로 덮어쓰기
   toDos = cleanToDos;
   //localStorage에도 저장
   saveToDos();

}

//localStorage에 저장하기
function saveToDos(){
    //key: 'toDos' value : toDos(array배열)
    //localStorage.setItem(TODOS_LS,toDos);

    //object->string 으로 저장
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    //console.log(text); 확인용
    //querySelector -> .html 파일에서 요소를 가져왔다면 
    // 생성하는 방법
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText="❌" //ctrl+command + spacebar
    //리스너 추가
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    //li 에 (span + del 버튼 )
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;//li 에다가 id 추가
    // list 에 li 추가
    toDolist.appendChild(li);

    const toDosObj = {
        text:text,
        id : newId, 
    };
    //array(배열)에 object(할일 + 넘버링) 삽입 
    toDos.push(toDosObj);
    //주의! 꼭 push한 후에 
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault(); // 기본 동작 막기
    const currentvalue = toDoinput.value;
    paintToDo(currentvalue);
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); //object로 변환해주기!
       // console.log(parsedToDos);
        parsedToDos.forEach(function(toDo) {
            //console.log(text);
            //localStorage에 저장되어있다면 array에 추가+ 화면애 보여주기 
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit);    
}

init();