// LOOPING STATEMENT

// console.log("hello world")

// No. of statement executed repetedly till the condition is satisfied

// 3 types of loops

// 1. while loops
// 2. for loops
// 3. do-while loop

// 1. While Loop

// Q1. display 1 to 5


// let i=1;
// while(i<=5){
//     console.log(i)
//     i++;
// }

// i:1,2
// output: 1

// Q2. display all the even numbers in between 1 to 10?

// let even= 1;
// while(even<=10){
//     if(even%2===0){
//         console.log(even)
//     }
//     even++;
// }

// or

// let even= 2;
// while(even<=10){
//     console.log(even)
//     even=even+2;
// }

// Q3. display all the odd numbers in between 1 to 10?

// let even= 1;
// while(even<=10){
//     if(even%2!==0){
//         console.log(even)
//     }
//     even++;
// }

// Q4. Display the addition of 1 to 10

// let i=1;
// let sum=0;
// while(i<=10){
//     sum=sum+i;
//     i++;
// }
// console.log(sum);


// Q5. find out a factorial of a number

// let a=1;
// let s=1;
// while(a<=5){
//     s=s*a;
//     a++;
// }
// console.log(s)



// Q6. display multiplication of 1 to 5(1*2*3*4*5)
// Q7.Display the result of 1^2+ 2^2+ 3^2+ 4^2+ 5^2


// Q8. Display and findout addition of each digit of a number


// let n=99999999;
// let s=0;

// while(n>0){
//     r = n%10;
//     s = s+r;
//     n = Math.floor(n/10);
// }
// console.log("Sum of the digit:",s)


// Q9. How to reverse a number?

// let n=123;
// let s=0;

// while(n>0){
//     r = n%10;
//     s = s*10+r;
//     n = Math.floor(n/10);
// }
// console.log("Reverse Number:",s)


// Q10. Find out a number is palindrome or not?

// let n=121;
// let s=0;

// let o=n;
// while(n>0){
//     r = n%10;
//     s = s*10+r;
//     n = Math.floor(n/10);
// }
// console.log(o,s);
// if(o===s){
//     console.log("palindrome")
// }
// else{
//     console.log("Not palindrome")
// }


// Q11. Find out fibonacci series of a number

// let a=0,b=1,c=0;
// let n=34;

// while(c<=n){
//     console.log(c);
//     a=b;
//     b=c;
//     c=a+b;
// }


// Q12. check a number is armstrong or not?

// let n=1634;
// let m=n;
// let s=0;
// let count=0;
// let n=num;
// while(num>0){
//     count++;
//     num=Math.floor(num/10);
// }
// console.log("count",count)

// let count=String(n).length;
// console.log(count,"length")

// while(n>0){
//     r=n%10;
//     s=s+ Math.pow(r,count);
//     n=Math.floor(n/10);
// }
// if(m===s){
//     console.log("armstrong")
// }
// else{
//     console.log("not a armstrong")
// }

// Q find the number of digit in a given number?

// 123 -3
// 1234-4
// let num=6578635;
// let count=0;

// while(num>0){
//     count++;
//     num=Math.floor(num/10);
// }

// console.log(count);

// Q15. find the sum of all the even integer from 1 to N

// let N=6;
// let s=0;
// let i=1;

// while(i<=N){
//   if(i%2===0){
//     s=s+i;
//   }
//   i++;
// }
// console.log(s);