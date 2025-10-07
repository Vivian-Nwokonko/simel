document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".card"); // ✅ Changed from .card-body
      const name = card.querySelector("h5") ? card.querySelector("h5").textContent.trim() : "Unknown Product";
      const image = card.querySelector("img") ? card.querySelector("img").src : "";
      const select = card.querySelector("select");
      const selectedOption = select.options[select.selectedIndex].text;

      if (selectedOption === "PRICES") {
        alert("Please select a price before adding to cart.");
        return;
      }

      const priceText = selectedOption.split(" - ")[1];
      const price = parseInt(priceText.replace(/[^0-9]/g, ""));

      const product = {
        name: name,
        image: image,
        price: price,
        selectedOption: selectedOption,
        quantity: 1,
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItem = cart.find(
        (item) => item.name === product.name && item.selectedOption === product.selectedOption
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));

     alert(`[BATTERY.JS] ${product.name} (${product.selectedOption}) added to cart!`);

    });
  });
});
