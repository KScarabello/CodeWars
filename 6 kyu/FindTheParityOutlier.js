//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers){
 let evens = [];
 let odds = [];
 
 for(let i of integers){
   if(i % 2 === 0){
     evens.push(i)
   } else {
     odds.push(i)
   }
 }
 if(evens.length > odds.length){
   return odds[0]
 } else {
   return evens[0]
 }

}