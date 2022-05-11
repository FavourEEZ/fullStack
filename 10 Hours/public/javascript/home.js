// let getTime = '<%time%>'
const Chart = require('chart.js');
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

const getChart = document.getElementById("chart").getContext("2");
const chart = new Chart(getChart, {
    type: 'line',
    data: {
        labels: ["Week-1", "Week-2", "Week-3", "Week-4", "Week-5"],
        dataset: [{
            label: "Week productivity",
            data: [2, 4, 7, 1, 9],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
})
   