const orderes = [
  {
    customerName: 'David',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Pedro',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Camilo',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valeria',
    total: 700,
    delivered: false,
  },
];

console.log(orderes);

const filter = orderes.map(item => item.total);

const filter2 = orderes.map(item => {
  return {
    ...item,
    tax: item.total * .19

  };
})

console.log(filter);
console.log(filter2);
console.log(orderes);