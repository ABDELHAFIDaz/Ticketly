let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btnConfirm = document.getElementById('btn-confirm');
const sec1 = document.querySelector('.event_selection');
const sec2 = document.querySelector('.tickets_booking');
const sec3 = document.querySelector('.tickets_filler');
const sec4 = document.querySelector('.confirmation_area');
let prgss = document.querySelectorAll('.progress');

btn1.onclick = (function () {
    sec1.style.display = 'none';
    sec2.style.display = 'flex';
    prgss[1].children[0].style.backgroundColor = "lightgreen";
    prgss[1].children[1].style.backgroundColor = "lightgreen";

})

const first3 = document.getElementsByClassName('first3');
for (child of first3) {
    child.onclick = (function () {
        document.child.querySelector('div').style.border = '#87CEEB 5px solid';
    })
}
