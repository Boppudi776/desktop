// To sort an array in ascending order

var a =[1,2,3,5,7,4,6];
console.log("a before sort" ,a);

a.sort((a,b)=>a-b);
console.log("a after sort" ,a.sort((a,b)=>a-b));

// To sort an array in descending order

var b =[1,2,3,5,7,4,6];
console.log("b before sort" ,b);

b.sort((a,b)=>a-b);
console.log("b after sort" ,b.sort((a,b)=>b-a));

// To sort an array in random order

var c =[1,2,3,5,7,4,6];
console.log("c before sort" ,c);

c.sort((a,b)=> 0.5 -Math.random());
console.log("c after sort" ,c.sort((a,b)=>0.5 -Math.random()));
