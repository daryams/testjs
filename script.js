'use strict';

console.log('Hardlesson 3');


//part1
let lang = prompt('Укажите язык', 'ru');

console.log("Switch \/");
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

console.log("If Else \/");
if (lang == 'ru') {
    console.log('Пн Вт Ср Чт Пт Сб Вс');
} else if ( lang == 'en') {
    console.log('Mn Tu Wd Th Fr St Su');
}

console.log("Array \/");
const langs = [
                ['ru', 'Пн Вт Ср Чт Пт Сб Вс'],
                ['en', 'Mn Tu Wd Th Fr St Su']
            ];
for (let n = 0; n < langs.length; n++) {
    lang == langs[n][0] ? console.log(langs[n][1]) : console.log('');
};

lang == langs[0][0] ? console.log(langs[0][1]) : console.log(langs[1][1]);




//part2
let namePerson = prompt('Напиши имя:', 'Артём');

// switch (namePerson) {
//     case 'Артём':
//         console.log('Директор нах');
//         break;
//     case 'Максим':
//         console.log('Препод');
//         break;    
//     default:
//         console.log('Тупой студент');
//         break;
// }

let text;

namePerson == 'Артём' ? text = 'Директор нах' : namePerson == 'Максим' ? text = 'Препод' : text = 'Тупой студент';

console.log(text);  