// take input from the user
const array1 = prompt("Enter the first array: ").split(",").map(Number);
const array2 = prompt("Enter the second array: ").split(",").map(Number);

// check if 4 exists in both arrays
const isInArray1 = array1.includes(4);
const isInArray2 = array2.includes(4);

// print the output based on the check
if (isInArray1 && isInArray2) {
  console.log("4 in both arrays");
} else if (isInArray1) {
  console.log("4 in array 1");
} else if (isInArray2) {
  console.log("4 in array 2");
} 
else {
  console.log("4 does not exist in any of the arrays");
}
