// Many algorithms have multiple valid solutions.
// If you have time, try coming up with a different approach/solution for reversing an array

// YOUR CODE HERE


// var arr = [8,6,7,5,3,0,9];
// var newArr = [];
// for(var i=0; i<arr.length; i++){
//     newArr.push(arr[arr.length-i-1]);
// }
// console.log(arr);
// console.log(newArr);


// var arr = [8,6,7,5,3,0,9];
// var newArr = [];
// var copyArr = arr.slice();
// for(var i=0; i<arr.length; i++){
//     newArr.push(copyArr.pop());
// }
// console.log(arr);
// console.log(newArr);

var arr = [8,6,7,5,3,0,9];
var midIndex = arr.length/2;
for(var i=0; i<midIndex; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
}
console.log(arr);
