//https://www.codewars.com/kata/5813d19765d81c592200001a

function dontGiveMeFive(start, end){

let count = 0
for(var i = start; i < end+1; i++){
  if(!/5/.test(i)){
    count ++
  }
}
  return count;
}