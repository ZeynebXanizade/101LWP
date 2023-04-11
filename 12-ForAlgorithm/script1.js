 //1. sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.
 let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`
 
let a=0;
for (let i = 0;  i< sampleNews.length; i++) {
  const bosluq=sampleNews[i];
  if (bosluq !== " ") {
    continue;
  }
  a++;

}

console.log("Metinde olan bosluqlarin sayi",a);

