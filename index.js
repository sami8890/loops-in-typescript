"use strict";
// first way to declare for loop

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }
for (let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i}`);
}
// second way to declare loop
// for (let i= 1;  i<=10 ; i++){
//     const index:number=2
//     console.log(` ${index} X ${i} = ${index*i}`);
// } 
// console.log(`----------------`);
// for loop with break statement that prints odd number from 1 to 10 
for (let i = 1; i <= 10;) {
    if (i % 2 === 0) {
        continue;
    }
    else {
        console.log(i);
    }
}
