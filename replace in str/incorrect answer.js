
function fakeBin(x){

  let arr = [x.split]                         //this part is wrong
  for(let i = 0; i <= arr.length; i++){       
    if (i < 5){                               //if(Number(str[i])>=5)
      arr.push('0')
    }else (i >= 5){
      arr.push('1')
    }
  }
  return arr
}