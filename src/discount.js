export const showDiscount = () => {
  const totalPrice = document.querySelector(".total-price");
  const count = document.querySelector(".count-number");

  if (Number(count.textContent) % 10 === 0) {
    totalPrice.textContent = `${parseFloat(totalPrice.textContent) - 100} грн`;
  }
};
