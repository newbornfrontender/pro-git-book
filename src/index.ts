'use strict';

const x: number = 5;
const n: number = 3;

const getPowResult = (x: number, n: number): number => {
  let result: number = x;

  for (let i = 1; i < n; i++) {
    result = result * i;
  };

  return result;
};

const showPowResult = () => {
  if (n < 1) {
    return console.log(`Степень ${n} не поддерживается, введите целую степень, большую 1`);
  };

  return console.log( getPowResult(x, n) );
};

showPowResult();
