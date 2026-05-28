const list = document.querySelector("#list");
list.addEventListener("click", (e) => {
    const book = e.target.closest(".book");
    if (!book) return;

    const prev = document.querySelector(".book.active");
    if (prev && prev !== book) {
        prev.classList.remove("active");
    }

    book.classList.add("active");
});