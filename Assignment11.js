// Function to calculate GCD of two numbers
function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  
  // Main function to perform required calculations
  function calculateArray(array) {
    let sumOdd = 0;
    let sumEven = 0;
    let countOdd = 0;
    let countEven = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        sumEven += array[i];
        countEven++;
      } else {
        sumOdd += array[i];
        countOdd++;
      }
    }
  
    let diff = sumEven - sumOdd;
    let avg = (sumOdd + sumEven) / array.length;
    let gcdValue = gcd(sumOdd, sumEven);
  
    console.log("Difference = " + diff);
    console.log("Odd Elements = " + countOdd);
    console.log("Even Elements = " + countEven);
    console.log("Average = " + avg);
    console.log("GCD = " + gcdValue);
  }
  
  // Example usage
  let inputArray = [1, 2, 3, 4, 5];
  calculateArray(inputArray);
  