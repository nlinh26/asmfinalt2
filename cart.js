// cart.js
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    // Lấy thông tin giỏ hàng từ localStorage (nếu có)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Cập nhật giỏ hàng hiển thị trên giao diện
    function updateCartCount() {
        const cartCount = document.querySelector(".cart-count");
        // Cập nhật số lượng tổng cộng của các sản phẩm trong giỏ hàng
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;  // Cập nhật số lượng vào thẻ .cart-count
    }

    // Cập nhật giao diện giỏ hàng (hiển thị giỏ hàng khi người dùng nhấn vào)
    function updateCartDisplay() {
        const cartContainer = document.getElementById("cart-container");
        cartContainer.innerHTML = ""; // Làm mới giỏ hàng trước khi cập nhật

        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");

            cartItem.innerHTML = `
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Price: ${item.price.toLocaleString()}₫</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>
            `;

            cartContainer.appendChild(cartItem);
        });
    }

    // Thêm sản phẩm vào giỏ hàng
    function addToCart(productName, productPrice) {
        const product = {
            name: productName,
            price: parseInt(productPrice),
        };

        const existingProductIndex = cart.findIndex(item => item.name === product.name);
        if (existingProductIndex >= 0) {
            // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng lên
            cart[existingProductIndex].quantity += 1;
        } else {
            // Nếu sản phẩm chưa có, thêm mới vào giỏ
            cart.push({...product, quantity: 1});
        }

        // Lưu giỏ hàng vào localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Cập nhật số lượng giỏ hàng và giao diện giỏ hàng
        updateCartCount();
        updateCartDisplay();
    }

    // Xử lý khi nhấn nút "Thêm vào giỏ hàng"
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productName = button.getAttribute("data-name");
            const productPrice = button.getAttribute("data-price");
            addToCart(productName, productPrice);
        });
    });

    // Cập nhật số lượng giỏ hàng khi trang được tải
    updateCartCount();
    updateCartDisplay();
});
