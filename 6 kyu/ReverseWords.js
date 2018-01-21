//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  let blub = str.split(' ')
  let empty = []
  for(let i = 0; i < blub.length; i++){
    empty.push(blub[i].split('').reverse().join(''))
    
  }
  return empty.join(' ')
}