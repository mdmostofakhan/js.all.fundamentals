// // Create a Map
// const fruits = new Map()
//    fruits.set("apples", 666)
//    fruits.set("bananas", 400)
//    fruits.set("oranges", 5555)
 
//    fruits.get("apples")
 
//   console.log(fruits)


  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
    
  ]);

//   fruits.get("oranges")

  fruits.delete("apples")

  console.log(fruits)