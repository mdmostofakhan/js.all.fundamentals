 
class person  {
    constructor(name, year){
        this.nameFast = name;
         this.year = year
    }
  Play(status){
    console.log(`${this.nameFast} ${this.year} ${status}`)
  }  
}

const person1 = new person("Mostofa", 2020 )
const person2 = new person("Rubel", 2010 )


person1.Play("i am going")
person2.Play("yes timing bro")

console.log(person2)