function sortingArray(num) {
  let odd = [];
  let even = [];

  for (let i = 0; i < num.length; i++) {
    let element = num[i];
    if (element % 2 !== 0) {
      odd.push(element);
    } else {
      even.push(element);
    }
  }

  odd.sort(function (a, b) {
    return a - b;
  });

  even.sort(function (a, b) {
    return a - b;
  });

  return [...odd, ...even];
}

function withdraw(amount) {
  if (amount === 0) {
    return;
  }

  const ranks = [500, 200, 100, 50, 20, 10, 5];
  const result = [];
  for (let i = 0; i < ranks.length; i++) {
    if (amount === 0) {
      break;
    }

    const rank = ranks[i];
    while (amount >= rank) {
      result.push(rank);
      amount -= rank;
    }
  }

  return result;
}

function sortingSentence(s) {
  const words = s.split(" ");

  const sentence = new Array(words.length);

  for (const word of words) {
    const pos = Number(word.slice(-1));
    sentence[pos - 1] = word.slice(0, -1);
  }

  return sentence.join(" ");
}

function strictlyIncreasing(num) {
  let count = 0;

  for (let i = 1; i < num.length; i++) {
    if (num[i] <= num[i - 1]) {
      count++;
      if (count > 1) {
        return false;
      }
      if (
        i > 1 &&
        num[i] <= num[i - 2] &&
        i < num.length - 1 &&
        num[i + 1] <= num[i - 1]
      ) {
        return false;
      }
    }
  }

  return true;
}

function searchInsertPosition(num, target) {
  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (num[mid] === target) {
      return mid;
    } else if (num[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function canPlaceFlowers(flowerbed, n) {
  if (flowerbed == null || flowerbed.length == 0) {
    return false;
  }

  let count = 0;

  let i = 0;
  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
    }
    if (count >= n) {
      return true;
    }
    i++;
  }
  return false;
}

console.log(sortingArray([1, 4, 28, 2, 7, 9, 13]));
console.log(withdraw(1900));
console.log(sortingSentence("is2 sentence4 This1 a3"));
console.log(strictlyIncreasing([1, 2, 10, 5, 7]));
console.log(searchInsertPosition([1, 3, 5, 6], 5));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
