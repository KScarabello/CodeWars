//https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
  findSmallestInt(args) {
  let start = args[0];
  for (let i of args){
    if(i < start){
     start = i;
    }
  }
  return start;
  }
}