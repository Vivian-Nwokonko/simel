

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

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resetButton = document.getElementById("resetButton");
    const products = document.querySelectorAll(".card");
    const noResults = document.getElementById("noResults");

    searchButton.addEventListener("click", function () {
        const searchValue = searchInput.value.trim().toLowerCase();
        let found = false;

        products.forEach(function (product) {
            const title = product.querySelector("h5").innerText.toLowerCase();
            const description = product.querySelector("p")?.innerText.toLowerCase() || "";

            if (title.includes(searchValue) || description.includes(searchValue)) {
                product.parentElement.style.display = "block";
                found = true;
            } else {
                product.parentElement.style.display = "none";
            }
        });

        noResults.style.display = found ? "none" : "block";
    });

    resetButton.addEventListener("click", function () {
        searchInput.value = "";
        noResults.style.display = "none";

        products.forEach(function (product) {
            product.parentElement.style.display = "block";
        });
    });







