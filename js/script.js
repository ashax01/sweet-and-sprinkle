let totalWeight = 0;
let totalPrice = 0.00;
const qtyButtons= document.querySelectorAll('.btn-qty');
qtyButtons.forEach(button => {
    button.addEventListener('click', function() {
const sweetType = this.getAttribute('data-sweet');
const isPlus = this.classList.contains('plus');