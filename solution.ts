function formatValue(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toLocaleUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
}

function getLength(value: string | any[]) {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }
}
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name : ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

function getUniqueValues(arr1: any[], arr2: any[]): any[] {
  const result: any[] = [];
  function existsValue(value: any): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!existsValue(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!existsValue(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      const total = product.price * product.quantity;
      if (product.discount) {
        return total * (1 - product.discount / 100);
      }
      return total;
    })
    .reduce((acc, curr) => acc + curr, 0);
}
