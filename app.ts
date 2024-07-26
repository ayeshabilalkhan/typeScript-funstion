// 2. Functions

// Function with type annotations for parameters and return value
function add(x: number, y: number): number {
    return x + y;
}

function add1(a: number, b: number): number {
    return a + b;
}

// Function expression
const subtract = function(x: number, y: number): number {
    return x - y;
};


function greet(name: "Ayat"): string {
    return "Hello, " + name;
}
// Function call and console log
console.log(greet("Ayat"));  // Output: Hello, Ayat
