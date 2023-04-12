let arr=[23,1,5,3,12,4,9,81,7,11,22,31,6];
let min = 81; 
let max = 0;


for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0 && (min === 81 || arr[i] < min)) {
    min = arr[i];
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0 && (max === 0 || arr[i] > max)) {
    max = arr[i];
  }
}
for (let i = 0; i < arr.length; i++) {
     if(arr[i]==min){
        arr[i]=max;
     }
     else if(arr[i]==max){
        arr[i]=min;
     }
    
}
console.log(arr);