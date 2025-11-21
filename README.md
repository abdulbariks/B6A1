# Problem Solving with TypeScript and Interview Questions - Blog

## Problem 1:

Create a function **formatValue** that accepts a value which may be a **string**, **number**, or **boolean**, and returns the following based on the value type:

- If the input is a **string** → return the string in **uppercase**
- If the input is a **number** → return the number multiplied by **10**
- If the input is a **boolean** → return the **opposite value** (`true → false`, `false → true`)

### Requirements:

- You must write the correct type for the function parameter and the return type.
- You must use type checking to handle each case.

### Sample Input:

```ts
console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
```

### Sample Output:

```ts
HELLO;
50;
false;
```

## Problem 2:

Create a function **getLength** that accepts a value which may be a **string** or an **array**, and returns the **length** of the value.

- If the input is a **string** → return the number of characters.
- If the input is an **array** → return the number of elements.

### Requirements:

- You must write the correct type for the function parameter and the return type.
- You must use type checking to handle each case (`typeof` or `Array.isArray`).

### Sample Input:

```ts
console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
```

### Sample Output:

```ts
10;
4;
```

## Problem 3:

Create a `Person` class with `name` and `age` properties. Add a method `getDetails` that returns a string with the person's name and age.

### Requirements:

- You must use a constructor to initialize the properties.
- The `getDetails` method should return a string in the format: `"Name: [name], Age: [age]"`.

### Sample Input:

```ts
const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());
```

### Sample Output:

```ts
"Name: John Doe, Age: 30";
"Name: Alice, Age: 25";
```

## Problem 4:

Create a function **filterByRating** that accepts an array of items, where each item has the following properties:

- `title` (string)
- `rating` (number between 0 and 5)

The function should return a new array containing only the items with a rating of 4 or more.

### Requirements:

- You must write the correct type for the function parameter and the return type.
- Do not mutate the original array.

### Sample Input:

```ts
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));
```

### Sample Output:

```ts
[
  { title: "Book A", rating: 4.5 },
  { title: "Book C", rating: 5.0 },
];
```

## Problem 5:

Create a function **filterActiveUsers** that accepts an array of user objects. Each user object contains `id`, `name`, `email`, and `isActive` properties. The function should return a **new array** containing only the users whose `isActive` property is `true`.

### Requirements:

- You must write the correct type for the function parameter and the return type.
- Do not mutate the original array.
- Use type checking if necessary.

### Sample Input:

```ts
const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

console.log(filterActiveUsers(users));
```

### Sample Output:

```ts
[
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];
```

## Problem 6:

Define an interface `Book` with the following properties:

- `title` (string)
- `author` (string)
- `publishedYear` (number)
- `isAvailable` (boolean)

Then, create a function `printBookDetails` that accepts an object of type `Book` and prints its details to the console in the format: "Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]".

### Requirements:

- You must define the `Book` interface correctly.
- The `printBookDetails` function must accept an object that follows to the `Book` interface.

### Sample Input:

```ts
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
```

### Sample Output:

```
Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes
```

## Problem 7:

Create a function **getUniqueValues** that accepts two arrays and returns a new array containing only the unique values from both arrays, without any duplicates.

### Requirements:

- You must write the correct type for the function parameter and the return type.
- The function should handle arrays of strings or numbers.
- You are not allowed to use any built-in methods to solve this problem.

### Sample Input:

```ts
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
```

### Sample Output:

```ts
[1, 2, 3, 4, 5, 6, 7];
```

## Problem 8:

Create a function **calculateTotalPrice** that accepts an array of product objects. Each product object contains the following properties:

- `name` (string)
- `price` (number)
- `quantity` (number)
- **discount?**: optional number from **0–100**, representing a percentage discount

The function should return the **total price** of all products in the array, taking into account the discount for each product (if provided).
If the array is empty, return `0`.

### Requirements:

- You must write the correct type for the function parameter and the return type.
- Use array methods (`map`, `reduce`, etc.) to calculate the total.
- The total price of each product is calculated as: `(price * quantity)`.
- Correctly handle products with and without the `discount` property.

### Sample Input:

```ts
const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
```

### Sample Output:

```ts
127.5;
```

## 🎯 Interview Questions - Blog

### Blog Post (in Bangla):

