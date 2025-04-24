function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  // Fixed binarySearch with index tracking
  function binarySearch(arr, num, offset = 0) {
    if (arr.length === 0) return -1;
  
    const position = Math.floor(arr.length / 2);
    const mid = arr[position];
  
    if (num === mid) {
      return offset + position;
    } else if (num < mid) {
      return binarySearch(arr.slice(0, position), num, offset);
    } else {
      return binarySearch(arr.slice(position + 1), num, offset + position + 1);
    }
  }
  
  // Usage
  const inputArr = [5, 2, 100, 5040, 105, 54];
  const sorted = mergeSort(inputArr);
  console.log("Sorted Array:", sorted);
  
  const target = 54;
  const result = binarySearch(sorted, target);
  
  if (result === -1) {
    console.log(`Target ${target} is not found in the array:`, sorted);
  } else {
    console.log(`Target ${target} found at index:`, result);
  }
  