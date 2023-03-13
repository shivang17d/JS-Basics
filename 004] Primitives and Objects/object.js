// Objects ---> Key-Value Pair , Non-Primitive data-type

const person = {
    firstName: "Shivang",
    lastName: "Gupta",
    id: 3055,
    male: true,
    goal: undefined,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(person)
console.log(person.fullName)
console.log(person.fullName())
// console.log(person[firstName])  //ReferenceError: firstName is not defined
console.log(person["firstName"])
console.log(person.id)

console.log("\n\n\n")

const person1 = {
  "firstName": "Lucky",
  "lastName": "Gupta",
  "id": 3055,
  "fullName": function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person1)
console.log(person1.firstName)
// console.log(person[firstName])  //ReferenceError: firstName is not defined
console.log(person1["firstName"])
console.log(person1.id)
console.log(person1.fullName())



// const p = {};
const p = new Object();
p.firstName = "John";
p.lastName = "Doe";
p.age = 50;
p.eyeColor = "blue";

console.log(p)

delete p["age"];
console.log(p)


myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(myObj.cars.car2)
console.log(myObj.cars["car2"])
console.log(myObj["cars"]["car2"])
