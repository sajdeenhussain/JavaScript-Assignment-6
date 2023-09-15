//Q-1
// function date(today){
//  console.log(today);
// }
// date(new Date());


//Q-2
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// function fullName(myName){
// alert(myName)
// }
// fullName("welcome"+" "+"Mr."+" "+firstName+" "+ lastName);

//Q-3
// var num1 = parseInt(prompt("enter your number"));
// var num2 = parseInt(prompt("enter your number"));
// function result(sum){
// return num1+num2
// }
// result(num1,num2);
// console.log(result(num1,num2));

//Q-5
// function abc(number){
// return number*number
// }
// abc(5);
// console.log(abc(5));

// function factorial(number){
// if(number===5){
//     return number*(5-1)*(5-2)*(5-3)*(5-4)
// }else{
//     return 0;
// }
// }
// factorial(5);
// console.log();

//Q-6
// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * (5-1)*(5-2)*(5-3)*(5-4);
//     }
//   }
//   factorial(5);
//   console.log(factorial(5))



function count(start,end){
for(i=start;i<=end;i++){
return document.write(count(start,end));
}
}
count(1,10)



// function displayCounting(start, end) {
//     // Check if start and end are valid numbers
//     if (isNaN(start) || isNaN(end)) {
//       document.write("Please enter valid numbers.");
//       return;
//     }
  
//     // Display counting from start to end
//     for (let i = start; i <= end; i++) {
//       document.write(i + "<br>");
//     }
//   }
  
//   // Example usage:
//   displayCounting(1, 10);
  