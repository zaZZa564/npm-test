// подключение модуля
const CC = require('currency-converter-lt');

// создание экземпляра конвертера
let currencyConverter = new CC();

// использование
currencyConverter.from("USD").to("EUR").amount(100).convert;
console.log(currencyConverter)