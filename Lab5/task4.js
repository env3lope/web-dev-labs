document.querySelectorAll(".delete").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".block").remove();
    });
});

document.querySelectorAll(".edit").forEach(btn => {
    btn.addEventListener("click", () => {
        const block = btn.closest(".block");
        const textDiv = block.querySelector(".text");
        const textarea = document.createElement("textarea");

        textarea.value = textDiv.textContent;
        textDiv.replaceWith(textarea);
        textarea.focus();

        textarea.addEventListener("blur", () => {
            const newDiv = document.createElement("div");
            newDiv.className = "text";
            newDiv.textContent = textarea.value;

            textarea.replaceWith(newDiv);
        });
    });

});