// const table = document.querySelector('table');

// function getRow(index, name, capital, population, flag){
//     let row = `<tr id=""><td>${index}</td><td>${name}</td><td>${capital}</td><td>${population}</td><td>${flag}</td></tr>`;
//     return row;
// };

// //data = fetch/...
// const data = [
//     {
//         name: 'Zeyneb',
//         capital: 'Astara',
//         population: 1,
//         flag: 'yox'
//     },
//     {
//         name: 'Adil',
//         capital: 'Baki',
//         population: 1,
//         flag: 'yox'
//     },
// ];
// for(let i = 0; i < data.length; i++ ){
//     table.innerHTML += getRow(i+1, data[i].name, data[i].capital, data[i].population, data[i].flag);
// }




const table = document.querySelector(".table");
fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {

        data.forEach((element,i) => {
        let tr = document.createElement('tr');
        let number = document.createElement('td');
        let name = document.createElement('td');
        let capital = document.createElement('td');
        let population = document.createElement('td');
        let flag = document.createElement('td');
        let img = document.createElement("img");
        img.setAttribute("src",element.flags.png);
        flag.append(img);


        number.innerHTML = i+1;
        name.innerHTML =element.name.common;
        capital.innerHTML = element.capital;
        population.innerHTML = element.population;
        tr.append(number, name, capital ,population, flag);
        table.appendChild(tr);

        const btn3=document.createElement("button")
        btn3.innerHTML="Delete"
        tr.appendChild(btn3)
        
        btn3.style.cssText= 
         `
         width:80px;
       
        
         `

         btn3.addEventListener("click",function(){
                tr.remove()
                })
        
const btn4=document.createElement("button")

btn4.innerHTML="Edit"
tr.appendChild(btn4)

btn4.style.cssText= 
 `
 width:80px;


 `
 
    })
})
