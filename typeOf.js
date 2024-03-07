// const myArray = ["New", "out"] ;

// console.log(typeof myArray);

function isArray(myArray){
    console.log(myArray.constructor.toString().indexOf("Array") > - 1)
}

isArray({name: "mostofa", age: 12})


