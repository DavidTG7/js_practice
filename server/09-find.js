const numbers = [1, 2, 3, 4, 5, 6, 7]

console.log(numbers.find(num => num === 3))


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

console.log(products.find(({id}) => id == '🥞'));

console.log(products.findIndex(({id}) => id === '🥞'));
