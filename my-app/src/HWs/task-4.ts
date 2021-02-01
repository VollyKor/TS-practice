type FnIndex= (element: number, index: number)=> number

const addIndex:FnIndex  = (element, index) => (element += index);
// Write code under this line
const subIndex: FnIndex = (element, index) => (element -= index);

type Cb = (element: number, index: number) => number

function mapArray(array: number[], cb: Cb) {
    const numbers: number[] = [];
    
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    numbers[i] = cb(element, index);
  }
  return numbers;
}
type IsUniq = ( element: number, index: number, array: number[])=> boolean

const isUniq: IsUniq = (element, index, arrb) => arrb.indexOf(element) === index;
const isEven = (element: number) : boolean => element % 2 === 0;

type Cb2 = (element: number, index: number, array: number[]) => number

function filterArray(array: number[], cb: Cb2) {
  const numbers: number[] = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
console.log(cb (element, index, array));
    if (cb (element, index, array)) {
      numbers.push(element);
    }
  }
  return numbers;
}

const arr  = [1,2,3,4,5,1,2,5];

interface Account {
    owner: string;
    balance: number;
    discount: number;
    orders: string[];
    changeDiscount(value: number): void;
    showOrders(): string[];
    addOrder(cost: number, orderName: string): void;
}

const account: Account = {
    owner: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['order-1', 'order-2', 'order-3'],
    changeDiscount(value) {
      this.discount = value; // Write code in this line
    },
    showOrders() {
      return this.orders; // Write code in this line
    },
    addOrder(cost, order) {
      this.balance -= cost; // Write code in this line
      this.orders.push(order); // Write code in this line
    },
  };

export {addIndex, subIndex, mapArray, arr, isUniq , isEven , filterArray, account}