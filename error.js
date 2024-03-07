try{
    addlert("welcom ")
} catch(err){
    // console.log(err.message)
}

let x = 4;
try{
    if( x == '') throw "emt";
    if(isNaN(x)) throw "not a number"
    x = Number(x)
    if(x < 5) throw "this is a low";
    if(x > 10) throw {
        name: "too heigh",
        lastName: "this is a message"
    }
}
 catch(err){
    // console.log(err)
 }

// console.log("thi is a test")


let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
   console.log(err.name)
}


let m = 5;
try {
  m = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  console.log(err.name)
}


