const matriz = [
  [1,2,3],
  [4,5,6, [1,2, [1,2]]],
  [7,8,9]
];

console.log(matriz.flat());


// recursion
function profundidad(list) {
  let newList = [];
  if (typeof list != "object") return [list];
  list.forEach(element => {
      newList = newList.concat(profundidad(element));
  });
  return newList;
}

const newArray = profundidad([1, [3]]);

console.log(newArray);