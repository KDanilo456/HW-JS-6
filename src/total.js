export const showTotalPrice = price => {
    const totalPrice = document.querySelector('.total-price');

    totalPrice.textContent = `${parseFloat(totalPrice.textContent) + price} грн`;
}