//2) Kiçik L hərfi ilə başlayan elementləri silən funksiya yazın
arr=["lankaran","baki","masalli","lerik","astara"]
 function birinciElement(word1) {
    let word2 = word1.filter(elem =>{
        return elem[0].toLowerCase()!=="l";
    });
    
     return word2;
  }
  console.log(birinciElement(arr));



 


