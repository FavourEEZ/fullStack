// let getTime = '<%time%>'

const timeHeader = document.getElementById("time-header");
const dateHeader = document.getElementById("date-header");
setInterval( () => {
    let time = new Date()//.toLocaleTimeString();
    console.log(time);
    console.log(time.toLocaleDateString())
    dateHeader.innerHTML = time.toDateString()//date.toLocaleDateString()
    timeHeader.innerText = time.toLocaleTimeString()
}, 1000
)
   