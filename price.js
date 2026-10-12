const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");

    mobileMenu.classList.toggle("open");

});



const menuLinks =
    document.querySelectorAll(".mobile-menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuBtn.classList.remove("active");

        mobileMenu.classList.remove("open");

    });

});



const modal =
    document.getElementById("planModal");

const closeModal =
    document.getElementById("closeModal");

const selectedPlan =
    document.getElementById("selectedPlan");

const planButtons =
    document.querySelectorAll(".plan-btn");


planButtons.forEach(button => {

    button.addEventListener("click", () => {

        const plan =
            button.getAttribute("data-plan");

        selectedPlan.textContent = plan;

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});



closeModal.addEventListener("click", closePlanModal);



modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closePlanModal();

    }

});



document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closePlanModal();

    }

});


function closePlanModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}
