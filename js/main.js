//header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled")
    }
}

//nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
//send email
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "A noob",
        Password : "#*+aaammhm",
        To : 'anoobbf11@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value + "<br> Email:" + document.getElementById("email")
                 + "<br> Subject:" + document.getElementById("subject").value 
                 + "<br> Message:" + document.getElementById("message").value
    }).then(
      message => alert("Massage sent sucessfully")
    );
}