const clock = document.querySelector("#clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// (실행하 함수, 새로고침(재실행)할 시간)
setInterval(getClock, 500);

function init() {
    getClock();
}

init();