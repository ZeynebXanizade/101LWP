const btnSearch = document.querySelector("#btnSearch")
const txtSearch = document.querySelector("#txtSearch")
btnSearch.addEventListener("click", () => {
    let text = document.querySelector("#txtSearch").value;
    document.querySelector("#details");
    getCountry(text);
});

async function getCountry(country) {
    try {
        const response = await fetch('https://restcountries.com/v3.1/name/' + country);
        if (!response.ok)
            throw new Error("olke tapildi");
        const data = await response.json();
        renderCountry(data[0]);

        const countries = data[0].borders;
        if (!countries)
            throw new Error("qonsu olke tapilmir.");

        const response2 = await fetch('https://restcountries.com/v3.1/alpha?codes=' + countries.toString());
        const neighbors = await response2.json();

        renderNeighbors(neighbors);
    }
    catch (err) {
        renderError(err);
    }
}

function renderCountry(data) {
    document.querySelector("#country-details").innerHTML = "";
    document.querySelector("#neighbors").innerHTML = "";

    let html = `                   
        <div class="col-4">
            <img src="${data.flags.png}" alt="" class="img-fluid">
        </div>
        <div class="col-8">
            <h3 class="card-title">${data.name.common}</h3>
            <hr>
            <div class="row">
            <div class="col-4">Continent: </div>
            <div class="col-8">${data.region} </div>
        </div>
            <div class="row">
                <div class="col-4">Common: </div>
                <div class="col-8">${data.name.common} </div>
            </div>
            <div class="row">
                <div class="col-4">Currency: </div>
                <div class="col-8">${Object.values(data.currencies)[0].name} ${Object.values(data.currencies)[0].symbol}</div>
            </div>
            <div class="row">
                <div class="col-4">Seria: </div>
                <div class="col-8">${data.car.signs}</div>
            </div>
            <div class="row">
                <div class="col-4">Population:</div>
                <div class="col-8">${data.population}</div>
            </div>
            <div class="row">
            <div class="col-4">Capital:</div>
            <div class="col-8">${data.capital}</div>
        </div>
        <div class="row">
        <div class="col-4">Number:</div>
        <div class="col-8">${data.idd.root + data.idd.suffixes}</div>
    </div>
        </div>

    
`;

    document.querySelector("#details").style.opacity = 1;
    document.querySelector("#country-details").innerHTML = html;
}
//borders
// document.querySelector("#btnSearchBorder")
// btnSearchBorder.addEventListener("click", () => {
//     let text = document.querySelector("#txtSearch").value;
//     document.querySelector("#details");
//     getCountry(text);
function renderNeighbors(data) {
    console.log(data);
    let html = "";
    for (let country of data) {
        html += `
            <div class="col-2 mt-2">
                <div class="card">
                    <img src="${country.flags.png}" class="card-img-top">
                    <div class="card-body">
                        <h6 class="card-title">${country.name.common}</h6>
                    </div>
                    <div class="card-body">
                    <h6 class="card-title">${country.region}</h6>
                </div>
                <div class="card-body">
                <h6 class="card-title">${country.capital}</h6>
            </div>
            <div class="card-body">
            <h6 class="card-title">${country.population}</h6>
        </div>
        <div class="card-body">
        <h6 class="card-title">${country.car.signs}</h6>
    </div>
    <div class="card-body">
    <h6 class="card-title">${Object.values(country.currencies)[0].name} ${Object.values(country.currencies)[0].symbol}</h6>
</div>
                </div>
            </div>

        `;

    }
    document.querySelector("#neighbors").innerHTML = html;

}
//alinmadi((((
// const txtSearch = document.querySelector("#txtSearch")

const btnSearchAll = document.querySelector("#btnSearchAll")

btnSearchAll.addEventListener("click", function () {

    fetch("https://restcountries.com/v3.1/name/" + txtSearch.value)

        .then((response) => response.json())

        .then((data) => {

            console.log("olkenin adi", data[0].name.common);

            console.log("olkenin paytaxt", data[0].capital[0]);

            console.log("olkenin qonsu", data[0].borders);

            data[0].borders.forEach((element) => {

                console.log(element);

            });

        })

    const kart = document.getElementById("info");

    kart.innerHTML = `
    
    <div class="card">
    
    <div class="p_">
    
    <p >Card of Country</p>
    
    </div>
    
    <div class="img_"><img style="width: 200px;" src="https://flagcdn.com/w320/tr.png" alt=""></div>
    
    <div class="h2_">
    
    <h2>Turkey</h2>
    
    </div>
    
    <div class="bottom">
    
    <div id="info">
    
    <div style="display:flex; justify-content:space-between" >
    
    <div>Continent</div>
    
    <div class="info_1">${data[0].region}</div>
    
    </div>
    
    <div style="display:flex; justify-content:space-between" >
    
    <div>Name</div>
    
    <div class="info_1">${data[0].name.common}</div>
    
    </div>
    
    <div style="display:flex; justify-content:space-between">
    
    <div>Currencies</div>
    
    </div>
    
    <div style="display:flex; justify-content:space-between" >
    
    <div>Car series</div>
    
    <div class="info_1">${data[0].car.signs}</div>
    
    </div>
    
    <div style="display:flex; justify-content:space-between" >
    
    <div>Population</div>
    
    <div class="info_1">${data[0].population}</div>
    
    </div>
    
    <div style="display:flex; justify-content:space-between">
    
    <div>Capital</div>
    
    <div class="info_1">${data[0].capital}</div>
    
    </div>
    
    <div style="display:flex; justify-content:space-between" >
    
    <div>Phone number header</div>
    
    <div class="info_1">${data[0].idd.root}${data[0].idd.suffixes}</div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    `;

});

console.log()


