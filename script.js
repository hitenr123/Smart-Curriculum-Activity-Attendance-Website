// ================= DATE =================

const dateElement = document.getElementById("currentDate");

const today = new Date();

const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

dateElement.textContent =
    today.toLocaleDateString("en-GB", options);


// ================= SIDEBAR =================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {

    sidebar.classList.toggle("open");

});