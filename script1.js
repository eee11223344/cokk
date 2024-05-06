const cartItems = [];
let totalPrice = 0;

function addToCart(course, quantity) {
    const item = { course, quantity };
    cartItems.push(item);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    totalPrice = 0;

    for (const item of cartItems) {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.course} x ${item.quantity}`;
        cartList.appendChild(listItem);

        totalPrice += parseInt(item.course) * item.quantity;
    }

    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

function clearCart() {
    cartItems.length = 0;
    updateCart();
}

function checkout() {
    alert(`Total Price: $${totalPrice.toFixed(2)}`);
}

function validateForm() {
    const course = document.getElementById("course").value;
    const quantity = document.getElementById("quantity").value;

    if (!course || !quantity) {
        alert("Please select a course and enter a quantity.");
        return false;
    }

    addToCart(course, quantity);
    return false; // Prevent form submission
}

function addTodo(event) {
    event.preventDefault();

    const todoInput = document.getElementById("todo-input");
    const todo = todoInput.value.trim();

    if (todo) {
        const todoList = document.getElementById("todo-list");
        const li = document.createElement("li");
        li.textContent = todo;
        todoList.appendChild(li);

        todoInput.value = "";
    }
}

document.querySelectorAll('.course-add-to-cart-btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const coursePrice = parseInt(btn.parentElement.textContent.split('$')[1].trim());
      addToCart(coursePrice, 1);
    });
  });

  