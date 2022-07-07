function solve(s){
  let lowerC = 0;
  let upperC = 0;
  for( let i = 0;i<s.length;i++){
    if( s[i] == s[i].toUpperCase()){
      upperC++;
    }
    else{
      lowerC++;
    }
  }
  return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}