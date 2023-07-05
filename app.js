const popUpOpen = document.getElementById("pop_up__open");
const popUpClose = document.getElementById("pop_up__close");
const popUp = document.getElementById("pop_up");

popUpOpen.addEventListener("click", function(e) {
    e.preventDefault();
    popUp.classList.add("active");
})

popUpClose.addEventListener("click", () => {
    popUp.classList.remove("active");
})