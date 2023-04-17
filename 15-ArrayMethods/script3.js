//3)Verilmiş arrayin 2-ci elementinə [mandarin,limon] arrayini push eden funksiya yazin. Verilmiş arrayin elementini saxlamaq şərti ilə.
let arr=["lankaran","baki","masalli","lerik","astara"]
function birinciElement(word1) {
   let word2=["mandarin","limon"];
   word1.splice(1,0,word2);
     return word1;
  }
  console.log(birinciElement(arr));