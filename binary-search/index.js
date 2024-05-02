function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;
  let mid;
  let guess;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 7));
console.log(binarySearch(myList, -1));
