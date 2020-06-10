'use strict'; 

let money, income, addExpenses, deposit, mission, period, budgetDay;

money = prompt('Ваш месячный доход?', 150000);
addExpenses = prompt('Возможные расходы через запятую:', 'sex, drugs, rocknroll');
deposit = confirm('А депозит есть?');

let expensesQuest1 = 'Введи обязательную статью расхода:';
let expensesQuest2 = 'Во сколько это обойдется?';

let mainExpenses1 = prompt(expensesQuest1, 'Квартира');
let mainAmount1 = prompt(expensesQuest2, 40000);

let mainExpenses2 = prompt(expensesQuest1, 'Машина');
let mainAmount2 = prompt(expensesQuest2, 10000);


function getExpensesMonth (x1, x2) {
    let result = Number(x1) + Number(x2);
    return result;
}

let expensesMonth = getExpensesMonth(mainAmount1, mainAmount2);
console.log('Обязательные расходы: ' + expensesMonth);

function getAccumulatedMonth(inc, exp) {
    let result = Number(inc) - Number(exp);
    return result;    
}
let accumulatedMonth = getAccumulatedMonth(money, expensesMonth);
console.log('Накопления за месяц: ' + accumulatedMonth);

function getTargetMonth(mission, a) {
    let result = +Math.ceil(mission / a);
    return result;
}
let targetMonth = getTargetMonth(mission, accumulatedMonth);
console.log('Будет достигнута цель за: ' + targetMonth);


budgetDay = Math.floor(accumulatedMonth/30);
console.log('Бюджет на день: ', budgetDay);


function getStatusIncome(b) {
    if (b > 1200 || b == 1200) {
        console.log('Слишком много денег!');
    } else if (b > 600 && b < 1200) {
        console.log('Средненько -_-');
    } else if ((b < 600 && b > 0) || b == 600) {
        console.log('Нищеброд ебаный!');
    } else if (b < 0 || b == 0) {
        console.log('Это пиздец');
    }    
}

getStatusIncome(budgetDay);

