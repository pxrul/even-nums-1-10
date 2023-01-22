// Creating a function to call
                       // declaring our variable
const printEvenNums = (array) => {
    // creating a empty array that will later store our even numbers
    let evenNums = [];
    
  for (let i = 0; i < array.length; i++) {
            // seeing if the numbers are even by dividing them by 2
        if (array[i] % 2 == 0) {
            // adding numbers in the array that have a remainder of 0 when divided by 2 to our evenNums array
            evenNums.push(array[i]);
        }
  }
  return evenNums;
}
                   //calling and logging the output of our function
console.log(printEvenNums([1,2,3,4,5,6,7,8,9,10]));
