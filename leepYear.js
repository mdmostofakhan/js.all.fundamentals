
// function leapYear(year){
//  if(year % 400 === 0 || ((year % 4 === 0) && (year % 100 !== 0))){
//     console.log(`${year} is a leap year`)
//  }
//   else{
//     console.log(`${year} is a not  leap year`)
//   }
// }

// leapYear(100)

// const fullNames = ["mostofa", "morshalim", "java", "israfil", "Tania", "ass", "paiton", "tomato"];

// fullNames.forEach(item => {
//       if(item === "israfil"){
//         console.log(item)
//       }
      
      
//  });


const numbers = [12, 1, 3, 12, 3, 5, 54, 4, 5, 6, 8, 6]
const result = numbers.filter(function(value, index, array){
   return array.indexOf(value) !== index;
})


console.log(result)
