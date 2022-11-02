//When a user clicks on the div, open the popup//
function PopUpFunc() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
//Phone Popups//
function PopUpFunc2() {
    var popup2 = document.getElementById("myPopup2");
    popup2.classList.toggle("show2");
}

//Portfolio Pop ups//
function portfolio(el) {
    const textEl = el.querySelector('.popuptext')
    textEl.classList.toggle('show')
}