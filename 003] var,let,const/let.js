// let is block scoped
// let can be updated but not redeclared.
// let variables are initialized with undefined.


let a = 100
let b = "Shivang"
let c = null
let d = undefined
console.log(a,b,c,d)


// let a = "lucky" //can't redeclared
// console.log(a)

let ab  // initialized with undefined
console.log("ab : ",ab)
ab = 77
console.log(ab)

b = 55     //updated
console.log(b)

{
    console.log("------------------Inside block-----------------")

    console.log(b)
    b = 20
    console.log(b)

    // console.log(block)  //ReferenceError: Cannot access 'block' before initialization
    let block = "Hellooo"
    console.log(block)

    console.log("-----------------------------------------------")
    
}


console.log(b)


console.log(block)  //ReferenceError: block is not defined

// let block = 30
// console.log(30)
