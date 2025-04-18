function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let firstPart = mergeSort(arr.slice(0, mid));
  let lastPart = mergeSort(arr.slice(mid));

  return merge(firstPart, lastPart);
}

function merge(first, last) {
    let i = 0;
    let j = 0;
    const newArr = [];
  
    while (i < first.length && j < last.length) {
      if (first[i] < last[j]) {
        newArr.push(first[i]);
        i++;
      } else {
        newArr.push(last[j]);
        j++;
      }
    }
  
    // Add remaining elements
    return newArr.concat(first.slice(i)).concat(last.slice(j));
  }
  

const a = [3, 2, 1, 13, 8, 5, 0, 1, 50, -40, -304];
console.log(mergeSort(a));
console.log(mergeSort([105, 79, 100, 110]));
