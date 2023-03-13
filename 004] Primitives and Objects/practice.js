let a = "Shivang"
let b = 6
console.log(a+b)
console.log(typeof a+b)
console.log(typeof (a+b))


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

// person is reference to object.

// person = "Shiv" //TypeError: Assignment to constant variable.
person["firstName"] = "Lucky"  // Allowed  // value of key can be changed in const object.


let person1 = {
    firstName: "Shivang",
    lastName: "Gupta",
    id: 3055,
    male: true,
    goal: undefined,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};

person1=23  //Allowed
person1["firstName"] = "Lucky"