1. What are some differences between interfaces and types in TypeScript?
2. What is the use of the `keyof` keyword in TypeScript? Provide an example.
3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.
4. What is the use of `enums` in TypeScript? Provide an example of a numeric and string enum.
5. Provide an example of using **union** and **intersection** types in TypeScript.

# Blog Post

1. What are some differences between interfaces and types in TypeScript?

## interface এবং type:

interface এবং type অনেক ক্ষেত্রে একই রকম হলেও, কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে যা একজন ডেভেলপারকে অবশ্যই জানা উচিত। আমি সেগুলো সুন্দরভাবে ব্যাখ্যা করবো, এবং শেষে একটি real-time project example দিয়ে ব্যাখ্যা করবো কোথায় কোনটি ব্যবহার করা বেশি সুবিধাজনক।

## Interface কী?

Interface হলো একটি অবজেক্টের স্ট্রাকচার ডিফাইন করার জন্য ব্যবহৃত হয়। এটি class বা object-এর জন্য সবচেয়ে উপযুক্ত।

### Example:

```ts
interface User {
  name: string;
  age: number;
}
```

## Types কী?

Type দিয়ে object shape ছাড়াও union, intersection, primitive alias অনেক কিছুই করা যায়। interface দিয়ে এমন union বা primitive alias তৈরি করা যায় না।

### Example:

```ts
type Status = "success" | "error" | "loading";
type ID = string | number;
```

### Interface Extends করা যায় খুব সহজে।

```ts
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}
```

### type দিয়েও extends করা যায়, কিন্তু syntax একটু আলাদা।

```ts
type User = { name: string };
type Admin = User & { role: string };
```

Interface Declaration Merging সাপোর্ট করে, কিন্তু Type করে না
এটি interface-এর সবচেয়ে বড় সুবিধা।কিন্তু type দিয়ে এমন করা যাবে না।
একই নামে type ডিফাইন করলে error হবে।

```ts
interface User {
  name: string;
}

interface User {
  email: string;
}
User = {
  name: string;
  email: string;
}
```

Type union ও intersection সাপোর্ট করে। interface-এ union করা যায় না।

```ts
type Shape = Circle | Square;
type Combined = A & B;
```

### Real-Time Example:

ধরুন আপনি একটি ই-কমার্স ওয়েবসাইট তৈরি করছেন। এখানে আপনার প্রয়োজন

- User profile structure
- Product structure
- API response types
- Status flags
- Union type

### এখন দেখুন কোথায় interface এবং কোথায় type বেশি উপযোগী।

### Interface ব্যবহার — Object Structure ও Class-এর জন্য

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

interface Customer extends User {
  address: string;
}

class CustomerModel implements Customer {
  id: number;
  name: string;
  email: string;
  address: string;

  constructor(data: Customer) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.address = data.address;
  }
}
```

### এখানে interface perfect কারণ:

- Object structure
- Extend করা সহজ
- Class-এর সাথে ব্যবহার সহজ

### Type ব্যবহার Union, API shapes, Utility Types

### প্রোডাক্টের স্ট্যাটাস ধরা যাক:

```ts
type ProductStatus = "in-stock" | "out-of-stock" | "pre-order";
```

### ডিসকাউন্ট প্রাইস থাকতে পারে বা নাও থাকতে পারে:

```ts
type Price = number | null;
```

### API Response:

```ts
type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

