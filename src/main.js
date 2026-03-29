const cards = document.querySelectorAll(".list__item");

import { showTotalPrice } from "./total.js";
import { showCount } from "./count.js";
import { showDiscount } from "./discount.js";

cards.forEach((card, idx) => {
  card.addEventListener("click", (e) => {
    const btn = e.target.closest(".list__add");

    if (!btn) return;

    const price = parseFloat(card.querySelector(".list__price").textContent);

    showTotalPrice(price);

    showCount();

    showDiscount();
  });
});
