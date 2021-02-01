// Класс со статическими свойствами и методами
class Calc {
    // Класс-калькулятор для двух аргументов
    constructor() {}
  
    // Метод как замена свойству
    static get PI() {
      return 3.14;
    }
  
    // Статический метод +
    static add(...args) {
      return args.reduce((acc, next) => acc + next, 0);
    }
  
    // Статический метод *
    static mult(...args) {
      return args.reduce((acc, next) => acc * next, 1);
    }
  }
  
  console.log(Calc.PI); // 3.14
  console.log(Calc.add(2, 3, 4)); // 9
  console.log(Calc.mult(12, 3, 4)); // 144