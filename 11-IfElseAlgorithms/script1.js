//3 ədəd verilib. Bu 3 ədəd içindən cəmləri ən böyük olan 2 ədədi qaytaran proqram tərtib edin.

let a = Number(prompt("a daxil et:"));
let b = Number(prompt("b daxil et:"));
let c = Number(prompt("c daxil et:"));


 if (a + b > b + c && a + b > a + c) 
 {
   console.log(`Big sum result ${a} and ${b}`  );
 } else if ( b+c>b+a && b+c>a+c)
 {
console.log(`Big sum result ${b} and ${c}`);
 }else if( c+a>c+b &&c+a>a+b)
 {
console.log(`Big sum result ${a} and ${c}`);
 }
 