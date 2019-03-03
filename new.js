'use strict';
let money, time;
money = +prompt("Ваш бюджет на месяц?", '');
time = +prompt("Введите дату в формате YYYY-MM-DD", '');
let appData = {
    Budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
        saving: false             
};
let questions1, questions2, questions3, questions4;
questions1 = prompt('Введите обязательную статью расходов в этом месяцеэ', '');
questions2 = prompt('Во сколько обойдется?', '');
questions3 = prompt('Введите обязательную статью расходов в этом месяцеэ', '');
questions4 = prompt('Во сколько обойдется?', '');

appData.expenses.questions1 = questions2;
appData.expenses.questions3 = questions4;
alert(appData.Budget / 30);