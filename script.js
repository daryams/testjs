'use strict'; 

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money, income, addExpenses, deposit, mission, period, budgetDay;

function start() {
    do {
        money = +prompt('Ваш месячный доход?');
    } while (!isNumber(money));
}

start();
console.log('Месячный доход: ', money);

addExpenses = prompt('Возможные расходы через запятую:', 'sex, drugs, rocknroll');
deposit = confirm('А депозит есть?');

let expensesQuest1 = 'Введи обязательную статью расхода:';
let expensesQuest2 = 'Во сколько это обойдется?';


function getExpensesMonth () {
    let sum, i = 0;
    let expenses = [];

    for (let i = 0; i < 2; i++) {
        prompt(expensesQuest1);
        
        do {  
            expenses[i] = prompt(expensesQuest2);
        } while (!isNumber(expenses[i]));
        
        sum += Number(expenses[i]);
    }        
    return sum;
    
}

let expensesMonth = getExpensesMonth();
console.log('Обязательные расходы: ' + expensesMonth);

function getAccumulatedMonth(inc, exp) {
    let result = Number(inc) - Number(exp);
    return result;    
}
let accumulatedMonth = getAccumulatedMonth(money, expensesMonth);
console.log('Накопления за месяц: ' + accumulatedMonth);

function getTargetMonth(m, a) {
    let result = +Math.ceil(m / a);
    return result;
}
let targetMonth = getTargetMonth(mission, accumulatedMonth);

if (targetMonth > 0) {
    console.log('Будет достигнута цель за: ' + targetMonth);
} else {
    console.log('Никаких тебе достижений');
}



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

