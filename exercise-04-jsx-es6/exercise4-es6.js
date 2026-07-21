/**
 * Exercise 4 — Using ES6 and JSX (phần ES6)
 *
 */

//DATA
var people = [
  { name: "Jack", age: 50 },
  { name: "Michael", age: 9 },
  { name: "John", age: 40 },
  { name: "Ann", age: 19 },
  { name: "Elisabeth", age: 16 },
];

const isTeenager = (p) => p.age >= 10 && p.age <= 20;

var array = [1, 2, 3, 4];

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};

//BÀI TẬP

// Bài 1: Find the first person is teenager (age >= 10 and age <= 20)
console.log("Bài 1 — First teenager (find):", people.find(isTeenager));

// Bài 2: Find all persons that are teenagers
console.log("Bài 2 — All teenagers (filter):", people.filter(isTeenager));

// Bài 3: Check if every person is teenager → true/false
console.log("Bài 3 — Every is teenager? (every):", people.every(isTeenager));

// Bài 4: Check if any person is teenager → true/false
console.log("Bài 4 — Any is teenager? (some):", people.some(isTeenager));

// Bài 5: Reduce — sum of array [1, 2, 3, 4] (arrow function)
const sum = array.reduce((acc, n) => acc + n, 0);
console.log("Bài 5 — Sum (reduce + arrow):", sum);

// Bài 6: Reduce — product of array [1, 2, 3, 4] (arrow function)
const product = array.reduce((acc, n) => acc * n, 1);
console.log("Bài 6 — Product (reduce + arrow):", product);

// Bài 7: Print the name of each company using forEach
console.log("Bài 7 — Company names (forEach):");
companies.forEach((c) => console.log(" -", c.name));

// Bài 8: Print the name of each company that started after 1987
console.log(
  "Bài 8 — Started after 1987:",
  companies.filter((c) => c.start > 1987).map((c) => c.name),
);

// Bài 9: Retail companies — increment start by 1, print name/category/start/end
const retail = companies
  .filter((c) => c.category === "Retail")
  .map((c) => ({ ...c, start: c.start + 1 }));
console.log("Bài 9 — Retail (start + 1):");
retail.forEach((c) => {
  console.log(
    `  name: ${c.name}, category: ${c.category}, start: ${c.start}, end: ${c.end}`,
  );
});

// Bài 10: Sort companies by end date ascending
const sortedByEnd = [...companies].sort((a, b) => a.end - b.end);
console.log(
  "Bài 10 — Sorted by end (asc):",
  sortedByEnd.map((c) => `${c.name} (${c.end})`),
);

// Bài 11: Sort ages array descending
console.log(
  "Bài 11 — Ages desc:",
  [...ages].sort((a, b) => b - a),
);

// Bài 12: Sum all ages using reduce
console.log(
  "Bài 12 — Sum ages:",
  ages.reduce((acc, age) => acc + age, 0),
);

// Bài 13: Object from companies[0] (name, category) + method print — destructuring
const { name, category } = companies[0];
const companyInfo = {
  name,
  category,
  print() {
    console.log(this.name);
  },
};
console.log("Bài 13 — companyInfo:", {
  name: companyInfo.name,
  category: companyInfo.category,
});
companyInfo.print();

// Bài 14: Function takes unknown number of number args → return their sum
const sumNumbers = (...nums) => nums.reduce((a, n) => a + n, 0);
console.log("Bài 14 — sumNumbers(1,2,3,4,5):", sumNumbers(1, 2, 3, 4, 5));

// Bài 15: Function takes unknown args of any type → array; if arg is array, flatten it
const collectArgs = (...args) => {
  const result = [];
  args.forEach((arg) => {
    if (Array.isArray(arg)) result.push(...arg);
    else result.push(arg);
  });
  return result;
};
console.log(
  'Bài 15 — collectArgs(1, [2, 3], "a", [true]):',
  collectArgs(1, [2, 3], "a", [true]),
);

// Bài 16: Destructuring property street from person
const { street } = person.address;
console.log("Bài 16 — street:", street);

// Bài 17: Function that every call returns a number incrementing from 0
const createIncrementer = () => {
  let n = -1;
  return () => ++n;
};
const next = createIncrementer();
console.log("Bài 17 — Counter:", next(), next(), next()); // 0 1 2

// Bài 18: Parse query parameters of a URL → object key/value
const parseQueryParams = (url) => {
  const q = url.includes("?") ? url.split("?")[1] : "";
  if (!q) return {};
  return q.split("&").reduce((obj, pair) => {
    const [key, value = ""] = pair.split("=");
    if (key) obj[decodeURIComponent(key)] = decodeURIComponent(value);
    return obj;
  }, {});
};
console.log(
  "Bài 18 — parseQueryParams:",
  parseQueryParams("https://example.com/page?name=Ann&age=19&city=Hanoi"),
);

// Bài 19: Create classes (Person + Student extends Person)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `Hi, I'm ${this.name}, ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  introduce() {
    return `${super.introduce()} Major: ${this.major}.`;
  }
}

const s = new Student("Ann", 19, "Software Engineering");
console.log("Bài 19 — Class Student:", s.introduce());

// Bài 20: Promise — random number > 5 → success; <= 5 → "Error"
console.log("Bài 20 — Promise:");
const randomNumberPromise = () =>
  new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10) + 1;
    if (num > 5) resolve(num);
    else reject("Error");
  });

randomNumberPromise()
  .then((num) => console.log("Success, number > 5:", num))
  .catch((err) => console.log(err));
