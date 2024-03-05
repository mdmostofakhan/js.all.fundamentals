// const result = Math.floor(4.9)
// console.log(result)

// const results = Math.floor(-4.9)
// console.log(results)

// const log = Math.log(7)
// console.log(log)

// const log2 = Math.log2(10)
// console.log(log2)/

// const log10 = Math.log10(10000)
// console.log(log10)

// const total = Math.floor(Math.random() * 100) ;
// console.log(total)


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const resultMathMin = 1;
const resultMathMax = 6;
const total = getRandomInteger(resultMathMin, resultMathMax)
console.log(total)


// console.log(Math.floor(Math.random()) * (35 - 12 + 1) + 12 )