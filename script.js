let money;
let income;
let addExpenses;
let deposit;
let misson;
let period;

console.log('Hardlesson 3');

let lang = prompt('Укажите язык', 'ru');
console.log("Вы выбрали язык: ");

switch (lang) {
    case 'ru':
        console.log('Русский');
        break;
    case 'en':
        console.log('English');
        break;
    default:
        console.log('Хз чо за язык');
        break;
}

if (lang == 'ru') {
    console.log('Пн Вт Ср Чт Пт Сб Вс');
} else if ( lang == 'en') {
    console.log('Mn Tu Wd Th Fr St Su');
}
