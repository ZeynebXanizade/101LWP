(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
const form = document.querySelector(".form");
const BTN1 = document.querySelector(".BTN1");
const BTN2 = document.querySelector(".BTN2");
const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const course = document.querySelector(".course");
const age = document.querySelector(".age");
const gender = document.querySelector(".gender");
const checkbox = document.querySelector(".checkbox");
const student_search = document.querySelector(".student_search");
let arr = [];
if (JSON.parse(localStorage.getItem("arr")) !== null) {
    arr = JSON.parse(localStorage.getItem("arr"));
}



BTN1.addEventListener("click", function () {
 
         if (student_search.value==JSON.parse(localStorage.getItem("arr"))) {
             alert("Telebe var")
         }else{
    
             alert("Telebe yoxdur");
         };
        
     }
 );
form.addEventListener("submit", function (e) {
    // for (let i = 0;  i< arr.length; i++) {
    //     if (student_search.value===localStorage.getItem(arr) ) {
    //         alert("Telebe var")
    //     }else{
    
    //         alert("Telebe yoxdur");
    //     };
        
    // }



    let obj = {
        name: "",
        surname: "",
        course: "",
        age: "",
        gender: "",
    };
    obj.name = name.value;
    obj.surname = surname.value;
    obj.course = course.value;
    obj.age = age.value;
    obj.gender = gender.value;
    console.log(obj);
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("arr", JSON.stringify(arr));
    console.log(JSON.parse(localStorage.getItem("arr")));
    e.preventDefault();
});

//   localStorage.clear();