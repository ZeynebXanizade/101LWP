//3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram tərtib edin. Proqramın qaytardığı cavab number tipində olmalıdır. Yəni ki, aldığımız cavabı başqa bir ədədlə toplaya, çıxa və s. edə bilərik.


let a = Number(prompt("a daxil et:"));
let b = Number(prompt("b daxil et:"));
let c = Number(prompt("c daxil et:"));
let max;
let min;



 if (a > b && a > c && b >c) {
 
    max = a*100+b*10+c
    min = c*100+b*10+a
   console.log(`Big number: ${max } `);
   console.log(`Little number: ${min } `);
}

 else if ( b>a && b>c && c>a){ 
    max = b*100+c*10+a
    min = a*100+c*10+b
    console.log(`Big number: ${max } `);
    console.log(`Little number: ${min } `); 


 }
  else if( c>a && c>b && a>b){
    max = c*100+a*10+b
    min = b*100+a*10+c
    console.log(`Big number: ${max } `);
    console.log(`Little number: ${min } `);
 }
 else {
         max = c*100+b*10+a
         min = a*100+b*10+c
         console.log(`Big number: ${max } `);
         console.log(`Little number: ${min } `);
     }
 