// let getTime = '<%time%>'
// import { Chart } from "c:/Users/favou/Documents/Code/Web Dev/30 Days of JavaScript/Tries/fullStack/10 Hours/node_modules/chart.js/types/index.esm";
// import { Chart } from "..\..\node_modules\chart.js";
// import { Chart } from "chart.js";


// import { chart } from "../../app.js";

const timeHeader = document.getElementById("time-header");
const dateHeader = document.getElementById("date-header");
setInterval( () => {
    let time = new Date()
    // console.log(time);
    // console.log(time.toLocaleDateString())
    dateHeader.innerHTML = time.toDateString()
    timeHeader.innerText = time.toLocaleTimeString()
}, 1000
)

// const getChart = document.getElementById("chart").getContext("2");
// const newChart = new Chart(getChart, {
//     type: 'line',
//     data: {
//         labels: ["Week-1", "Week-2", "Week-3", "Week-4", "Week-5"],
//         dataset: [{
//             label: "Week productivity",
//             data: [2, 4, 7, 1, 9],
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1
//         }]
//     }
// })
   