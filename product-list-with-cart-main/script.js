document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((desserts) => {
      let menu = document.getElementById("dessert-menu");
      desserts.forEach((dessert) => {
        let dessertItem = document.createElement("div");
        dessertItem.classList.add("dessertItem");
        let dessertImg = document.createElement("img");
        dessertImg.classList.add("dessertImg");
        dessertImg.alt = dessert.name;
        function updateImg() {
          if (window.matchMedia("(max-width: 600px)").matches) {
            dessertImg.src = dessert.image.mobile;
          } else if (
            window.matchMedia("(min-width: 601px) and (max-width: 1000px)")
              .matches
          ) {
            dessertImg.src = dessert.image.tablet;
          } else {
            dessertImg.src = dessert.image.desktop;
          }
        }

        // Add event listeners correctly
        window.addEventListener("resize", updateImg);
        window.addEventListener("load", updateImg);

        // Initial check to set the correct image source
        updateImg();
        let addCartBtn = document.createElement("button");
        addCartBtn.classList.add("addCartBtn");
        let description = document.createElement("div");
        description.classList.add("description");
        addCartBtn.textContent = "Add to Cart";
        let dessertCategory = document.createElement("p");
        dessertCategory.textContent = dessert.category;
        let dessertName = document.createElement("h3");
        dessertName.textContent = dessert.name;
        let dessertPrice = document.createElement("h5");
        dessertPrice.textContent = `$${dessert.price.toFixed(2)}`;
        description.appendChild(dessertCategory);
        description.appendChild(dessertName);
        description.appendChild(dessertPrice);
        dessertItem.appendChild(dessertImg);
        dessertItem.appendChild(addCartBtn);
        dessertItem.appendChild(description);
        menu.appendChild(dessertItem);
        addCartBtn.addEventListener("click", () => {
          addCartBtn.textContent = "1";
          document.getElementById("cart");
          document.getElementById("countItems");
        });
      });
    })
    .catch((error) => console.error("Error fetching the JSON data:", error));
});
