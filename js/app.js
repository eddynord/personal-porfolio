const nav = document.querySelector('.navbar');
const arrowBtn = document.getElementById('down-arrow');
const emailSection = document.querySelector('.email');
const webSection = document.querySelector('.web');
const serviceAnimation = document.querySelector('.service-title');
const skills = document.querySelector('.skills');
const card = document.querySelector('.g-col-6');
const arrowTop = document.querySelector('.arrow-top')
const messageBtn = document.getElementById('btn-form');
const form = document.querySelector('.contact-form');





// AUTO TEXT EFFECT //

const textEl = document.getElementById('text')
const textTwo = document.getElementById('textTwo')
const text = "{Front-end Web Developer}"

let textIdx = 0;
writeText();

function writeText() {
    textEl.innerText = text.slice(0, textIdx)
    textIdx++

    if (textIdx > text.length) {
        textIdx = text.value.innerText
    }
    setTimeout(writeText, 50)
}

// SIDE NAV
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.querySelector(".navbar-brand").style.marginLeft = "-280px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".navbar-brand").style.marginLeft = "0";
}




// REMOVE ACTIVE CLASS ON LOAD //
window.addEventListener('load', () => {
    nav.classList.remove('active')
});

window.addEventListener('scroll', fixedNav);

function fixedNav() {
    if (window.scrollY > nav.offsetHeight + 170) {
        nav.classList.add('active');
        emailSection.classList.add('scroll');
        webSection.classList.add('scroll');

    } else {
        nav.classList.remove('active');
        emailSection.classList.remove('scroll');
        webSection.classList.remove('scroll');

    }
}

function sendEmail() {



    const params = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('email_id').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,

    }


    emailjs.send("service_3xn8b0e", "template_8hedb59", params).then(function (res) {



        document.querySelector('.alert').style.zIndex = '1'

        setTimeout(() => {
            document.querySelector('.alert').style.zIndex = '-1'
            email_id.value = "";
            name.value = "";
            subject.value = "";
            message.value = "";

        }, 4000)
    })
}


























