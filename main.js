const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("show");
        let panel = button.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";            
        }
    });
});