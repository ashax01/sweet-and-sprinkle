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

        // Calculate box price on total weight tiers, exact bundle deal at 300g/500g/1kg/2kg, plus 75p per extra 50g scoop
                if (totalWeight === 0) {
            totalPrice = 0.00;
        } else if (totalWeight < 300) {
            totalPrice = (totalWeight / 50) * 0.75;
        } else if (totalWeight === 300) {
            totalPrice = 4.00;
        } else if (totalWeight < 500) {
            totalPrice = 4.00 + ((totalWeight - 300) / 50) * 0.75;
        } else if (totalWeight === 500) {
            totalPrice = 7.00;
        } else if (totalWeight < 1000) {
            totalPrice = 7.00 + ((totalWeight - 500) / 50) * 0.75;
        } else if (totalWeight === 1000) {
            totalPrice = 13.00;
        } else if (totalWeight < 2000) {
            totalPrice = 13.00 + ((totalWeight - 1000) / 50) * 0.75;
        } else {
            totalPrice = 26.00;
        }

        // Update the summary sidebar totals on screen
        document.getElementById('total-weight').innerText = totalWeight + "g";
        document.getElementById('total-price').innerText = "£" + totalPrice.toFixed(2);

        console.log("Sweet clicked:", sweetType, "Add 50g?:", isPlus);
    });
    // Handle the Confirm Mix button click
const submitBtn = document.getElementById('btn-submit-order');

submitBtn.addEventListener('click', function() {
    const confirmationBox = document.getElementById('order-confirmation');
    
    // Check which packaging radio button is currently selected
    const selectedPackaging = document.querySelector('input[name="packaging"]:checked').value;
    console.log("Order submitted. Weight:", totalWeight, "Packaging:", selectedPackaging);

    // Stop  user if their box is empty
    if (totalWeight === 0) {
        confirmationBox.style.color = "red";
        confirmationBox.innerText = "Please add at least 50g of sweets first!";
    } else {
        confirmationBox.style.color = "#5141ff";
        confirmationBox.innerText = "Mix confirmed! " + totalWeight + "g in a " + selectedPackaging + " for £" + totalPrice.toFixed(2) + ".";
    }
});

});
