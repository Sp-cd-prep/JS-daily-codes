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


let N = 21;
let flag = 0;

if (N === 1) {
  console.log("Not a prime number");
} else {


  for (let i = 2; i < N; i++) {
    if (N % i === 0) {
      flag++;
    }
  }
  if (flag === 0) {
    console.log(N, " is a prime number");
  } else {
    console.log("not a prime");
  }

  
}
