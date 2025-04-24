function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  let middle = Math.floor((start + end) / 2);
  let middleValue = arr[middle];
  if (start > end) {
    return -1;
  }
  if (middleValue === target) {
    return middle;
  }

  if (middleValue < target) {
    return binarySearch(arr, target, middle + 1, end);
  } else {
    return binarySearch(arr, target, start, middle - 1);
  }
}

console.log(binarySearch([1, 4, 5, 6, 7, 10], 10));
