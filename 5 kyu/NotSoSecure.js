//https://www.codewars.com/kata/not-very-secure/train/javascript

//currently incomplete

function alphanumeric(string){
  if(string == ""){
    console.log("blank string")
    return false
  } else {
    let whiteSpace = /\s/g
    let underScore = /\_/g
    let exclamation = /\!/g
    if(whiteSpace.test(string)){
      console.log("has white space")
      return false
    } else if (underScore.test(string)){
      console.log("has underscore")
      return false
    } else if (exclamation.test(string)) {
      console.log("has exclamation")
      return false      
    } else {
      let nonAlpha = /\[^a-zA-Z0-9]/g
      console.log("third")
      if(nonAlpha.test(string)){
        return false
      } else {
        return true
      }
    }
  }
}