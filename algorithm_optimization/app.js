function findIntersection(arr1, arr2) {
  let length1 = arr1.length;
  let length2 = arr2.length;

  if (length1 === 0 || length2 === 0) {
    return;
  }

  let intersection = [];

  for (let i = 0; i < length1; i++) {
    for (let j = 0; j < length2; j++) {
      if (arr1[i] === arr2[j] && !intersection.includes(arr2[j])) {
        intersection.push(arr2[j]);
      }
    }
  }

  return intersection;
}

function checkPalindrome(s) {
  let copyS = "";
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    copyS += s[i];
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === copyS[i]) {
      count++;
    } else {
      break;
    }
  }

  return s.length === count;
}

function checkPrime(n) {
  if (n === 1) {
    return;
  }

  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function isPositive(n) {
  if (n > 0) {
    return square(n);
  } else {
    return 0;
  }
}

function square(n) {
  return n * 2;
}

function findNonRepeated(s) {
  let arr = s.split("");

  for (let i = 0; i < s.length; i++) {
    let num = arr.filter((item) => item === s[i]);
    if (num.length === 1) {
      return s[i];
    }
  }

  return;
}

console.log(findIntersection([1, 2, 3, 3, 4], [3, 3, 4, 6]));
console.log(checkPalindrome("abba"));
console.log(checkPrime(4));
console.log(isPositive(-2));
console.log(findNonRepeated("bbac"));
