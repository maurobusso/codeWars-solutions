
function DNAStrand(dna){
    dna = dna.split('')
    let arr = ""
    for (let i = 0; i <= dna.length; i++)
      if (dna[i] === "A"){
        arr += "T"
      }else if (dna[i] === "T"){
        arr += "A" 
      }else if (dna[i] === "C"){
        arr += "G"
      }else if(dna[i] === "G"){
        arr += "C"
      }
      return arr
  }