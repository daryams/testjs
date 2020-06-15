'use strict'; 

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let budgetDay;


const appData = {
    income: 'freelance',
    money: 100000,
    deposit: false,
    mission: 1000000,
    period: 0,
    expenses: {},
    addExpenses: [],
    expensesMonth: 0,
    budgetMonth: 0,
    budgetDay: 0,
    targetMonth: 0,
    asking: function() {
        
        do {
            appData.money = +prompt('Ваш месячный доход?');
        } while (!isNumber(appData.money));

        let addExpenses = prompt('Перечислите возможные расходы:', 'sex, drugs, rocknroll');
        appData.addExpenses = addExpenses.toLowerCase().split(',');

        appData.deposit = confirm('А депозит есть?');

        for (let i = 0; i < 2; i++) {
            let exptext = prompt('Введи обязательную статью расхода:');            
            
            do {  
                appData.expenses[exptext] = prompt('Во сколько это обойдется?');
            } while (!isNumber(appData.expenses[exptext]));            
        }    
    },
    
    getExpensesMonth: function () {
        let sum=0;
        for (let exp in appData.expenses) {
            sum += Number(appData.expenses[exp]);
        }        
        this.expensesMonth = sum;
        return sum;
    },  
    getBudgetMonth: function () {
        this.budgetMonth = Number(appData.money) - Number(appData.getExpensesMonth());
        this.budgetDay = Math.floor(this.budgetMonth/30);
    },
    getTargetMonth: function () {
        this.targetMonth = Number(Math.ceil(this.mission / this.budgetMonth));
    },
    getStatusIncome: function () {
        let b = this.budgetDay;
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
}

appData.asking();
appData.getExpensesMonth();
appData.getBudgetMonth();
appData.getTargetMonth();
console.log(appData);

console.log('Бюджет на день: ', appData.budgetDay);

if (appData.targetMonth > 0) {
    console.log('Твоя цель будет достигнута за: ' + appData.targetMonth + ' месяцев');
} else if (appData.targetMonth <= 0){
    console.log('Никаких тебе достижений');
}

appData.getStatusIncome();

