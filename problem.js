// const names = ["Mostofa", "Alamin", "Dynamic", "good", "tania"]
// const fullName = names.sort()
// // console.log(fullName)

// const roll_Number = [3, 43, 11, 1, 13, 23, 2, 55, 4]

// function getRollNumber(a, b){
//     return a - b;
// }

// const result = roll_Number.sort(getRollNumber)
// console.log(result)


const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function getCountVowels(sentence){
    let count = 0;
    const result = Array.from(sentence)

    result.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    })
    return count;

}

console.log(getCountVowels("I Love Bangladesh"))





// const numbers = [1, 5, 3, 5, 6, 10, 6, 4, 8, 9, 4, 15, 29, 15]

// const result = numbers.filter(function(value, index, array){
//     return array.indexOf(value) !== index;
// })

// console.log(result);


function myFunction(year){
    if(year % 400 === 0 || (year % 4 == 0) && (year % 100 !== 0) ){
        console.log(`${year} is a leap Year`)
    }
    else{
        console.log(`${year} is a not a leap year`)
    }
}

myFunction(2004)