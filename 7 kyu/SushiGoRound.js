//https://www.codewars.com/kata/59619e4609868dd923000041

function totalBill(str) {
  let plates = str.split(' ').join('').length 
  if(plates >= 5) {
    let freePlates = Math.trunc(plates / 5);
    return (plates - freePlates)*2
  }
return plates * 2
}