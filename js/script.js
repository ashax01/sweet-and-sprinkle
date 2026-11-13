let totalWeight = 0;
let totalPrice = 0.00;
const qtyButtons= document.querySelectorAll('.btn-qty');
qtyButtons.forEach(button => {
    button.addEventListener('click', function() {
const sweetType = this.getAttribute('data-sweet');
const isPlus = this.classList.contains('plus');
        // Update individual sweet weight on its card
        const cardQtyDisplay = document.getElementById('qty-' + sweetType);
        let currentSweetWeight = parseInt(cardQtyDisplay.innerText);

        if (isPlus) {
            currentSweetWeight += 50;
            totalWeight += 50;
        } else if (currentSweetWeight > 0) {
            currentSweetWeight -= 50;
            totalWeight -= 50;
        }

        // Update the single card's text on screen
        cardQtyDisplay.innerText = currentSweetWeight + "g";

        // Calculate the box price based on total weight tiers
        if (totalWeight === 0) {
            totalPrice = 0.00;
        } else if (totalWeight <= 300) {
            totalPrice = 4.00;
        } else if (totalWeight <= 500) {
            totalPrice = 7.00;
        } else if (totalWeight <= 1000) {
            totalPrice = 13.00;
        } else {
            totalPrice = 26.00;
        }

        // Update the summary sidebar totals on screen
        document.getElementById('total-weight').innerText = totalWeight + "g";
        document.getElementById('total-price').innerText = "£" + totalPrice.toFixed(2);

        console.log("Sweet clicked:", sweetType, "Add 50g?:", isPlus);
    });
});
