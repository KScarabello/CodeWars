//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text){
  let textArr = text.toLowerCase().split('')
  let holder = {}
  let count = 0
  for (var i of textArr){
    if(!holder[i]){
      holder[i] = 1
    } else {
      holder[i] = holder[i] + 1
    }
  }
  for(var j in holder){
    if(holder[j] > 1){
      count ++
    }
  }
  return count
}