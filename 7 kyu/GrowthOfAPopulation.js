//https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
    let currentInhab = p0;
    let yearCount = 0;    
    while(currentInhab < p){
      currentInhab = currentInhab + (currentInhab * (percent * 0.01)) + aug;
      yearCount++;
    }
    return yearCount
}