let p1 ={
    fname :"Hitesh",
    lname :"ch"
};

let p2 = {
    fname:p1.fname,
    lname:p1.lname,
};

console.log(p1); // { fname: 'Hitesh', lname: 'ch' }
console.log(p2); // { fname: 'Hitesh', lname: 'ch' }

p2.fname="piyush";
p2.lname="Garg";


console.log(p1); // { fname: 'Hitesh', lname: 'ch' }
console.log(p2); // { fname: 'piyush', lname: 'Garg' }
