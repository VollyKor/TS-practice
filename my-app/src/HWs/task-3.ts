import { string } from "prop-types";
import { Interface } from "readline";

let message = '';

interface UserConfig {
    [key: string]: string | number | boolean | string[] | undefined
    age: number;
    hobby?: string|string[];
    name: string;
    premium: boolean;
    mood?: string;
    ['full time']?: boolean;
}

const user: UserConfig = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
    premium: true,
};
 
 user.mood = 'happy';
 user['full time'] = true ; 
 user.hobby = 'skydiving'
 user.premium = false ;
const keys = Object.keys(user);
// Write code under this line
for (const key of keys) {
    message += `${key} : ${user[key]} \n` 
    console.log(message);
    
}

interface Employee {
    [key: string]: number;
}

type EmployeeConfig = (employees: Employee) => string;
type EmployeeConfig2 = (employees: Employee) => number;

const findBestEmployee : EmployeeConfig = (employees)  => {
    let completeTasks = 0;
    let bestEmployee = ''
    for (const key in employees) {
        if (employees[key] > completeTasks ) {
            completeTasks = employees[key]
            bestEmployee = key;
        }
    }
    
    return bestEmployee;
  };

  const developers: Employee = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
}; 
  
const countTotalSalary: EmployeeConfig2 = function(employees) {
    let totalSalary = 0 ;
    const salaryes = Object.values(employees)
    for (const salary of salaryes) {
        totalSalary += salary ;
    }
    return totalSalary;
};
  
type Prop = 'name' | 'price' | 'quantity'

function getAllPropValues (array: [], prop:Prop ) {
    let propertyValues = []
    for (const object of array) {
        const newArray = Object.entries(object)

        for (const array of newArray) {
            if (prop === array[0]){
                propertyValues.push(array[1])
            }
        }
    }
    return propertyValues
  }
  
  // Объекты и ожидаемый результат

interface Products {
    name: string;
    price: number;
    quantity: number;
}
type ProductArray = Products[]
type ProductsType = 'Радар' | 'Сканер' | 'Дроид' | 'Захват'

  const products:ProductArray = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
]; 
  

function calculateTotalPrice (array: Products[], prop: ProductsType) {
    let totalPrice = 0;
    for (const object of array) {
            if (object.name === prop) {
                console.log(object);
                totalPrice += object.price * object.quantity;
            }
    }
    return totalPrice;
  }

export{findBestEmployee, developers, countTotalSalary, getAllPropValues, products, calculateTotalPrice }