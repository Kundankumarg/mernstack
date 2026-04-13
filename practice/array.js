//Creating an array using array literal involves using square brackets [] to define and initialize the array.

// Creating an Empty Array
let a =[];
console.log(a);

// Creating an Array and Initializing with Values
let b =[1,"c",3,4];
console.log(b);

//The "Array Constructor" refers to a method of creating arrays by invoking the Array constructor function.
let c = new Array(10,20,30);
console.log(c);

// Accessing Elements of an Array
let arr = ["HTML","CSS","java","php"];
console.log(arr[0]);

// Accessing the Last Element of an Array
let last = ["HTML","CSS","java","php"];
let final = last[last.length - 1];
console.log(`last element is : `,final);

//  Modifying the Array Elements
let m = ["HTML","CSS","java","php"];
m[1]="javascript";
console.log(m);

// Adding Elements to the Array
let p = ["HTML","CSS","java","php"];
m.push("nodejs"); // The push() method add the element to the end of the array.
console.log(m);

m.unshift("Ai"); // The unshift() method add the element to the starting of the array.
console.log(m);