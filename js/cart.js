


// cart-handler.js

// document.addEventListener("DOMContentLoaded", () => {
//     // Get all "Add to Cart" buttons across any page
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");

//     if (addToCartButtons.length === 0) return; // no products on this page

//     addToCartButtons.forEach(button => {
//         button.addEventListener("click", (e) => {
//             e.preventDefault();

//             const card = e.target.closest(".card-body");
//             if (!card) return;

//             // Get product name (works for both <p> or <h5> tags)
//             const nameEl = card.querySelector("p.fw-bold, h5.fw-bold, h5.pt-1");
//             if (!nameEl) {
//                 alert("Error: Product name not found.");
//                 return;
//             }
//             const productName = nameEl.textContent.trim();

//             // Find dropdown (if exists)
//             const select = card.querySelector("select");
//             let price = 0;
//             let priceText = "";

//             if (select) {
//                 const selectedOption = select.options[select.selectedIndex].text;
//                 const priceMatch = selectedOption.match(/NGN\s?([\d,]+)/i);
//                 if (priceMatch) {
//                     price = parseInt(priceMatch[1].replace(/,/g, ""));
//                     priceText = selectedOption;
//                 } else {
//                     alert("Please select a valid price before adding to cart.");
//                     return;
//                 }
//             } else {
//                 // No select dropdown (e.g. tyres or batteries)
//                 const priceTag = card.querySelector(".price, .fw-bold.price, span.price");
//                 if (priceTag) {
//                     const match = priceTag.textContent.match(/NGN\s?([\d,]+)/i);
//                     if (match) price = parseInt(match[1].replace(/,/g, ""));
//                 }
//             }

//             if (!price) {
//                 alert("Please select or verify a price before adding to cart.");
//                 return;
//             }

//             const product = {
//                 productName,
//                 price,
//                 quantity: 1
//             };

//             // Retrieve cart
//             let cart = JSON.parse(localStorage.getItem("cart")) || [];

//             // Check if already in cart
//             const existingItem = cart.find(item => item.productName === product.productName);
//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 cart.push(product);
//             }

//             // Save cart
//             localStorage.setItem("cart", JSON.stringify(cart));

//             // Confirm
//             alert(`${productName} added to cart successfully!`);
//         });
//     });
// });


// cart-handler.js

// document.addEventListener("DOMContentLoaded", () => {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");

//     addToCartButtons.forEach(button => {
//         button.addEventListener("click", (e) => {
//             e.preventDefault();

//             const card = e.target.closest(".card-body");
//             if (!card) {
//                 console.log("❌ No card body found");
//                 return;
//             }

//             // 🔍 Get product name from <p> or <h5>
//             const nameEl = card.querySelector("p.fw-bold, h5.fw-bold, h5.pt-1, p.pt-1");
//             console.log("CARD:", card);
//             console.log("NAME ELEMENT:", nameEl);

//             if (!nameEl) {
//                 alert("❌ Product name not found!");
//                 return;
//             }

//             const productName = nameEl.textContent.trim();
//             console.log("✅ Product Name:", productName);

//             // 🔍 Get selected option price
//             const select = card.querySelector("select");
//             if (!select) {
//                 alert("❌ No price selector found!");
//                 return;
//             }

//             const selectedText = select.options[select.selectedIndex].text;
//             console.log("Selected Option:", selectedText);

//             const match = selectedText.match(/NGN\s?([\d,]+)/i);
//             if (!match) {
//                 alert("⚠️ Please select a valid price before adding to cart.");
//                 return;
//             }

//             const price = parseInt(match[1].replace(/,/g, ""));
//             console.log("✅ Price:", price);

//             const product = {
//                 productName,
//                 price,
//                 quantity: 1
//             };

//             let cart = JSON.parse(localStorage.getItem("cart")) || [];

//             const existingItem = cart.find(item => item.productName === product.productName);
//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 cart.push(product);
//             }

