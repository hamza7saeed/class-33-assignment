/*Assignment on loops

Do all these assignments with for loop and while loop both */
/*1. *Print Numbers:*
   Write a loop that prints numbers from 1 to 10 and while loop */
//     for (let i = 1; i <= 10; i++){
//     console.log(i);
//    }
//    let i = 1;
//    while(i <= 10){
//     console.log(i);
//     i++;
//    }
/*2. *Sum of Numbers:*
   Calculate and print the sum of numbers from 1 to 50 using a for loop and while loop */
// let sum = 0;
// for (let i = 0; i <=50; i++){
//     // console.log(i);
//     sum = sum + i;
//     console.log(sum);
// }
// console.log("Our final value of 50 is = ", sum);
// let i = 0;
// while(i <= 50){
//     sum = sum + i
//     console.log(sum);
//     i++;
// }
// console.log("Our final value of 50 is = ", sum);
/*3. *Even Numbers:*
   Print all even numbers between 20 and 30 using a for loop and while loop */
//    for (let i = 20; i <= 30; i++){
//     if (i % 2 == 0){
//         console.log("Its even number = ", i);
//     }
// };
// let i = 20;
// while (i <= 30){
//     if(i % 2 == 0){
//          console.log("Its even number = ", i);
//     }
//     i++;
// }
/*4. *Reverse Order:*
   Print numbers from 10 to 1 in reverse order using a for loop and while loop */
//    for (let i = 10; i >=0; i--){
//     console.log(i);
//    };
//    let i = 10;
//    while(i >= 0){
//     console.log(i);
//     i--;
//    }
/*5. *Multiplication Table:*
   Display the multiplication table (up to 10) for a given number using a for loop and while loop */
//    let table = 2;
// for (let i = 0; i <= 10; i++){
//     console.log(table +" x "+ i +" = "+(i)*table);
// }
// let i = 1;
// while (i <= 10){
//     console.log(table+" x " + i + " = " + (i)*table);
//  i++;
// }
/*Jumping Statement Assignments

1. *Even Number Skip:*
   Write a loop that prints all even numbers between 1 and 10, but use the `continue` keyword to skip printing the number 6.*/
//    for (let i = 0; i <= 10;i++){
//     if(i % 2 == 0){
//         if (i == 6){
//             console.log("Skipp number is =", i);
//             continue;
//         }
//         console.log(i);
//     }
// }
// let i = 0;
// while(i<=10){
//     if(i == 6){
//             continue;
//         }
//       console.log(i);
//     i++;
// }
/*2. *Number Search:*
   Write a loop that iterates from 1 to 5, and use the `break` keyword to stop the loop when it finds the number 3.*/
//    for (let i = 0; i <= 5; i++){
//     if (i == 3){
//         break;
//     }
//     console.log(i);
//    }
var i = 0;
while (i <= 5) {
    if (i == 3) {
        break;
    }
    console.log(i);
    i++;
}
