// Prompt the user to input an array
const inputArray = prompt("Enter an array of numbers separated by commas: ").split(",");

// Convert the array elements to numbers
const arr = inputArray.map(x => parseInt(x.trim(), 10));

// Initialize variables
const duplicateArray = [];
const uniqueArray = [];

// Loop through the array
for (let i = 0; i < arr.length; i++) {
  // If the element is not already in the uniqueArray
  if (uniqueArray.indexOf(arr[i]) === -1) {
    uniqueArray.push(arr[i]);
  }
  // If the element is already in the uniqueArray, it is a duplicate
  else {
    // If the element is not already in the duplicateArray
    if (duplicateArray.indexOf(arr[i]) === -1) {
      duplicateArray.push(arr[i]);
    }
  }
}

// Print the duplicate and unique arrays
console.log("Duplicate Elements = [ " + duplicateArray.join(", ") + " ]");
console.log("Array without duplicate elements = [ " + uniqueArray.join(", ") + " ]");
