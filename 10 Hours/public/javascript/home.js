// let getTime = '<%time%>'
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

const getChart = document.getElementById("chart").getContext("2d");
//TODO: PlaceHolder chart... will likely become the user's actual dashboard
const myChart = new Chart(getChart, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: '# of Productive hours',
            data: [12, 4, 3, 5, 7, 14, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(134, 72, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});