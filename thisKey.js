// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     },
//     getFullName: function(){
//         return this.id;
//     }
//   };

//   console.log(person.getFullName())


const person = {
    fullName : function() {
        return this.firstName + " " + this.lastName + " " + this.id;
    }
}

const person2 ={
    firstName : "Mostofa",
    lastName : "Khan", 
    id: 1234,
}

// console.log(person.fullName.call(person2))

// console.log("3333")