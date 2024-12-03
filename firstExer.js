const num = 24;

const conditions = [
  { condition: (num % 2 == 0 || num % 3 == 0 || num % 5 == 0), message: '1' },
  { condition: (num % 2 == 0 && num % 3 == 0) || (num % 5 == 0 && num % 3 == 0) || (num % 2 == 0 && num % 5 == 0), message: '2' },
  { condition: (num % 2 == 0 && num % 3 == 0 && num % 5 == 0), message: '3' },
  { condition: (num % 2 != 0 && num % 3 != 0 && num % 5 != 0), message: '0' }
];

conditions.forEach(({ condition, message }) => condition && console.log(message));
