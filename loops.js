// // while do while  for loop
// // while loop
// var i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }
// do{
//     console.log(i);
//     i++;
// }while(i < 5)
// for(var j = 0; j < 5; j++){
//     console.log(j);
//     for(var k = 0; k < 3; k++){
//         console.log("inner loop "+k);
//     }
// }

// from prompt enter a number & print the table of that number
var num = prompt("enter a number");
for(var i = 1; i <= 10; i++){
    console.log(num + " x " + i + " = " + num*i);
}