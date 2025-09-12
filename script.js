let currentProduct = "";
let currentPrice = 0;
let currentImage = "";

function openForm(productName, productPrice, imageUrl) {
    currentProduct = productName;
    currentPrice = productPrice;
    currentImage = imageUrl;
    document.getElementById('orderForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('orderForm').style.display = 'none';
}

function submitOrder() {
    let name = document.getElementById('name').value.trim();
    let address = document.getElementById('address').value.trim();
    let contact1 = document.getElementById('contact1').value.trim();
    let contact2 = document.getElementById('contact2').value.trim();
    let payment = document.getElementById('payment').value;

    if(name === "" || address === "" || contact1 === "" || payment === "") {
        alert("Please fill all required fields.");
        return;
    }

    let message = `New Order from ${name}%0A` +
                  `Product: ${currentProduct}%0A` +
                  `Price: ₹${currentPrice}%0A` +
                  `Address: ${address}%0A` +
                  `Contact 1: ${contact1}%0A` +
                  `Contact 2: ${contact2}%0A` +
                  `Payment Option: ${payment}%0A` +
                  `Image: ${currentImage}`;

    let phone = "918828637261"; // यहाँ अपना WhatsApp नंबर डालें
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

    closeForm();
}
function searchProducts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let products = document.getElementById('productList').getElementsByClassName('product');

    for (let i = 0; i < products.length; i++) {
        let title = products[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.indexOf(input) > -1) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}
