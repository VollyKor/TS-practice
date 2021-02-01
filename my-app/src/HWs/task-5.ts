
interface IUser {
    name: string;
    age: number;
    followers: object[];
    getInfo(): string
}

class User implements IUser {
    public name;
    public age;
    public followers;

  constructor (name: string, age: number, followers: object[]) {
    this.name = name ; 
    this.age = age ;
    this.followers = followers ;
  }
    getInfo (): string{
     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    }
}

const Vasya = new User('Vasya', 18, [{ name: 'Petr' }, { name: 'Vova' }])

export { User, Vasya }


Vasya.getInfo()