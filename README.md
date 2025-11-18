# Type ও Interface এর মাঝে পার্থক্য ➖

## ১. Declaration Style

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

২. Extend করার নিয়ম

Interface extends Interface


interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

Type extend-equivalent

type Person = { name: string };
type Employee = Person & { salary: number };

3. Merge হওয়া

Interface merge হয়

interface User {
  name: string;
}

interface User {
  age: number;
}
 Final User = { name: string; age: number }

Type merge হয় না---->
type User = { name: string };
type User = { age: number };


4. Usage Flexibility

Interface (object-focused)

interface Car {
  model: string;
}

Type (more flexible)

type ID = string | number;
type Point = [number, number];
type Add = (a: number, b: number) => number;


5. Function ও Union Type

Interface দিয়ে union define করা যায় না

Type দিয়ে করা যায়

type Status = "success" | "error" | "loading";




// ------------------------------------------------->





```
