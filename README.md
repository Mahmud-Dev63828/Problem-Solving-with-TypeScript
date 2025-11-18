# Type ও Interface এর মাঝে পার্থক্য ➖

## 1. Declaration Style

**Interface**

```ts
interface User {
  name: string;
  age: number;
}

type User = {
  name: string;
  age: number;
};
```

২. Extend করার নিয়ম

Interface extends Interface

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

Type extend-equivalent

type Person = { name: string };
type Employee = Person & { salary: number };
```

## 3. Merge হওয়া

Interface merge হয়

```ts
interface User {
  name: string;
}


interface User {
  age: number;
}
 Final User = { name: string; age: number }

```

# Type merge হয় না---->

```ts
type User = { name: string };
type User = { age: number };
```

# 4. Usage Flexibility

Interface (object-focused)

```ts
interface Car {
  model: string;
}

Type (more flexible)

type ID = string | number;
type Point = [number, number];
type Add = (a: number, b: number) => number;

```

# 5. Function ও Union Type

Interface দিয়ে union define করা যায় না

Type দিয়ে করা যায়

```ts
type Status = "success" | "error" | "loading";
```

// ------------------------------------------------->

# keyof

## keyof কোনো object type এর সব key কে একটি union type আকারে রিটার্ন করে।

Example

```ts
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

keyof User;

type UserKeys = keyof User;

const key: UserKeys = "age";
const key2: UserKeys = "email";

```

keyof User object এর property নামগুলো নিয়ে union তৈরি করে:

```ts
"name" | "age" | "isAdmin";
```

শুধু এই ভ্যালুগুলোই variable হিসেবে ব্যবহার করা যাবে।
