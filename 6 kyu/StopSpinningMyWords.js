//https://www.codewars.com/kata/stop-gninnips-my-sdrow/javascript



function spinWords(str){
  let blub = str.split(' ');
  let empty = []
  for(var i in blub){
    if(blub[i].length >= 5){
      empty.push(blub[i].split('').reverse().join(""))
    } else {
      empty.push(blub[i])
    }
   }
  return empty.join(' ')
}

