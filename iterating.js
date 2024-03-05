
const iterating = new Set(["a", "b", "c", "d"])

for(const x of iterating){
    // console.log(x)
}


const mySet = new Set();

mySet.add("a")
mySet.add("c")
mySet.add("a")
// console.log(mySet)

const arraySet = new Set(["a", "b", "c", "d", "e"])

arraySet.forEach(items => {
    if(items === "d"){
        console.log(arraySet)
    }
    //  return value;
})

