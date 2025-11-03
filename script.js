// buttons variables
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btnConfirm = document.getElementById('btn-confirm');

// sections variables
const sec1 = document.querySelector('.event_selection');
const sec2 = document.querySelector('.tickets_booking');
const sec3 = document.querySelector('.tickets_filler');
const sec4 = document.querySelector('.confirmation_area');
// 
let prgss = document.querySelectorAll('.progress');

const first3 = document.getElementById('first');
const last3 = document.getElementById('last');

let plusBtn = document.getElementById('plus-btn');
let minusBtn = document.getElementById('minus-btn');
let ticketsArray1 = document.getElementsByClassName('tickets-left1');
let ticketsArray2 = document.getElementsByClassName('tickets-left2');
let tickets;
let userTickets = 1;
let currentTicket = 1;
let ticketsIndex = document.getElementById('index');

let eventSelected = document.getElementById('selected-event');

// form variables
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let phoneNum = document.getElementById('phone-num');

let nameRegex = /[a-zA-Z]/;
let emailRegex = /[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/;
let phoneRegex = /[0-9]{10}/;

// for the first 3 events
for (let i = 0; i < 3; i++) {
    first3.children[i].onclick = (function () {
        first3.children[i].style.border = '#87CEEB 5px solid';
        document.getElementById('title1').style.color = 'skyblue';
        eventSelected.innerHTML = first3.children[i].outerHTML;
        document.getElementById('event-conff').innerHTML = first3.children[i].outerHTML;
        // first3.children[i].style.border = "none";
        console.log(document.getElementById('selected-event'));
        tickets = ticketsArray1[i].innerHTML;
        btn1.style.backgroundColor = "skyblue";
        btn2.style.backgroundColor = "skyblue";
        btn1.onclick = (function () {
            sec1.style.display = 'none';
            sec2.style.display = 'flex';
            prgss[1].children[0].style.backgroundColor = "lightgreen";
            prgss[1].children[1].style.backgroundColor = "lightgreen";
            eventSelected.children[0].style.border = "none";

        })
    })
}
// for the last 3 events
for (let i = 0; i < 3; i++) {
    last3.children[i].onclick = (function () {
        last3.children[i].style.border = '#87CEEB 5px solid';
        document.getElementById('title1').style.color = 'skyblue';
        eventSelected.innerHTML = last3.children[i].outerHTML;
        document.getElementById('event-conff').innerHTML = first3.children[i].outerHTML;
        console.log(document.getElementById('selected-event'));
        tickets = ticketsArray2[i].innerHTML;
        btn1.style.backgroundColor = "skyblue";
        btn2.style.backgroundColor = "skyblue";
        btn1.onclick = (function () {
            sec1.style.display = 'none';
            sec2.style.display = 'flex';
            prgss[1].children[0].style.backgroundColor = "lightgreen";
            prgss[1].children[1].style.backgroundColor = "lightgreen";
            eventSelected.children[0].style.border = "none";

        })
    })
}

function board() {
    ticketsIndex.innerHTML = `${currentTicket}/${userTickets}`;
}

btn2.onclick = (function () {
    sec2.style.display = 'none';
    sec3.style.display = 'flex';
    prgss[2].children[0].style.backgroundColor = "lightgreen";
    prgss[2].children[1].style.backgroundColor = "lightgreen";
    prgss[2].children[2].style.backgroundColor = "lightgreen";
    prgss[2].children[3].style.backgroundColor = "lightgreen";
    board();

})

btn3.onclick = (function () {
    sec3.style.display = 'none';
    sec4.style.display = 'flex';
    prgss[3].children[0].style.backgroundColor = "lightgreen";
    prgss[3].children[1].style.backgroundColor = "lightgreen";
    prgss[3].children[2].style.backgroundColor = "lightgreen";
    prgss[3].children[3].style.backgroundColor = "lightgreen";
    prgss[3].children[4].style.backgroundColor = "lightgreen";
    prgss[3].children[5].style.backgroundColor = "lightgreen";
    document.getElementById('event-conff').children[0].style.border = "none";
    document.getElementById('event-conff').children[0].children[4].children[0].innerHTML = `${userTickets}`;
    document.getElementById('event-conff').children[0].children[4].children[1].innerHTML = `reserved`;

})

let x = 0;
btnConfirm.onclick = (function () {
    if(x == 0){
        alert("Confirm");
        x = 1;
    }
    prgss[3].children[0].style.backgroundColor = "lightgreen";
    prgss[3].children[1].style.backgroundColor = "lightgreen";
    prgss[3].children[2].style.backgroundColor = "lightgreen";
    prgss[3].children[3].style.backgroundColor = "lightgreen";
    prgss[3].children[4].style.backgroundColor = "lightgreen";
    prgss[3].children[5].style.backgroundColor = "lightgreen";
    prgss[3].children[6].style.backgroundColor = "lightgreen";
    btnConfirm.style.backgroundColor = "gray";
})


plusBtn.onclick = (function () {
    if (userTickets < tickets) {
        userTickets++;
        document.getElementById('user-tickets').innerHTML = `${userTickets}`;
    }
})
minusBtn.onclick = (function () {
    if (userTickets > 1) {
        userTickets--;
        document.getElementById('user-tickets').innerHTML = `${userTickets}`;
    }
})

let formmm = document.getElementById('form');

formmm.onsubmit = (function (e) {
    e.preventDefault(); // to prevent the page from reloading
    let validation = true;
    if (currentTicket <= userTickets) {
        if (!nameRegex.test(firstName.value.trim())) {
            validation = false;
            firstName.style.border = "red 3px solid";
        }
        if (!nameRegex.test(lastName.value.trim())) {
            validation = false;
            lastName.style.border = "red 3px solid";
        }
        if (!emailRegex.test(email.value)) {
            validation = false;
            email.style.border = "red 3px solid";
        }
        if (!phoneRegex.test(phoneNum.value)) {
            validation = false;
            phoneNum.style.border = "red 3px solid";
        }
        if (validation == false) {
            console.log("not valid");
        }
        else {
            console.log("valid");
            currentTicket++;
            if (currentTicket <= userTickets) {
                board();
            }
            else{
                btn3.style.backgroundColor = "skyblue";
                btnConfirm.style.backgroundColor = "skyblue";
                document.getElementById('sub_btn').style.backgroundColor = "gray";
            }
            document.getElementById('tickets-info').innerHTML +=
                `<div>
            <p>${firstName.value} ${lastName.value},</p>
        <p>${email.value}</p>
        <p>${phoneNum.value}</p>
        </div>`
        document.getElementById('conf-tickets').innerHTML +=
        `<div>
        <p>${firstName.value} ${lastName.value},</p>
        <p>${email.value}</p>
        <p>${phoneNum.value}</p>
        </div>`
            formmm.reset();
        }
    }
})

