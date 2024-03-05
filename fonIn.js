

const person = {fname:"John", lname:"Doe", age:25};

for (let x in person) {
  console.log(person[x])
}


  const numbers = [2, 34, 54, 64, 84, 23, 34]

  for (let number in numbers){
    // console.log(number)
  }

  const array = [2, 34, 54, 64, 84, 23, 34]

  for (let x of array){
    // console.log(x)
  }

// for(let i = 0; i < 10; i++){
//     if(i === 6){
//         break;
//     }
//     console.log("numbers", i) 
// }

  for (let i = 0; i <= 16; i++) {
    if (i === 7) { continue; }
   console.log("continue numbers", i)
  }