//             localStorage.setItem("cart", JSON.stringify(cart));

//             alert(`${productName} added to cart successfully!`);
//         });
//     });
// });


// cart.js

// document.addEventListener("DOMContentLoaded", () => {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");
//     const cartCountEl = document.getElementById("cart-count");

//     // Function to update the cart counter in navbar
//     function updateCartCount() {
//         const cart = JSON.parse(localStorage.getItem("cart")) || [];
//         const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//         if (cartCountEl) {
//             cartCountEl.textContent = totalItems;
//         }
//     }

//     // Run it once when page loads
//     updateCartCount();

//     addToCartButtons.forEach(button => {
//         button.addEventListener("click", (e) => {
//             e.preventDefault();

//             const card = e.target.closest(".card-body");
//             const productName = card.querySelector("p.fw-bold").textContent.trim();
//             const select = card.querySelector("select");

//             if (!select || !select.value) {
//                 alert("Please select a price/size before adding to cart.");
//                 return;
//             }

//             const price = parseInt(select.value);

//             const product = {
//                 productName,
//                 price,
//                 quantity: 1
//             };

//             let cart = JSON.parse(localStorage.getItem("cart")) || [];

//             // Check if product already exists
//             const existingProduct = cart.find(item =>
//                 item.productName === product.productName && item.price === product.price
//             );

//             if (existingProduct) {
//                 existingProduct.quantity += 1;
//             } else {
//                 cart.push(product);
//             }

//             localStorage.setItem("cart", JSON.stringify(cart));

//             updateCartCount(); // 🔥 Update counter immediately

//             alert(`${productName} added to cart!`);
//         });
//     });
// });


// cart.js

// document.addEventListener("DOMContentLoaded", () => {
//   const addToCartButtons = document.querySelectorAll(".add-to-cart");
//   const cartCountEl = document.getElementById("cart-count");

//   // ✅ Function to update the cart count badge
//   function updateCartCount() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//     if (cartCountEl) {
//       cartCountEl.textContent = totalItems;
//       cartCountEl.style.display = totalItems > 0 ? "inline-block" : "none";
//     }
//   }

//   // Run when page loads
//   updateCartCount();

//   // ✅ Add to Cart Function
//   addToCartButtons.forEach(button => {
//     button.addEventListener("click", (e) => {
//       e.preventDefault();

//       const card = e.target.closest(".card-body");
//       const productName =
//         card.querySelector("h5, h4, .product-name")?.textContent.trim() || "Unknown Product";
//       const priceText =
//         card.querySelector("p, .price")?.textContent.trim() || "₦0";

//       // Extract price (convert “NGN 50,000” → 50000)
//       const price = parseInt(priceText.replace(/[^0-9]/g, ""));

//       if (isNaN(price)) {
//         alert("Invalid price format for " + productName);
//         return;
//       }

//       const product = {
//         productName,
//         price,
//         quantity: 1
//       };

//       let cart = JSON.parse(localStorage.getItem("cart")) || [];

//       // If item exists, increase quantity instead
//       const existingProduct = cart.find(
//         item => item.productName === product.productName && item.price === product.price
//       );

//       if (existingProduct) {
//         existingProduct.quantity += 1;
//       } else {
//         cart.push(product);
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));

//       updateCartCount();
//       alert(`${productName} added to cart!`);
//     });
//   });
// });


// fluid.js

// document.querySelectorAll(".add-to-cart").forEach(button => {
//   button.addEventListener("click", () => {
//     const card = button.closest(".card-body");
//     const name = card.querySelector("p").textContent.trim(); // ✅ changed from h5 to p
//     const select = card.querySelector("select");
//     const selectedOption = select.options[select.selectedIndex].text;
//     const priceMatch = selectedOption.match(/NGN([\d,]+)/i);
//     const price = priceMatch ? parseInt(priceMatch[1].replace(/,/g, "")) : 0;
//     const image = card.querySelector("img").src;

