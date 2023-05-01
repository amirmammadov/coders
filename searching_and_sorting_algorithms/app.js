function linearSearch(num, t) {
  for (let i = 0, l = num.length; i < l; i++) {
    if (t == num[i]) {
      return i;
    }
  }

  return -1;
}

function binarySearch(num, t) {
  let low = 0;
  let high = num.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (t == num[mid]) {
      return mid;
    } else if (t > num[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

function bubbleSort(num) {
  for (let i = 0, l = num.length; i < l; i++) {
    for (let j = 0; j < l - i - 1; j++) {
      if (num[j] > num[j + 1]) {
        let temp = num[j];
        num[j] = num[j + 1];
        num[j + 1] = temp;
      }
    }
  }

  return num;
}

function selectionSort(num) {
  let min = null;
  for (let i = 0, l = num.length; i < l; i++) {
    min = i;
    for (let j = i + 1; j < l; j++) {
      if (num[j] < num[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = num[min];
      num[min] = num[i];
      num[i] = temp;
    }
  }

  return num;
}

function insertionSort(num) {
  for (let i = 1, l = num.length; i < l; i++) {
    let mover = num[i];
    for (let j = i - 1; j >= 0; j--) {
      if (mover < num[j]) {
        num[j + 1] = num[j];
        num[j] = mover;
      }
    }
  }

  return num;
}

function mergeSort(num) {
  if (num.length <= 1) {
    return num;
  }

  let mid = Math.floor(num.length / 2);
  let left = mergeSort(num.slice(0, mid));
  let right = mergeSort(num.slice(mid));

  let sortedNum = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedNum.push(left.shift());
    } else {
      sortedNum.push(right.shift());
    }
  }

  return [...sortedNum, ...left, ...right];
}

function quickSort(num) {
  if (num.length <= 1) {
    return num;
  }

  let last = num[num.length - 1];

  let lowPart = [];
  let highPart = [];

  for (let i = 0, l = num.length; i < l - 1; i++) {
    if (num[i] < last) {
      lowPart.push(num[i]);
    } else {
      highPart.push(num[i]);
    }
  }

  return [...quickSort(lowPart), last, ...quickSort(highPart)];
}

console.log(linearSearch([5, 1, 3, 2, 4], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(selectionSort([5, 4, 3, 2, 1]));
console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(mergeSort([5, 4, 3, 2, 1]));
console.log(quickSort([5, 4, 3, 2, 1]));
