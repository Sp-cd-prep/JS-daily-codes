// Q1. print 1 to 5

// for(let i=1;i<=5;i++){
//     console.log(i)
// }

// Q2. Print all the even numbers from 1 to 10

// let i=1;
// while(i<=10){
//     if(i%2===0){
//         console.log(i)
//     }
//     i++
// }

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// Q3. find out the sum of even numbers in between 1 to 10

// let sum=0;
// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         sum=sum+i;
//     }
// }
// console.log(sum)

// Q4. print all the even and odd numbers in between 1 to 20

// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log("Even numbers:",i)
//     }
//     else{
//         console.log("Odd numbers:",i)
//     }
// }

// Q5. check a number is prime or not


// let N = 21;
// let flag = 0;

// if (N === 1) {
//   console.log("Not a prime number");
// } else {


//   for (let i = 2; i < N; i++) {
//     if (N % i === 0) {
//       flag++;
//     }
//   }
//   if (flag === 0) {
//     console.log(N, " is a prime number");
//   } else {
//     console.log("not a prime");
//   }

// }


// PATTERN PROBLEMS

// Q6. 
// *****
// *****
// *****
// *****
// *****


// let s="";

// for(i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         s=s+"*";
//     }
//     s=s+"\n"
// }
// console.log(s);

// Q7. 
// *
// **
// ***
// ****
// *****

// let s="";

// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         s=s+"*";
//     }
//     s=s+"\n"
// }
// console.log(s);

// Q8.
// *****
// ****
// ***
// **
// *

// let s="";
// for(i=1;i<=5;i++){
//     for(j=5;j>=i;j--){
//         s=s+"*";
//     }
//     s=s+"\n"
// }
// console.log(s);


// Q9
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *


// let s="";
// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         s=s+"*";
//     }
//     s=s+"\n"
// }
// for(i=1;i<=5;i++){
//     for(j=4;j>=i;j--){
//         s=s+"*";
//     }
//     s=s+"\n"
// }
// console.log(s);


// Q10.
// *
// **
// ***
// ****
// *****

Q
//     *
//    **
//   ***
//  ****
// *****

// let s="";

// for(i=1;i<=5;i++){
//     for(k=5;k>i;k--){
//         s=s+" "
//     }
//     for(j=1;j<=i;j++){
//         s=s+"*"
//     }
//     s=s+'\n';
// }
// console.log(s)

// Q11.
// *****
//  ****
//   ***
//    **
//     *

// let s="";

// for(i=1;i<=5;i++){
//     for(k=1;k<=i;k++){
//         s=s+" "
//     }
//     for(j=5;j>=i;j--){
//         s=s+"*"
//     }
//     s=s+'\n';
// }
// console.log(s)

// Q12.
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

// Q13.
//     *
//    ***
//   *****
//  *******
// *********

// Q14.
// *********
//  *******
//   *****
//    ***
//     *


// Q15.
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// Q16.
// *****
// *   *
// *   *
// *   *
// *****

// Q17.
// *        *
// **      **
// ***    ***
// ****  ****
// **********

// Q18.
// 1
// 12
// 123
// 1234
// 12345

// Q19.
// 12345
// 1234
// 123
// 12
// 1

// Q20.
// 54321
// 5432
// 543
// 54
// 5