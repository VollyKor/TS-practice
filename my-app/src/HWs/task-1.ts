let message1 : string = "несколько букв";
console.log(message1.slice(1));
console.log("task-2");

const total : number = 100;
const ordered : number = 140;
let message2 : string = "Заказ оформлен, с вами свяжется менеджер";
console.log(total >= ordered ? message2 : (message2 = "На складе недостаточно твоаров!"));
console.log(message2);
console.log('task-3');

let message3 = prompt ('Введите пароль');

const ADMIN_PASSWORD = 'jqueryismyjam';

// console.log(message);

// if (message === null) {
//     message = 'Отменено пользователем!'
// }
// else if (message === ADMIN_PASSWORD) {
// message = 'Добро пожаловать!'
// }
// else {
//     message = 'Доступ запрещен, неверный пароль!'
// }

message3 === null ?  message3 = 'Отменено пользователем!' :  message3 === ADMIN_PASSWORD ? message3 = 'Добро пожаловать!' :  message3 = 'Доступ запрещен, неверный пароль!' ;
console.log(message3);

console.log('task-4');

let credits = 23580;

const pricePerDroid = 3000;
let totalPrice: number = 0;
let droidQuantity = prompt ('Сколько дроидов вы хотите купить?');

console.log( 'Количество дронов', droidQuantity);

droidQuantity === null ? console.log('Отменено пользователем!') : totalPrice = pricePerDroid * Number(droidQuantity) ;

console.log('total Price' , totalPrice);

function methodName () {
  return   totalPrice > credits ?  console.log('Недостаточно средств на счету') : (credits -= totalPrice ,console.log(`Вы купили ${droidQuantity} дроидов, на счету осталось ${credits} кредитов.`) )
}

export {methodName}