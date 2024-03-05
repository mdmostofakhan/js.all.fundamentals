const months = ["January", "February", "March", "April", "May", "Jun", "July", "Aught","September", "October", "November","December"]

const d = new date("2024-02-25")
const month = months[d.getMonth()]
document.getElementById("demo").innerHTML= month;
console.log(month)

console.log("ddddd")