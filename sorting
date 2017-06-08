function bubbleSort(arr){

  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr.length; j++){

      if (arr[j] >= arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  return arr;
}

function mergeSort(arr) {

  //if the arr only has 1 item left, then it is already sorted.  so return arr.
  if (arr.length < 2)
    return arr;

    //find the approximate middle of the array.  then divide it into two arrays.
    var middle = Math.ceil(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    //using recurssion, sort the left side of the array, and sort the right side of the array.  then merge the two sorted arrays together.
    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {

  var result = [];

// console.log("this is the left: "+left);
// console.log("this is the right: "+right);

//we now have a bunch of sorted elements/arrays that need to be merged
  while (left.length && right.length){
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

//the following takes care of edge case where the array size is not a even number.
  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
}
