const numbers = [1, 2, 3, 4, 5, 6, 7]

console.log(numbers.every(num => num < 30))

// Validate every member in the team has less than 16 years old

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

// Solution

const under15 = team.every(({age}) => age <= 15)

console.log(under15);