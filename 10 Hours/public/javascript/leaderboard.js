function sortbyLeaderboard(){
    console.log("Clicked")
}

let hoursArray = [];
let ul = document.getElementById("ul");
let items = ul.getElementsByTagName("li");

for (let i = 0; i < items.length; ++i) {
    console.log(items[i])
    let text = items[i].innerText
    text = text.split(":")[1] //returns an array, we want the second substring as it contains the number
    console.log(`text: ${text}`) //Get the text for the li
    hoursArray.push(parseInt(text))
    console.log(hoursArray)
}