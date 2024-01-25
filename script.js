// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll section activeLink
let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
    // sticky navbar
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggal icon and navbar when click navbar link(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scroll reveal

ScrollReveal({ 
    // reset: true,
     distance:'80px',
     duration:2000,
     delay:200
});
ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

//typed js

const typed = new Typed('#Multiple-text',{
    strings:['Frontend Developer','Backend Developer','Manage Projects'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// popup
// function showPopup() {
//     var popup = document.getElementById();
//     popup.style.display = "block";
// }

function showPopup(popupId) {
    var popup = document.getElementById(popupId);

    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}
function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
}

// function sendEmail(){
//     Email.send({
//         SecureToken:"e8edb690-b553-4d8b-8c9a-2da22621ef3e",
//         // Host : "smtp.gmail.com",
//         // Username : "kapinpatel2000@gmail.com",
//         // Password : "Kapin@123",
//         To : 'kapinpatel2000@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : document.getElementById("text").value,
//         Body : "Name: " + document.getElementById("name").value
//         +"<br> Email:" + document.getElementById("email").value
//         +"<br> Phone No:" + document.getElementById("number").value
//         +"<br> Message:" + document.getElementById("message").value
//     }).then(
//       message => alert("message Sent SuccesFully")
//     );
// }