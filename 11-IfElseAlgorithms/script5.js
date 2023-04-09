// Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib. Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını yoxlayan proqram tərtib edin.

let a = Number(prompt("a daxil et:"));
let b = Number(prompt("b daxil et:"));
let c = Number(prompt("c daxil et:"));
 if(a**2+b**2==c**2){
      console.log("Result: düzbucaqlı üçbucaqdır.")
 }
 else{
     console.log(" Result: düzbucaqlı üçbucaq deyil.")
 }