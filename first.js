// const d = new Date();
// const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October","November", "December"];
// document.getElementById("demo").innerHTML = month[d.getMonth()];


const d = new Date();
document.getElementById("demo").innerHTML = d.getMinutes;
console.log(d)

// console.log(getMinutes())

const time = new Date();
// document.getElementById("demo").innerHTML=time.setFullYear(2024);
// time.setFullYear(2024)
// console.log(time)


const someBody = new Date();
someBody.setFullYear(2100, 0, 14)
console.log(someBody)

const body = new Date();
console.log(body)


if(someBody < body){
    console.log("today is before january 14, 2100")
}
else if (someBody >= body){
    console.log("somebody is after")
}
else{
    console.log("not a numbers")
}


