let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          {
            school_name: "ABC Primary School",
          },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          {
            school_name: "ABC Secondary School",
          },
          { location: "St. Luis" },
        ],
      },
    ],
  },
};
// console.log(data.Sophia.study[1].secondary[1].location);

// Task 2
let students = {
  2222: {
    name: "jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Johnson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Harry",
    section: "C",
    class: "IX",
    address: {
      "building no": 85,
      street: "DC Road",
      city: "Kentucky",
      country: "USA",
    },
  },
};
// console.log(students[2222].address.city);

// task 3
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "Habluder adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 1,
      bookDetails: {
        name: "Gabluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};
// console.log(data2.data[0].bookDetails.name);
// console.log(data2.data[1].bookCategory);

// Problem 1
const arr = [1, 3, 5, 7, 9];
const newarr = [];
for (let odd of arr) {
  odd++;
  newarr.push(odd);
}
console.log(newarr);
const output = arr.map((odd) => (odd += 1));
console.log(output);

const secondArr = [30, 54, 20, 78, 45, 897, 56];
console.log(secondArr.filter((m) => m % 10 === 0));
console.log(secondArr.find((m) => m % 10 === 0));

const instructor = [
  { name: "Nodi", age: 28, position: "Junior" },
  { name: "Akil", age: 25, position: "Senior" },
  { name: "Sobuj", age: 30, position: "Senior" },
];

console.log(instructor.filter((n) => n.position === "Senior"));
console.log(instructor.reduce((pre, next) => pre + next.age, 0));

//
