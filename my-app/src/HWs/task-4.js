 // Write code under this line
  class StringBuilder {
    constructor (value){
      this._value = value
    }

    get value() {
      return this._value
    }

    // set value(str) {
    //   return this._value + str
    // }


    append(str){
      return this._value += str
    }

    prepend(str){
      return this._value = str + this._value
    }

    pad (str) {
      this.append(str)
      this.prepend(str)
      return this.value 
    }

  }

console.log(typeof StringBuilder);
// 'function'


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
