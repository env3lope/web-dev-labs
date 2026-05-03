const productsTable = document.querySelector("#products");
const cartTable = document.querySelector("#cart");

const cart = {};

function updateCart() {
    const rows = cartTable.querySelectorAll("tr");
    rows.forEach((row, index) => {
        if (index !== 0) row.remove();
    });

    for (let product in cart) {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.textContent = product;

        const tdCount = document.createElement("td");
        tdCount.textContent = cart[product];

        tr.appendChild(tdName);
        tr.appendChild(tdCount);

        cartTable.appendChild(tr);
    }
}

productsTable.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
        return
    };
    const row = e.target.closest("tr");
    const productName = row.children[0].textContent;

    if (cart[productName]) {
        cart[productName]++;
    } else {
        cart[productName] = 1;
    }

    updateCart();
});
