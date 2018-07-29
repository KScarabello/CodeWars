//https://www.codewars.com/kata/human-readable-duration-format/train/javascript

//CURRENTLY INCOMPLETE

function formatDuration (seconds) {
  let secondsCounter = seconds;
  let years = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let timesArr = [];

  if(seconds === 0){
    return "now"
  } else {
      while(secondsCounter >= 31536000){
        years ++;
        secondsCounter -= 31536000        
      }
      while(secondsCounter >= 86400){
        days ++;
        secondsCounter -= 84600;        
      }
      while(secondsCounter >= 3600){
        hours ++;
        secondsCounter -= 3600;        
      }
      while(secondsCounter >= 60){
        minutes ++;
        secondsCounter -= 60;        
      }
  }
  




}

formatDuration(31536000)