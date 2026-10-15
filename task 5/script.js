document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const productSelect = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const calculateButton = document.getElementById("calculate-button");
    const errorMessage = document.getElementById("error-message");
    const result = document.getElementById("result");

    const quantityPattern = /^[1-9][0-9]*$/;

    calculateButton.addEventListener("click", function () {
        const quantityText = quantityInput.value.trim();

        errorMessage.textContent = "";

        if (!quantityPattern.test(quantityText)) {
            errorMessage.textContent =
                "Введите целое положительное количество без букв и других символов.";
            result.textContent = "Стоимость не рассчитана.";
            return;
        }

        const quantity = parseInt(quantityText, 10);
        const price = parseInt(productSelect.value, 10);
        const totalPrice = price * quantity;

        result.textContent = "Итоговая стоимость: " + totalPrice + " ₽.";
    });
});
