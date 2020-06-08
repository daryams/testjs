let money = 120000;
let income = 'freelance';
let addExpenses = 'интернет, такси, квартира';
let deposit = true;
let mission = 1000000;
let period = 12;
let budgetDay = money/30;

console.log('Master test');

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);

console.log('Период равен ${period} месяцев');
console.log('Цель заработать ${mission} рублей');

console.log(addExpenses.toLowerCase());

let expenses = addExpenses.split(', ');
console.log(expenses[1]);

console.log(budgetDay);



