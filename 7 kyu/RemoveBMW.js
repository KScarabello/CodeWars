//https://www.codewars.com/kata/59de795c289ef9197f000c48

function removeBMW(str){
  if(typeof(str) === "string"){
   return str.replace(/[BMW]/gi, '')

} else {
  throw new Error("This program only works for text.")
}
}