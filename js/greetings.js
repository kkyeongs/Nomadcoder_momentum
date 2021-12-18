const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername === null) {
    // show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // show greeting
    paintGreetings(saveUsername)
}

// localStroage는 브라우저에 뭔가를 저장할 수 있게 해준다
// localStroage.setItem("key", "value") - 저장
// localStroage.getItem("key") - value 반환
// localStroage.removeItem("key") - 삭제