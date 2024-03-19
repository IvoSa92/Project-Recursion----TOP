function fibs(num) {
  let num1 = 0;
  let num2 = 1;
  let sum;
  const array = [0, 1];

  for (let index = 2; index < num; index++) {
    sum = num1 + num2;
    array.push(sum);

    num1 = num2;
    num2 = sum;
  }
  return array;
}
console.log(fibs(8));

function fibsRec(num, array = [0, 1]) {
  if (array.length === num) {
    return array;
  }

  const nextNum = array[array.length - 1] + array[array.length - 2];
  array.push(nextNum);

  return fibsRec(num, array);
}
console.log(fibsRec(8));
