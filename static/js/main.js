document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item")
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button></span>"`;
    });

    carousel.insertAdjacentHTML("beforend", `
    <div class="carousel-nav">
        ${buttonHtml.join("")}
    </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel-button");
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            //un-select all the items
            items.forEach(item => item.classList.remove("carousel-item--selected"));
            buttons.forEach(button => buttonclassList.remove("carousel-button--selected"));
        
            items[i].classList.add("carousel-item--selected");
            button.classList.add("carousel-button--selected");
        });
    });

    //first item selected
    items[0].classList.add("carousel-item--selected");
    button[0].classList.add("carousel-button--selected");
});