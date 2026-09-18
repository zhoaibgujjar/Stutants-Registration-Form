

let rollno = document.querySelector("#rollno");
let sname = document.querySelector("#sname");
let fname = document.querySelector("#fname");
let mobileno = document.querySelector("#mobileno");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let gender = document.querySelector("#gender");
let city = document.querySelector("#city");
let address = document.querySelector("#address");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();


  let studentObj = {
    rollno: rollno.value.trim(),
    sname: sname.value.trim(),
    fname: fname.value.trim(),
    mobileno: mobileno.value.trim(),
    email: email.value.trim(),
    password: password.value.trim(),
    gender: gender.value.trim(),
    city: city.value.trim(),
    address: address.value.trim()
  };

  let students = JSON.parse(localStorage.getItem("studentsData")) || [];
  students.push(studentObj);

  localStorage.setItem("studentsData", JSON.stringify(students));

  alert("Data Local Storage mein save ho gaya hai!");

//   rollno.value = "";
//   sname.value = "";
//   fname.value = "";
//   mobileno.value = "";
//   email.value = "";
//   password.value = "";
//   gender.value = "";
//   city.value = "";
//   address.value = "";
});