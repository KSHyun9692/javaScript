const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);


/* padStart로 1이아닌 01로 만들어주기*/
/* getClock()을 실행해서 00:00:00이 아닌
    호출은 먼저 해서 실행시키면 시간이 
    정상적으로 나옴 */
/* setInterval로 getClock을 정해진 시간마다 갱신  */