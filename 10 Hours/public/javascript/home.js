// let getTime = '<%time%>'

const timeHeader = document.getElementById("time-header");
setInterval( () => {
    let time = new Date().toLocaleTimeString();
    console.log(time);
    timeHeader.innerText = "Time: " + time
}, 1000
)
   