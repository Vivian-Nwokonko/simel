//line of code that makes search button work in tyres and battery.html
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




