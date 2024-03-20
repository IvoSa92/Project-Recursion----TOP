function sort(array) {
  if (array.length === 1) {
    return array;
  } else {
    let arrayMiddle = array.length / 2;
    let left = array.slice(0, arrayMiddle);
    let right = array.slice(arrayMiddle, array.length);

    return merge(sort(left), sort(right));
  }
}

function merge(left, right) {
  let newArray = [];

  while (left.length > 0 && right.length > 0) {
    left[0] > right[0]
      ? newArray.push(right.shift())
      : newArray.push(left.shift());
  }

  return newArray.concat(left, right);
}

const test = [11, 33, 23, 3, 56, 7];

console.log(sort(test));
