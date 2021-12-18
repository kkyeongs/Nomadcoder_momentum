const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

// 두개 같은 것
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
    // localStorage는 배열로 저장이안됨 무조건 문자열
    // 그래서 JSON의 stringify를 사용
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // target은 HTML의 element이다 
    // 정보를 담고있어서 누구의 버튼인지 알 수 있다
    const li = event.target.parentElement;
    li.remove();
    // 필터 함수의 기능은 무엇을 제외하고싶은지 묻는 것
    // 지우는 것이 아닌 제외한다 그리고 새로운 array로 준다
    // true = 유지 / false = 제외
    // li.id = String / toDo.id = number 
    // 그래서 parseInt 해준다
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // 지운 뒤에 불러줘야 제대로 적용
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodo.text;
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)
    // li는 span이라는 자식을 갖게 됨
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // 입력된 값을 newTodo에 저장
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // 리스트에 저장
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// saveToDos가 아무것도 없으면 null이기에
if (savedToDos !== null) {
    // 문자열의 saveToDos를 JSON사용해 배열로 바꿔줌
    const parsedToDos = JSON.parse(savedToDos);
    // localStorage에 값이 있으면 toDos에 값을 변경
    toDos = parsedToDos;
    // JS는 Array에 있는 각각의 item에 대해 함수 실행 가능
    // 함수(event) 한 것 처럼 배열안에 있는 item을 보낼 수 있다?
    // forEach는 painToDo를 실행하고 각각의 item(Object)을 준다
    parsedToDos.forEach(paintToDo);
}