const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join(''));

const title = 'Arrays manipulation course'

console.log(title.split(' ').join('-').toLowerCase());


function solution(lines) {
  // Tu código aquí 👈 
  return lines.flatMap(item => item.split(' ')).length
}; 

console.log(solution([
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]));