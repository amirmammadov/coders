function strStr(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let occur = "";
    for (let j = i; j < i + needle.length; j++) {
      occur += haystack[j];
    }

    if (occur === needle) {
      return i;
    } else {
      occur = "";
    }
  }

  return -1;
}

function mySqrt(x) {
  if (x < 0) {
    return;
  }

  let i = 0;
  while (true) {
    if (i * i <= x && (i + 1) * (i + 1) > x) {
      return i;
    }
    i++;
  }
}

function singleNumer(nums) {
  if (nums.length === 1) {
    return nums;
  }

  nums.sort();
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
  return -1;
}

function isHappy(n) {
  const checked = [];
  while (n !== 1) {
    if (checked.includes(n)) return false;
    checked.push(n);
    n = n
      .toString()
      .split("")
      .map((i) => i ** 2)
      .reduce((sum, i) => sum + i, 0);
  }
  return true;
}

console.log(strStr("sadbutsad", "sad"));
console.log(mySqrt(8));
console.log(singleNumer([4, 1, 2, 1, 2]));
console.log(isHappy(19));
