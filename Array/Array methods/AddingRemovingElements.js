// Adding elements to the end of an array using push

var a = [1,2,3,4,5];
console.log("a before push",a);
a.push(6);
console.log("a after push",a);

// Adding elements to the start of an array using unshift

var b = [1,2,3,4,5];
console.log("b before unshift",b);
b.unshift(6);
console.log("b after unshift",b);

// Adding elements to the start of an array using index

var f = [1,2,3,4,5];
console.log("f before adding",f);
f[0]=6;
console.log("f after adding",f);

// Adding elements to the end of an array using array.length

var g = [1,2,3,4,5];
console.log("g before adding",g);
g[g.length]=6;
console.log("g after adding",g);

// Removing elements to the end of an array using pop

var c = [1,2,3,4,5];
console.log("c before pop",c);
c.pop(6);
console.log("c after pop",c);

// Removing elements to the start of an array using shift

var d = [1,2,3,4,5];
console.log("d before shift",d);
d.shift(6);
console.log("d after shift",d);

// Removing elements using delete

var e = [1,2,3,4,5];
console.log("e before shift",e);
delete e[2]; 
console.log("e after shift",e);
