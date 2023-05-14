const table = document.querySelector(".table")


fetch("https://northwind.vercel.app/api/customers")
.then((res) => res.json())
.then((data) => {

    console.log(data);

    data.forEach((item,i) => {


    //  table start

    let tr = document.createElement("tr");
    let companyName = document.createElement("td");
    let contactName = document.createElement("td");
    let city = document.createElement("td");
    let country = document.createElement("td");
    let phone = document.createElement("td");
    
    companyName.innerText = item.companyName;
    contactName.innerText = item.contactName;
    city.innerText = item.address.city;
    country.innerText = item.address.country;
    phone.innerText = item.address.phone;


    table.appendChild(tr);
    tr.append(companyName, contactName, city, country, phone);

    //  table end
        
    // button start

    const info = document.createElement("button");
    info.innerText = "info";

    tr.appendChild(info);

    info.addEventListener("click", function () {


        let tr = document.createElement("tr");
        let companyName = document.createElement("td");
        let contactName = document.createElement("td");
        let city = document.createElement("td");
        let country = document.createElement("td");
        let phone = document.createElement("td");
        
        companyName.innerText = item.companyName;
        contactName.innerText = item.contactName;
        city.innerText = item.address.city;
        country.innerText = item.address.country;
        phone.innerText = item.address.phone;
    
    
        table.appendChild(tr);
        tr.append(companyName, contactName, city, country, phone);

        
        
    })

    // button end






});
})