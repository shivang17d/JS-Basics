// var is global scoped
// var can be updated and redeclared within its scope.
// var variables are initialized with undefined.


var a = 100
var b = "Shivang"
var c = null
var d = undefined
console.log(a,b,c,d)

var a = "lucky" //redeclared
console.log(a)

var ab  // initialized with undefined
console.log(ab)
ab = 77
console.log(ab)

b = 55     //updated
console.log(b)

{
    console.log("------------------Inside block-----------------")

    console.log(b)
    b = 20
    console.log(b)

    console.log(block)
    var block = "Hellooo"
    console.log(block)

    console.log("-----------------------------------------------")
    
}


console.log(b)

console.log(block)

block = 30
console.log(30)



// var t = 20
// let t = 30
// console.log(t)  // SyntaxError: Identifier 't' has already been declared