let arr = [1,2,3,4,5];

// console.log(arr[0])  //1
// console.log(arr[2])  //3

// console.log(arr.length) //5
// console.log(arr.length-1)//4
// //index = arr.length-1

// console.log(arr[arr.length-1]) //5
// console.log(arr[(arr.length)*2-7]) //4
// console.log(arr[(arr.length-1)/2+1]) //4


// Q1.Iterate all the elements in an array

// for(i=0;i<arr.length;i++){
//     console.log(arr[i]);  //1 2 3 4 5 
// }

// Q2. Add 2 in each element
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]+2);
// }

// Q3. Find out the even numbers 
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }

// Q4. Find out the odd number and add 3 to each

// Q5. Find out the maximum number 

// let arr = [4,1,7,2,8,3]

// let max=arr[0]
// for(i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max)

// Q6. Swap 2 elements

// for(i=0;i<arr.length;i++){
//     let temp = arr[1];
//     arr[1]=arr[4];
//     arr[4]=temp;
// }
// console.log(arr)

// Q7. Reverse the array

// let arr=[1,2,3,4,5]
// let s=0;
// let e=arr.length-1
// let temp;

// while(s<e){
//     temp = arr[s];
//     arr[s]=arr[e];
//     arr[e]=temp;
//     s++;
//     e--;
// }
// console.log(arr)

// Q8. Sort the array


// let arr = [2,1,7,3,1,2]
// let temp=0;
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp = arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
//     console.log(arr)

// Q9.Find wheather a number is present or not 

// let arr = [3,6,2,7,8]
// let num=7

// let flag=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]===num)
//     flag++
// }
// if(flag===1)
// console.log("present")
// else
// console.log(":not present")


// Q10.Find the first even number in an array

// let arr = [3,6,2,7,8,6]
// let num=9

// let flag=false;
// for(i=0;i<arr.length;i++){
//     if(arr[i]===num)
//     flag=true
//     break;
// }
// console.log(flag ? "present" : "not present");


// Q11. Summing up to a certain value

// let arr = [3,6,2,7,8,6]

// let sum=0;
// let limit=10;
// for(i=0;i<arr.length;i++){
//     sum=sum+arr[i]
//     if(sum>limit)
//     break;
// }
// console.log(sum)


// Q12. Even Odd

// let arr = [3,6,2,3,8,6]

// let B=[]
// let even=0;
// let odd=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         even=even+arr[i]
//     }
//     else{
//         odd=odd+arr[i]
//     }
// }
// B[0]=even;
// B[1]=odd
// console.log(B)

//  let fruits = ["apple", "banana","grape","orange"];
//  let newfruits = fruits.pop()
//  console.log(newfruits)
//  console.log(fruits)
 
//  let arr = [2,6,2,5,8,1]
//  console.log(arr)
// let newarr = arr.unshift(1)
// console.log(newarr)
//  console.log(arr)


// reverse()
// include()
// indexOf()


// sort()

// let arr = [2,6,2,5,8,9,10]
// arr.sort((a,b)=>a-b)
// console.log(arr) 

// if a-b = negative then sort a before b
// if a-b = positive value then sort b before a


// Unique Color Shirt

// Prepbuddy is very tasteful of clothes. 
// He has N numbers of shirts hanging in the hanger in his wardrobe. Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy wants you to find M
// .

// let arr = [3,2,4,1,2,3]
// let freq=[]

// for(i=0;i<1001;i++){
//     freq[i]=0
// }

// for(i=0;i<arr.length;i++){
//     freq[arr[i]]++;
//     // console.log(freq)
// }

// let count=0;
// for(i=0;i<1001;i++){
//     if(freq[i]===1)
//     count++
// }
// console.log(count)


// BIRTHDAY GAME

// let arr = [2,2,1,3,2]
// let m=2;
// let d=4
// let count=0;

// for(i=0;i<arr.length;i++){
//     let sum=0;
//     for(j=i;j<i+m;j++){
//         sum=sum+arr[j]
//         // console.log(sum)
//     }
//     if(sum===d)
//     count++;
// }
// console.log(count)

