//3 rəqəmli hər hansı bir ədəd verilib. Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin.
let first;
let second;
let thrid;

let x = Number(prompt("x daxil et:"));

  first = (x / 100) - ((x % 100)/100);
  second =((x % 100) - (x%10))/10;
  third = x%10;

console.log( `Result: ${ first}, ${ second}, ${ third}` );

 