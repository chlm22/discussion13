// .heading{
// 	text-align: center;
// 	font-style: Cursive;
// 	color:#6E3DFF
// }

const heading = document.querySelector("h1");
heading.style.color = "#6E3DFF";
heading.style.textAlign = "center";

const page = document.querySelector("body");
function alertBtn(){
    alert (window.Date());
}
page.addEventListener("click", alertBtn);


const email = document.querySelector("#toggle");
//const change = document.querySelector("hidden");
function emailSection(){
    document.querySelector("#emailBox").classList.toggle("hidden");
}

email.addEventListener("click", emailSection);