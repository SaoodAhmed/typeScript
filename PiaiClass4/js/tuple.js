"use strict";
const tup = ["str1", "str", "str3"];
tup[1] = "str2";
console.log(tup);
tup.push("str4");
tup.push("str5");
// tup.push(7); // error
console.log(tup);
let calcu = ["add", 16];
calcu[0] = "square root";
console.log(calcu);
