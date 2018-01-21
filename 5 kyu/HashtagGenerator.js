
//https://www.codewars.com/kata/the-hashtag-generator/train/javascript

function generateHashtag (str) {
  if(str.length > 140 || str.length === 0){
return false  
  } else {
    let ht = str.split(' ').map(item => item.length > 0 ? item[0].toUpperCase() + item.slice(1) : "").join('')
    return "#" + ht
  }
}