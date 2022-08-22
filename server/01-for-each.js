// const letters = ["a", "b", "c"];

// letters.forEach((item, i) => {

//   console.log(item, i);
//   letters[i] = item + 'z';
//   console.log(item);
// });

// console.log(letters)

const array = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
  },
];

function solution(array) {
  // Tu código aquí 👈
  return array.map((item) => {
    item.taxes = Math.floor(item.price * 19 / 100);
    
  });
}

solution(array);

console.log(array);