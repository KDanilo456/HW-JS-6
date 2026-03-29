let counter = 0;

export const showCount = () => {
  const count = document.querySelector(".count-number");

  counter++;

  count.textContent = counter;
};
