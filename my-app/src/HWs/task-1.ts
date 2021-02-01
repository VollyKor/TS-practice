// let message1 : string = "несколько букв";
// console.log(message1.slice(1));
// console.log("task-2");

// const total : number = 100;
// const ordered : number = 140;
// let message2 : string = "Заказ оформлен, с вами свяжется менеджер";
// console.log(total >= ordered ? message2 : (message2 = "На складе недостаточно твоаров!"));
// console.log(message2);
// console.log('task-3');

// let message3 = prompt ('Введите пароль');

// const ADMIN_PASSWORD = 'jqueryismyjam';

// message3 === null ?  message3 = 'Отменено пользователем!' :  message3 === ADMIN_PASSWORD ? message3 = 'Добро пожаловать!' :  message3 = 'Доступ запрещен, неверный пароль!' ;
// console.log(message3);

// console.log('task-4');

// let credits = 23580;

// const pricePerDroid = 3000;
// let totalPrice: number = 0;
// let droidQuantity = prompt ('Сколько дроидов вы хотите купить?');

// console.log( 'Количество дронов', droidQuantity);

// droidQuantity === null ? console.log('Отменено пользователем!') : totalPrice = pricePerDroid * Number(droidQuantity) ;

// console.log('total Price' , totalPrice);

// function methodName () {
//   return   totalPrice > credits ?  console.log('Недостаточно средств на счету') : (credits -= totalPrice ,console.log(`Вы купили ${droidQuantity} дроидов, на счету осталось ${credits} кредитов.`) )
// }

// const countryName = "ЧИЛнрИ";

// const CANCELED_BY_USER : string = "Отменено пользователем!";
// const NO_DELIVERY: string = "В выбранную страну доставка недоступна.";
// const CHINA = "Китай";
// const AUSTRALIA = "Австралия";
// const INDIA = "Индия";
// const JAMAICA = "Ямайка";
// let message;
// let price = 0;
// let country = "";
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase() + countryName.toLowerCase().slice(1); // Write code on this line
//   switch (country) {
//     // Write code under this line

//     case CHINA:
//       price = 100;
//       break;
//     case AUSTRALIA:
//       price = 170;
//       break;
//     case INDIA:
//       price = 80;
//       break;
//     case JAMAICA:
//       price = 120;
//       break;
//     default:
//       message = NO_DELIVERY;
//   }
// }
// console.log(message);

// if (message !== NO_DELIVERY) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);

// console.log('task-6');

// вариант через for

// let input;
// let total = 0;

// for (input ; input !== null ; total += Number(input)) {

// input = prompt ('Введите число');

//   if (Number(isNaN(input))) {
//     alert ('Было введено не число, попробуйте еще раз');
//     input = 0;
//     continue;
//   } 
// }

// alert(`Общая сумма чисел равна ${total}`);

// Вариант через while

let input : any;
let total : number = 0;

while (input !== null ) {
  input = prompt ('Введите число');

  if (Number(isNaN(input))) {
        alert ('Было введено не число, попробуйте еще раз');
        input = 0;
        continue;
      } 

  total += Number(input)
}

alert(`Общая сумма чисел равна ${total}`);

export {}