Product Type:
type Product = {
  id: number;
  title: string;
  price: Price;
  status: ProductStatus;
};
```

TypeScript-এ interface এবং type উভয়ই গুরুত্বপূর্ণ।
Interface বিশেষভাবে object, class এবং structure-এর জন্য উপযোগী।
Type বেশি versatile union, intersection, API response, primitive alias–এ অসাধারণ কাজ করে।

2. What is the use of the keyof keyword in TypeScript? Provide an example.

## keyof keyword

TypeScript-এর একটি বিশেষ বৈশিষ্ট্য হলো এর টাইপ সিস্টেম, যা ডেভেলপারদের আরও নিরাপদ এবং নির্ভুল কোড লেখায় সাহায্য করে। এই টাইপ সিস্টেমের একটি শক্তিশালী অংশ হলো keyof কীওয়ার্ড। অনেক নতুন ডেভেলপার TypeScript ব্যবহার শুরু করলেও keyof এর আসল শক্তি ও প্রয়োজনীয়তা সম্পর্কে ভালোভাবে জানে না। আজকের এই ব্লগে আমি দেখাবো keyof কী, কেন এটি ব্যবহার করা হয়, এবং real-time project এটি কীভাবে কাজে লাগে।

### keyof কী?

keyof হলো TypeScript-এর একটি অপারেটর, যা কোনো object type-এর সমস্ত property key-কে একটি union টাইপ হিসেবে রিটার্ন করে। সহজভাবে বললে যে অবজেক্টের key আছে, keyof সেগুলোকে string literal টাইপ বানিয়ে দেয়।

### Example:

```ts
type User = {
  name: string;
  age: number;
  email: string;
};
type UserKeys = keyof User;
```

এখন UserKeys হয়ে যাবে: "name" | "age" | "email" অর্থাৎ TypeScript এখন জানে, এই টাইপ ব্যবহার করলে key শুধু এই তিনটির একটি হতে পারবে।

### keyof ব্যবহার করার প্রধান সুবিধাগুলো হলো:

- Object-এর key গুলো dynamically access করতে সাহায্য করে
- যখন আমরা কোনো ফাংশন থেকে object-এর কোনো property পড়তে চাই, তখন keyof ব্যবহার করলে TypeScript নিশ্চিত করে যে ভুল key ব্যবহার করা যাবে না।
- কোড আরও টাইপ-সেফ এবং predictability বাড়ে
- এটি runtime error হওয়ার সম্ভাবনা কমায়।
- Reusable এবং Flexible ফাংশন তৈরি করা যায়
- একটি ফাংশন লিখে সেটি বিভিন্ন object-এর জন্য ব্যবহার করা যায়।
- Generic টাইপের সাথে দুর্দান্ত কাজ করে
- Generics + keyof → অত্যন্ত শক্তিশালী combination।

## Real-Time Example:

ধরুন আপনি একটি ই-কমার্স ওয়েবসাইট তৈরি করছেন। সেখানে একটি Product অবজেক্ট আছে:

```ts
type Product = {
  id: number;
  title: string;
  price: number;
  stock: number;
};
```

এখন আপনি এমন একটি ফাংশন তৈরি করতে চান, যা যে কোনো Product-এর যে কোনো property ডায়নামিকভাবে রিটার্ন করবে।এই ধরনের ফাংশন সাধারণভাবে করলে ভুল key দিলে runtime error হতে পারে।
কিন্তু TypeScript-এর keyof ব্যবহার করলে compile time-এই ভুল ধরা পড়ে যাবে। ফাংশনটি লিখি:

```ts
function getProductValue<T, K extends keyof T>(product: T, key: K): T[K] {
  return product[key];
}
```

### এখন এই ফাংশনটি পুরোপুরি টাইপ-সেফ।

```ts
const p: Product = {
  id: 101,
  title: "Wireless Headphone",
  price: 3500,
  stock: 15,
};
const priceValue = getProductValue(p, "price");
const titleValue = getProductValue(p, "title");
```

### এখানে কী ঘটছে?

keyof Product হলো "id" | "title" | "price" | "stock" । তাই getProductValue ফাংশনে ভুল key পাঠানো যাবে না। ফাংশনটি সঠিক টাইপ রিটার্ন করবে (string, number যা property অনুযায়ী)।
এটি TypeScript-কে আরও শক্তিশালী করে তোলে।

### কোথায় keyof বেশি ব্যবহৃত হয়:

- API Response Validation
- Dynamic Form Builder
- Search Filters (যেখানে key ডায়নামিক)
- Reusable Generic Utility Functions
- Mapping Object Keys
- Object Transformation Functions

TypeScript-এর keyof অপারেটর JavaScript অবজেক্টের কাঠামোকে আরও ভালোভাবে নিয়ন্ত্রণ করতে সাহায্য করে। এটি ডেভেলপারদের টাইপ-সেফ ও error-free কোড লিখতে সহায়তা করে। বড় অ্যাপ্লিকেশনে, বিশেষ করে ই-কমার্স, ড্যাশবোর্ড, CRM অ্যাপ্লিকেশনে keyof অত্যন্ত কাজে লাগে। এটি object-এর key-কে টাইপ হিসেবে ব্যবহার করে, ফলে ভুল key ব্যবহার করলে আগে থেকেই error পাওয়া যায়। তাই keyof TypeScript-এর সবচেয়ে শক্তিশালী টাইপ টুলগুলোর একটি।

3. Explain the difference between `any`, `unknown`, and `never` types in TypeScript.

TypeScript হচ্ছে JavaScript-কে আরও নিরাপদ ও টাইপ-সেফ করার একটি জনপ্রিয় superset। এর শক্তিগুলোর মধ্যে একটি হলো শক্তিশালী টাইপ সিস্টেম। কিন্তু নতুনরা প্রায়ই তিনটি বিশেষ টাইপ নিয়ে বিভ্রান্ত হয়—any, unknown, এবং never। এদের প্রতিটি আলাদাভাবে কাজ করে, এবং ভুলভাবে ব্যবহার করলে কোডে বাগ তৈরি হতে পারে।
আজকের এই ব্লগে আমরা সহজ ভাষায় বুঝব, any কী, unknown কী, এবং never কোথায় ব্যবহৃত হয়।

## any টাইপ

TypeScript-এ সবচেয়ে “ঢিলেঢালা” টাইপ হচ্ছে any। যখন আপনি কোনও ভেরিয়েবলের টাইপ সম্পর্কে কিছুই বলতে চাইছেন না বা TypeScript-এর টাইপ চেকিং বন্ধ করতে চান তখন any ব্যবহার করা হয়।

### Example:

```ts
let value: any = 10;
value = "Hello";
value = true;
```

এখানে value যেকোনো কিছু হতে পারে—number, string, boolean ইত্যাদি। এমনকি আপনি সেই ভেরিয়েবল দিয়ে যেকোনো অপারেশন চালাতে পারবেন, TypeScript কোনও ভুল দেখাবে না।

### সমস্যা

- টাইপ সেফটি হারিয়ে যায়
- বড় প্রোজেক্টে বাগ খুঁজে পাওয়া কঠিন হয়ে যায়
- ভুল অপারেশনও TypeScript ধরতে পারে না

তাই any শুধুমাত্র জরুরি পরিস্থিতিতে ব্যবহার করা উচিত, নইলে কোড অনিরাপদ হয়ে যায়।

## unknown টাইপ

unknown কে বলা হয় “safer any”। এটি যেকোনো টাইপের মান ধারণ করতে পারে, ঠিক যেমন any।

### Example:

```ts
let value: unknown = "Hello";
```

কিন্তু বড় পার্থক্য হলো, আপনি unknown টাইপের ভেরিয়েবলের ওপর সরাসরি অপারেশন চালাতে পারবেন না

```ts
// Error দেবে
value.trim();
```

TypeScript এখানে error দেবে, কারণ সে জানে না value আসলে string কিনা।
ব্যবহার করতে চাইলে আগে টাইপ চেক করতে হবে

```ts
if (typeof value === "string") {
  console.log(value.trim());
}
```

### কেন unknown ভালো

- টাইপ চেক না করলে কাজ করতে দেয় না
- কোড আরও নিরাপদ থাকে
- বাহ্যিক ডেটা (API response, user input) হ্যান্ডল করতে খুব উপকারী
- unknown হলো flexible কিন্তু নিরাপদ।

## never টাইপ

never টাইপ ব্যবহার হয় যখন কোনো ফাংশন কিছুও রিটার্ন করবে না। কারণ:

- ফাংশন কখনই শেষ হয় না
- সবসময় error throw করে
- infinite loop

### Example:

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function loopForever(): never {
  while (true) {}
}
```

### কোথায় দরকার হয়

- strict typing
- exhaustive checking
- switch-case এ ভুল ধরতে
- এমন ফাংশনে যেখানে নিশ্চিত যে কোনো রিটার্ন হবে না

any, unknown, এবং never TypeScript শেখার সময় অত্যন্ত গুরুত্বপূর্ণ তিনটি টাইপ।

- any ব্যবহার করা সহজ কিন্তু অনিরাপদ।
- unknown নিরাপদ বিকল্প।
- আর never সেইসব পরিস্থিতি বোঝায় যেখানে কোনো মান রিটার্নই হবে না।

এই পার্থক্যগুলো ভালোভাবে বুঝতে পারলে আপনার TypeScript কোড আরও নিরাপদ, শক্তিশালী এবং বাগমুক্ত হবে।
