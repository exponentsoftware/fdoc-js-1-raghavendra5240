// 2.d. Write a function which check if items of an array are unique?

// const arrOne = [1, 4, 6, 2, 1];
// console.log(checkUniqueness(arrOne));
// false
// const arrTwo = [1, 4, 6, 2, 3]
// console.log(checkUniqueness(arrTwo));
// true

const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrTwo));

function checkUniqueness(arr) {
  const check = arr.filter((num, pos, array) => {
    return array.indexOf(num) !== pos;
  });
  if (check.length > 0) {
    return false;
  } else {
    return true;
  }
}