'use strict'; //строгий режим
//Раздел 2:Основы JS
let number=5;
const leftBorderWidth=1;

number=10;
console.log(number);

const obj ={
    a:50
};
obj.a=10;
console.log(obj);
/*
{
    let result=50;
}
console.log(result);
*/
const vehicleBodyWidth = 5000;
const vehicleBodyLength = 4000;
console.log('Ширина кузова автомобиля:' + vehicleBodyWidth + ', длина' + vehicleBodyLength);

// Request
// Data
// response 
// PascaleCase - стиль для азвания классов в js

//snake_case

//UPPER_SNAKE_CASE - стиль обозначения констант, которые нельзя менять
const COLOR_RED = '#F00';

                                        //11.классификация типов данных в JS
/*Существует 8 типов данных:
простые типы(примитивы):
числа 1,2,3
Строки 'string'
boolean true/false
null - что-то просто не существует
underfined - что-то существует, но значения не имеет
Symbol
BigInt - тип данных который отображает большие числа

комплексные типы (объекты):
1.специальные:
массивы[]
функции
даты
регулярные выражения
ошибки
2.оычные:
*/


let numder = 4.6;
console.log(-4/0);
console.log('string'*9); //NaN (Not a nomder)

const persone = 'Alex';

const bool = true;

//console.log(something); //=>Null - не существует

let und;
console.log(und); //=>undefined - существует, но не имеет значения (пустая коробка)

//ОБЪЕКТ это структура хранения данных в парном формате, ключ:значение
const objTwo = {    //объект может содержать какие то данные, которые называются СВОЙСТВАМИ ОБЪЕКТА
    name:'Andrei',  //и какие то действия, которые называются МЕТОДАМИ
    age: 25,        //СВОЙСТВО ОБЪЕКТА записано в формате ключ:значение
    isMarried: false,            
};

console.log(objTwo.name);

//массив используется для хранения данных, которые идут строго по парядку
//              1           2        3      4         5   6 - ключи объекта массив это номера по порядку
let arrOne = ['plum.pmg', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arrOne[1]); //=> orange.jpg
//массив это частный случай объекта

                    //12.Разница между объектами и массивами и не очевидные синтаксические возможности
const arrTwoMas = ['a', 'b', 'c'];
const arrTwoObj = {
    a:'a',
    b:'b',
    c:'c'
};
console.log(arrTwoMas[1]);
console.log(arrTwoObj.b);
//console.log(arrTwoObj['b']); //способ через [] скобки для кириллицы или цифр чтобы не было ошибок
                             //обязательно ставить ковычки '' иначе JS обудамает, что обращаюсь к переменной

arrTwoObj.d= '1234';
console.log(arrTwoObj.d);

const storeName = 'Ozon';
const storeDescription = {
    budget:10000,
    employees: ['Andrei', 'Sergei', 'Olga'],
    products: {
        cup:10,
        pansel:5,
    },
    open:true    
};
                            //13. Простое общение с пользоватилем
//alert('Hello'); //всплывающая подсказка

//const result = confirm('Are you here?');
//console.log(result);
/*
const answer = +prompt('Вам есть 18?', '18');
console.log(answer+5); //вся информация, которая приходит от пользователя это строка
*/

const answers = [];

//команды prompt confirm alert тестировать только внутри браузера, консоль в VScode их не понимает

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', ''); 
// answers[2] = prompt('Сколько вам лет?', '');

//document.write(answers);

console.log(typeof(answers));

                            //14.Интерполяция
const category = 'toys';
//console.log('https://someurl.com/' + category); //соеденение строк приёмом КОНКАТИНАЦИЯ
console.log(`https://someurl.com/${category}/5`); //соеденение строк приёмом ИНТЕРПОЛЯЦИЯ

const user = 'Ivan';
alert(`hello, ${user}`);
                            //15.Операторы в JS

console.log('arr' + '- object');
console.log(4 + '5');
//console.log(4 + +'5'); //если перед строкой поставить +, то она превратится в число
                        //унарный +, это + который ставится перед чем то
let incr = 10,
    decr = 10;

//incr++; //оператор инкремент (увеличения на 1) Форма записи после значения - ПОСТФИКСНАЯ
//decr--; //оператор декремент (уменьшения на 1)

//++incr; //форма запеси перед значением - ПРЕФИКСНАЯ
//--decr;

console.log(incr++); // ПОСТФИКСНАЯ форма сначала возвращает старое значение, потом изменяет его
console.log(decr--);

console.log(++incr); // ПРЕФИКСНАЯ форма сразу возвращает новое значение
console.log(--decr);

console.log(5%2); //оператор % возвращает остаток от деления двух чисел

//операторы сравнения
console.log(2*4 == 8);     
console.log(2*4 == '8');   //оператор сравнения
console.log(2*4 === '8');  //оператор строгого сравнения

//логические операторы
//&&  //оператор и работает только тогда когда два и больше подопотных являются правдивыми выражениями
//||  //оператор или работает только тогда когда один из этих вариантов будет правдивым

const isChecked = true,
      isClose = false;
console.log(isChecked && isClose);

const isChecked = true,
      isClose = false;
console.log(isChecked || isClose);

const isChecked = true,
      isClose = false;
console.log(!isChecked || isClose);

console.log(2+2*2 !='6'); // != - оператор 'не равно'
console.log(2+2*2 !=='6'); // != - оператор строгого сравнения 'не равно'

                            //16.Система контроля версий GIT и сервис GitHub
//Shift + правая кн.м. => открыть окно powershell здесь => git init - команда инициализации Git
 //КОМИТ - контрольная точка в git 










