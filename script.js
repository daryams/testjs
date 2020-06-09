'use strict'; 


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

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);

console.log(addExpenses.toLowerCase());

let expenses = addExpenses.split(', ');
console.log(expenses[1]);

console.log(budgetDay);


money = prompt('Ваш месячный доход?', 150000);
console.log(Number(money));

addExpenses = prompt('Возможные расходы через запятую:', 'sex, drugs, rocknroll');
console.log(String(addExpenses));

deposit = confirm('А депозит есть?');
console.log(Boolean(deposit));

let expensesQuest1 = 'Введи обязательную статью расхода:';
let expensesQuest2 = 'Во сколько это обойдется?';

let mainExpenses1 = prompt(expensesQuest1, 'Квартира');
let mainAmount1 = prompt(expensesQuest2, 40000);

let mainExpenses2 = prompt(expensesQuest1, 'Машина');
let mainAmount2 = prompt(expensesQuest2, 10000);

let budgetMonth = Number(money) - (Number(mainAmount1) + Number(mainAmount2));
console.log(`Месячный бюджет: ${budgetMonth}`);

let missionTime = +Math.ceil(mission / budgetMonth);
if (missionTime > 0) {
    console.log(`Достигнем цели через ${missionTime} месяцев`);
} else {
    console.log(`Достигнем цели никогда`);
}


budgetDay = Math.floor(budgetMonth/30);
if (budgetDay < 0) {
    console.log('Нет у тебя бюджета на день');
} else {
    console.log(`Бюджет на день: ${budgetDay}`);
}


if (budgetDay > 1200 || budgetDay == 1200) {
    console.log('Слишком много денег!');
} else if (budgetDay > 600 && budgetDay < 1200) {
    console.log('Средненько -_-');
} else if ((budgetDay < 600 && budgetDay > 0) || budgetDay == 600) {
    console.log('Нищеброд!');
} else if (budgetDay < 0 || budgetDay == 0) {
    console.log('Это пиздец');
}