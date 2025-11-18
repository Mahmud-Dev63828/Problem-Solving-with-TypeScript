Type ও Interface এর মাঝে পার্থক্য ➖
১. Declaration Style

Interface :-

interface User {
name: string;
age: number;
}

Type :-

type User = {
name: string;
age: number;
};

২. Extend করার নিয়ম

Interface extends Interface :-

interface Person {
name: string;
}

interface Employee extends Person {
salary: number;
}

Type extend-equivalent :-

type Person = { name: string };
type Employee = Person & { salary: number };

৩. Merge হওয়া

Interface merge হয় :-

interface User {
name: string;
}
interface User {
age: number;
}

Final User = { name: string; age: number }

Type merge হয় না :-

type User = { name: string };
type User = { age: number };

৪. Usage Flexibility

Interface (object-focused) :-

interface Car {
model: string;
}

Type (more flexible) :-

type ID = string | number;
type Point = [number, number];
type Add = (a: number, b: number) => number;

৫. Function ও Union Type

Interface দিয়ে সাধারণত করা যায় না :-

Interface দিয়ে union define করা যায় না

Type দিয়ে সহজেই করা যায় :-

type Status = "success" | "error" | "loading";

<!-- -------------------------------------------------------------- -->

keyof কীওয়ার্ডটি কোনো object type এর সবগুলো key কে একটি union type হিসেবে return করে।

মানে, একটি object type-এর property নামগুলোকে টাইপ হিসেবে পাওয়া যায়।

Example-->
type User = {
name: string;
age: number;
isAdmin: boolean;
};

keyof User → "name" | "age" | "isAdmin"
type UserKeys = keyof User;

const key: UserKeys = "age";
const key2: UserKeys = "email";

Explanation

keyof User লিখলে TypeScript এই object-এর key গুলো দেখে এবং তৈরি করে:

"name" | "age" | "isAdmin"

এগুলো এখন একটি union type, তাই শুধু এই ৩টি ভ্যালুর যেকোনো একটি variable এ assign করা যাবে।