//     if (!price) {
//       alert("Please select a valid price option.");
//       return;
//     }

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     const existingItem = cart.find(item => item.name === name && item.selectedOption === selectedOption);

//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       cart.push({
//         name,
//         image,
//         price,
//         selectedOption,
//         quantity: 1
//       });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert(`${name} (${selectedOption}) added to cart!`);
//   });
// });


// ✅ Universal Add to Cart Script (works for all pages)
// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".add-to-cart");

//   buttons.forEach(button => {
//     button.addEventListener("click", () => {
//       const card = button.closest(".card-body");

//       // ✅ Get product name (works for <h5> or <p>)
//       const nameEl = card.querySelector("h5, p");
//       const name = nameEl ? nameEl.textContent.trim() : "Unnamed Product";

//       // ✅ Get image
//       const image = card.querySelector("img")?.src || "";

//       // ✅ Get selected option and extract price
//       const select = card.querySelector("select");
//       const selectedOption = select ? select.options[select.selectedIndex].text : "";
//       const priceMatch = selectedOption.match(/NGN([\d,]+)/i);
//       const price = priceMatch ? parseInt(priceMatch[1].replace(/,/g, "")) : 0;

//       if (!price) {
//         alert("⚠️ Please select a valid price option before adding to cart.");
//         return;
//       }

//       // ✅ Load or initialize cart
//       let cart = JSON.parse(localStorage.getItem("cart")) || [];

//       // ✅ Check if product already exists (same name + option)
//       const existingItem = cart.find(
//         item => item.name === name && item.selectedOption === selectedOption
//       );

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         cart.push({
//           name,
//           image,
//           price,
//           selectedOption,
//           quantity: 1
//         });
//       }

//       // ✅ Save to localStorage
//       localStorage.setItem("cart", JSON.stringify(cart));

//       // ✅ Confirmation message
//       alert(`🛒 ${name} (${selectedOption}) added to cart!`);
//     });
//   });
// });



// ✅ Universal Add to Cart Script (handles both <select> and <p> prices)
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".card-body");

      // ✅ Get product name (<h5> or <p>)
      const nameEl = card.querySelector("h5, p");
      const name = nameEl ? nameEl.textContent.trim() : "Unnamed Product";

      // ✅ Get image
      const image = card.querySelector("img")?.src || "";

      // ✅ Try to find price from <select> OR <p>
      let price = 0;
      let selectedOption = "";

      const select = card.querySelector("select");
      if (select) {
        // Case 1: price inside <select>
        selectedOption = select.options[select.selectedIndex].text;
        const priceMatch = selectedOption.match(/NGN\s?([\d,]+)/i);
        price = priceMatch ? parseInt(priceMatch[1].replace(/,/g, "")) : 0;
      } else {
        // Case 2: price inside <p> (e.g. "₦40,000" or "NGN 40000")
        const priceText = card.querySelector("p")?.textContent || "";
        const priceMatch = priceText.match(/(?:₦|NGN)\s?([\d,]+)/i);
        price = priceMatch ? parseInt(priceMatch[1].replace(/,/g, "")) : 0;
        selectedOption = "Default";
      }

      if (!price) {
        alert("⚠️ Please select a valid price or product option before adding to cart.");
        return;
      }

      // ✅ Load or initialize cart
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // ✅ Check if item already exists
      const existingItem = cart.find(
        item => item.name === name && item.selectedOption === selectedOption
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          name,
          image,
          price,
          selectedOption,
          quantity: 1
        });
      }

      // ✅ Save to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`🛒 ${name} (${selectedOption}) added to cart!`);
    });
  });
});


//manages the badge on cart icon


function updateCartBadge() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

// After localStorage.setItem("cart", JSON.stringify(cart));
updateCartBadge();

// And also when the page first loads
updateCartBadge();