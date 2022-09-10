export default function isValid(letter) {

  const arr = letter.split(" ");

  const options = ["()", "{}", "[]", "(}", "(]", "{)", "{]", "[)", "[}", '[', '{', '('];

  const hasText = new RegExp('[a-zA-Z1-9]')

  const filtered1 = arr.filter((item) => {
    
    const filled = !options.some((substr) => item.includes(substr));
    const isText = hasText.test(item)
    const wrapped = item.length > 2 && item.includes('(') && item.includes(')') && isText && item.includes('')

    if(filled || wrapped) return item

  
  });


  console.log(filtered1);

  return filtered1.length === arr.length
}


const myLetter = "bici coche (balón) bici coche peluche (()) bici";

console.log(isValid(myLetter));
