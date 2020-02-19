// Given var arr = [8,6,7,5,3,0,9] reverse the array and print the result
// Predicted output: [9,0,3,5,7,6,8]
// When you have solved this, create new values for your array and ensure it still works as expected.

// YOUR CODE HERE

var arr = [8,6,7,5,3,0,9];
var newArr = [];
for(var i=0; i<arr.length; i++){
    newArr[i] = arr[arr.length-i-1];
}
console.log(arr);
console.log(newArr);