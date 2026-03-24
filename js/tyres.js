

//line of code that controls the auto typing effect on the hero section
 var typed = new Typed('.auto-type',{
      strings: ['TYRES AND BATTERIES', 'CAR WHEELS', 'CAR FLUIDS & CHEMICALS', 'CAR ACCESORIES' ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true 
  })
  


  //line of code that controls the count upwards of numbers in the home page,
  //for the counter that will stop at 20000

  let counts = setInterval(updated);
  let upto = 0;
  function updated() {
      let count = document.getElementById("counter");
      count.innerHTML = ++upto;
      if (upto === 20000) {
          clearInterval(counts);
      }
  }

  
// for counter2 on numbers in home page
 //for the counter that will stop at 10000

let mounts = setInterval(updates);
let uptod = 0;
function updates() {
    let mount = document.getElementById("counter2");
    mount.innerHTML = ++uptod;
    if (uptod === 10000) {
        clearInterval(mounts);
    }
}


// js for owlcarousel slider in services on home page

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        slideBy: 2,
        margin: 10,
        autoplay: true,
        items: 2, //this is what makes the image display two at a time. 

        
        
    })
})



    // javascript code for searchbuton for tyres.html and battery.html

    // 

//javascript code for selecting all products, that helps you select  tyres or wheels
//  in the pictures...tyres.html
    
    const filterSelect = document.getElementById("filterSelect");
    const productCards = document.querySelectorAll(".card");

    filterSelect.addEventListener("change", function () {
        const selectedCategory = this.value;

        productCards.forEach(function (card) {
            const cardCategory = card.getAttribute("data-category");

            if (selectedCategory === "all" || cardCategory === selectedCategory) {
                card.parentElement.style.display = "block";
            } else {
                card.parentElement.style.display = "none";
            }
        });
    });


//javascript code that enables a .json so that add to cart values are saved locally in
//your cart without backend feautures..aids in the add to cat button functionality
// function addToCart(productName, price) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const existingProduct = cart.find(item => item.productName === productName);
  
//   if (existingProduct) {
//     existingProduct.quantity += 1;
//   } else {
//     cart.push({ productName, price, quantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   alert(`${productName} added to cart successfully!`);
// }
