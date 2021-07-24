// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function makeItBig(arr){
  // for(let i=0;i<arr.length;i++){
  //   if(arr[i]>=0){
  //     arr[i]="big";
  //   }
  // }
  // return arr;
  arr.forEach(val => val>=0 ? arr[arr.indexOf(val)]="big" : val);
  return arr

}
console.log(makeItBig([-1,3,5,-5,5,6,6,7,7,7]));

// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function lowHigh(arr){
  arr.sort((a,b)=>a-b);
  console.log(arr[0]);
  return arr[arr.length-1];
}
console.log(lowHigh([4,5,2,-1,7,15,23,17]));

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printReturn(arr){
  console.log(arr[arr.length-2]);
  for(let i=0;i<arr.length;i++) {
    if(arr[i]%2!=0){
      return arr[i];
    }
  };
}
console.log(printReturn([2,4,5,6,3,1]));

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr) {
  doubledArr=[];
  arr.forEach(val => doubledArr.push(val*2));
  return doubledArr;
}
console.log(doubleVision([1,2,3]));

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr){
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>=0){
      count++;
    }
  }
  arr[arr.length-1]=count;
  return arr;
}
console.log(countPositives([-1,1,1,1,2,3,4,5,6,-7]));

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".


function evenOdd(arr){
  let ctEven=0;
  let ctOdd=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      ctEven++;
      ctOdd=0;
      if(ctEven==3){
        console.log("Even more so!");
        ctEven=0;
      }
    }else{
      ctOdd++
      ctEven=0;
      if(ctOdd==3){
        console.log("That's odd!");
        ctOdd=0;
      }
    }
  }
}
evenOdd([1,3,5,2,4,6,1,3,2,4,5,7,9,11]);

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function addOneToOdd(arr){
//   for(let i=0;i<arr.length;i++){
//     if(i%2!=0){
//       arr[i]+=1;
//     }
//     console.log(arr[i]);
//   }
//   return arr;
// }
  for(let i=1;i<arr.length;i+=2){
    arr[i]+=1;
  }
  arr.forEach(val=>console.log(val));
  return arr;
}
console.log(addOneToOdd([1,2,3,4,5,6,7]));

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(arr){
  let strLen=[];
  arr.forEach(e => strLen.push(arr[arr.indexOf(e)].length));

  for(let i=1;i<arr.length;i++){
    arr[i]=strLen[i-1];
  }
return arr;
}
console.log(previousLengths(["hello", "dojo", "awesome"]));

// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
  let newArr = [];
  arr.forEach(val => newArr.push(val+7));
  return newArr;
}
console.log(addSeven([1,2,3]));

// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverse(arr){
  for(let i=0;i<arr.length/2;i++){
    [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]];
  }
  return arr;
}
console.log(reverse([3,1,6,4,2]));

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function allNeg(arr){
  let negArr = [];
  arr.forEach(val => val>0?negArr.push(val*-1):negArr.push(val));
  return negArr;
}
console.log(allNeg([1,-3,5]));


// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function hungry(arr){
  let count=0;
  arr.forEach(e => e==="food"?console.log("yummy"):count++);
  if(count==arr.length){
    console.log("I'm hungry");
  }
}
hungry(["hello", "not", "not food", "food"]);

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swapToCent(arr){
  for(let i=0;i<arr.length/2;i++){
    if(i%2==0){
    [arr[i],arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]];
    }
  }
  return arr;
}
console.log(swapToCent([1,2,3,4,5,6]));

// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArr(arr, num){
  for(let i=0;i<arr.length;i++){
    arr[i]*=num;
  }
  return arr;
}

console.log(scaleArr([1,2,3], 3));