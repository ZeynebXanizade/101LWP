// personal card  start
const personal = document.querySelector('.personal_card');

fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
                data.forEach((element, i) => {
                        if (i < 3) {
                                const card = document.createElement("div")
                                card.className = "personal_card";
                                card.classList.add('card_one');
                                personal.append(card);

                            //qite
                                const p = document.createElement("p");
                                card.append(p);
                                let count = element.continents[0];
                                p.append(count);

                                // bayraq
                                const div_img = document.createElement("div");
                                card.append(div_img);
                                const flag = document.createElement("img");
                                flag.src = element.flags.png;
                                div_img.append(flag)
                                flag.style.width = '150px';
                                flag.style.height = '150px';


                                // paytaxt adi
                                const span = document.createElement("span");
                                const h4 = document.createElement("h4");
                                const p2 = document.createElement("p");
                                let aze = element.name.common;
                                h4.append(aze);
                                span.appendChild(h4)
                                let cap = element.capital;
                                p2.append(cap);
                                span.appendChild(p2);
                                div_img.append(span)
                        }

                });
        })
// personal card  end

//form start
const form = document.querySelector(".form");
const email = document.querySelector(".email");
const subject = document.querySelector(".subject");
const Message = document.querySelector(".Message");
const mapbtn = document.querySelector(".mapbtn");



let arr = [];

if (JSON.parse(localStorage.getItem("arr")) !== null) {
        arr = JSON.parse(localStorage.getItem("arr"));
}

mapbtn.addEventListener("click", (e) => {
        let obj = {
                email: "",
                subject: "",
                Message: "",
        }
        obj.email = email.value;
        obj.subject = subject.value;
        obj.Message = Message.value;
        arr.push(obj);

        localStorage.setItem("arr", JSON.stringify(arr));
        console.log("arr");
        console.log(JSON.parse(localStorage.getItem("arr")));

        e.preventDefault();
})

//form end

//navbar


const bar = document.querySelector(".bar");
const resp = document.querySelector(".resp");
const nav = document.querySelector("nav");
bar.addEventListener("click", function () {
        resp.classList.toggle("responsive")
        nav.classList.toggle("header_bg")
})