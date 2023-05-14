const form = document.querySelector(".form");
const submit = document.querySelector(".btn");

form.addEventListener("submit", function (e) {
    
    const companyName = document.querySelector("#companyName").value
    const contactName = document.querySelector("#contactNam").value
    const city = document.querySelector("#city").value
    const country = document.querySelector("#country").value
    const phone = document.querySelector("#phone").value
    
    


    e.preventDefault();


    fetch("https://northwind.vercel.app/api/customers",{
        method:"POST",
        body:JSON.stringify({
                companyName:companyName,
                contactName:contactName,
                city:city,
                country:country,
                phone:phone
        }),
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
    .then((res) => res.json())
    .then((data)=>{
        console.log(data);



       
        
        
    
      
    })
    
})
