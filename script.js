let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btnConfirm = document.getElementById('btn-confirm');

const sec1 = document.querySelector('.event_selection');
const sec2 = document.querySelector('.tickets_booking');
const sec3 = document.querySelector('.tickets_filler');
const sec4 = document.querySelector('.confirmation_area');

let prgss = document.querySelectorAll('.progress');

const first3 = document.getElementById('first');
const last3 = document.getElementById('last');

let plusBtn = document.getElementById('plus-btn');
let minusBtn = document.getElementById('minus-btn');
let tickets = 5;
let userTickets = 1;
let currentTicket = 1;

btn1.onclick = (function () {
    sec1.style.display = 'none';
    sec2.style.display = 'flex';
    prgss[1].children[0].style.backgroundColor = "lightgreen";
    prgss[1].children[1].style.backgroundColor = "lightgreen";

})
btn2.onclick = (function () {
    sec2.style.display = 'none';
    sec3.style.display = 'flex';
    prgss[2].children[0].style.backgroundColor = "lightgreen";
    prgss[2].children[1].style.backgroundColor = "lightgreen";
    prgss[2].children[2].style.backgroundColor = "lightgreen";
    prgss[2].children[3].style.backgroundColor = "lightgreen";
    ticketsIndex.innerHTML = `${currentTicket}/${userTickets}`;

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

})

// for the first 3 events
for (let i = 0; i < 3; i++) {
    first3.children[i].onclick = (function () {
        first3.children[i].style.border = '#87CEEB 5px solid';
    })
}
// for the last 3 events
for (let i = 0; i < 3; i++) {
    last3.children[i].onclick = (function () {
        last3.children[i].style.border = '#87CEEB 5px solid';
    })
}

plusBtn.onclick = (function(){
    if(userTickets < tickets){
        userTickets++;
        console.log(userTickets);
        document.getElementById('user-tickets').innerHTML = `${userTickets}`;
    }
})
minusBtn.onclick = (function(){
    if(userTickets > 1){
        userTickets--;
        document.getElementById('user-tickets').innerHTML = `${userTickets}`;
    }
})

let ticketsIndex = document.getElementById('index');

