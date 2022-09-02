const words = ['spray', 'limit', 'elite', 'exuberant'];

const filter = words.filter(item => item.length >= 6);

console.log(words);
console.log(filter);

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

const orderesFiltered = orderes.filter(item => item.delivered)
console.log(orderesFiltered);

const search = (query => {
  return orderes.filter(item => {
    return item.customerName.toLocaleLowerCase().includes(query.toLowerCase());
  })
});

console.log(search('a'));