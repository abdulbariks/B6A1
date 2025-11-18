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
