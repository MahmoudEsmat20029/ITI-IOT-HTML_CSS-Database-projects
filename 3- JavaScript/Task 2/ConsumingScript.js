console.log(printVariables(1, 2, 3)); // [1 , 2, 3 ] .. hosting ---->(b)

function printVariables(value1, value2, value3) {
  return [value1, value2, value3];
}

//console.log(value1, value2, value3); ---> output : error (not defined)----> (a)

let res1 = printVariables(4, 5, 6); // output [4 , 5 , 6]----> (c)
console.log(res1);

let res2 = printVariables(1, 2);
console.log(res2); // output: [1, 2, undefined]----> (d)


const myFunction = (...args) => {//-----
  console.log(args);
};

myFunction(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]

function testLocalVars() {
  var localVar = 3;
  let testingVar = 5;
  console.log(localVar, testingVar); // Outputs: 3 ,5 ----> (g)
}
testLocalVars();
//console.log(localVar, testingVar); --- output error ----(g)

let localVar = 90; // ---->(f)
console.log(localVar); // Outputs: 90 ---> (1)
console.log(printVariables(1, 2, 3));
console.log(localVar); // Outputs: 90 ---> (2)

function LocalVarScope() {
  // ---> (3)
  let localVar = 100;
  console.log(localVar); // Outputs: 100
}
LocalVarScope();
console.log(localVar); // Outputs: 90

// 4  inside the function what if you remove let from localVar and repeat the pervious Steps again?
// localVar becomes a global variable  and  affect the outer localVar = 100 .

// Function expression
let localVar1 = 90;
let myFunction1= function () {
console.log(localVar1); // Outputs: 90
}
// Arrow function
let localVar3 = 90;
let myArrowFunction = () => {};
console.log(localVar3); // Outputs: 90

////////////////////////// assig (2)////////////////////

function sum(var1, var2) {
  return var1 + var2;
}
result = sum(3, 5)
console.log(result) // Output: 8

//  (a)--->To handle less than 2 inputs using ES6 , set defaultr values for the function parameters.

// function sum (a = 0, b = 0)
//         return a+b;
//     };

// (b)--->To handle inputs that are not numbers, you can check the type of the inputs

// function sum  (a, b)  {
//     if (typeof a !== 'number' || isNaN(a)) {
//         a = 0;
//     }
//     if (typeof b !== 'number' || isNaN(b)) {
//         b = 0;
//     }
//
//     return a + b;
// };

// console.log(sum('5', '3')); // Output:8
