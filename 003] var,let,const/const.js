// const is block scoped
// const can neither be updated and nor be redeclared.
// const  must be initialized during declaration.


const a = 100
const b = "Shivang"
const c = null
const d = undefined
console.log(a,b,c,d)


// const a = "lucky" //can't redeclared
// console.log(a)


// const ab  // SyntaxError: Missing initializer in const declaration
// console.log("ab : ",ab)
// ab = 77
// console.log(ab)

// b = 55     //can't update  //TypeError: Assignment to constant variable.
// console.log(b)

{
    console.log("------------------Inside block-----------------")

    console.log(b)

    // b = 20  // TypeError: Assignment to constant variable.
    // console.log(b)

    // console.log(block)  //ReferenceError: Cannot access 'block' before initialization
    const block = "Hellooo"
    console.log(block)

    console.log("-----------------------------------------------")
    
}


console.log(b)

console.log(block)  //ReferenceError: block is not defined

// const block = 30
// console.log(30)

