let p1 ={
    fname :"Hitesh",
    lname :"ch"
};

let p2={
    ...p1, // spread Operator  // shallow copy
};


console.log(p2); // { fname: 'Hitesh', lname: 'ch' }

p2.fname="piyush";
console.log(p1); // { fname: 'Hitesh', lname: 'ch' }
console.log(p2); // { fname: 'piyush', lname: 'ch' }

