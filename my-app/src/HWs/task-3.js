 // Write code under this line
  class Storage {
    constructor (items) {
      this.items = items;
    }

    getItems () {
      return this.items
    }

    addItem(item){
      return this.items.push(item)
    }

    removeItem(item){
      if (this.items.includes(item)) {
        const indexItem = this.items.indexOf(item);
        return this.items.splice(indexItem, 1)
      }
    }
  }



console.log(typeof Storage);
// 'function'

const goods = [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

