//1) Arrayin bütün elementlərini 3 xarakterə endirən funksiya yazın
let arr=["lankaran","baki","masalli","lerik","astara"]
function birinciElement(word) {
       word.forEach(function (words,i,array) {
        if ((words.length>3 )) {
           array[i] =words.slice(0,3);
        }else{
            array[i] =words;
        }
       });
       return word;
    }
    console.log(birinciElement(arr));