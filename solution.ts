type FormatValueType = string | number | boolean;

const formatValue = (value: FormatValueType): FormatValueType => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

type GetLengthType = number[] | string;

const getLength = (input: GetLengthType): number => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const result: (string | number)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let alreadyExisst = false;
    for (let j = 0; j < result.length; j++) {
      if (arr1[i] === result[j]) {
        alreadyExisst = true;
        break;
      }
    }
    if (!alreadyExisst) result[result.length] = arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    let alreadyExisst = false;
    for (let j = 0; j < result.length; j++) {
      if (arr2[i] === result[j]) {
        alreadyExisst = true;
        break;
      }
    }
    if (!alreadyExisst) result[result.length] = arr2[i];
  }

  return result;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  }

  return products.reduce((total, product) => {
    const discount = product.discount ? product.discount : 0;
    const discountPrice = product.price * (1 - discount / 100);
    return total + discountPrice * product.quantity;
  }, 0);
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

calculateTotalPrice(products);
