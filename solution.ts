function formatValue(value: string | number | boolean){
if(typeof value === "string"){
    return value.toLocaleUpperCase()
}
if(typeof value === "number"){6
    return value*10
}
if(typeof value === "boolean"){
    return !value
}
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(false));



function getLength(value: string | number[] | string[]){

    if (typeof value === "string") {
        return value.length
    }

    if (Array.isArray(value) ) {
        return value.length
    }
}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));


class Person {
  name: string;
  age: number;
  constructor(name: string, age:number){
    this.name=name;
    this.age = age;
  }
  getDetails(){
    return `'Name : ${this.name}, Age: ${this.age}'`
  }

}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());