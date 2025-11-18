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
type User = { name: string }
type Admin = User & { role: string }
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

### Type ব্যবহার  Union, API shapes, Utility Types

### প্রোডাক্টের স্ট্যাটাস ধরা যাক:

```ts
type ProductStatus = "in-stock" | "out-of-stock" | "pre-order"
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

