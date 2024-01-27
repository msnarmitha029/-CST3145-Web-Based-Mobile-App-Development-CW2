document.addEventListener("DOMContentLoaded", function() {
    const activityList = document.getElementById("activity-list");
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    const checkoutButton = document.getElementById("checkout-button");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    let cart = [];
    let total = 0;

    const activities = [
        {
            
            name: "Math Club",
            description: "Join our Math Club to improve your math skills.",
            price: 6.99,
            location: "Harrow",
            stock: 5,
        },
        {
            name: "Art Club",
            description: "Unleash your creatvitity in our club.",
            price: 8.99,
            location: "Lutton",
            stock: 8,
        },
        {
            name: "English Club",
            description: "Join our English Club to improve your reading/writing and speaking skills.",
            price: 10.99,
            location: "Hendon",
            stock: 6,
        },
        {
        name: "Biology Club",
            description: "Join our Biology Club to improve your biology skills.",
            price: 5.99,
            location: "Wembley",
            stock: 9,
        },
        {
            name: "Chemistry Club",
                description: "Join our Chemistry Club to improve your chemistry skills.",
                price: 6.99,
                location: "Harrow",
                stock: 6,
         },
         {
            name: "Physics Club",
                description: "Join our Physics Club to improve your physics skills.",
                price: 10.99,
                location: "Neasden",
                stock: 8,
            },
            {
                name: "Spanish Club",
                    description: "Join our Spanish Club to improve your reading/writing and speaking skills.",
                    price: 8.99,
                    location: "Alperton",
                    stock: 5,
                },
                {
                    name: "French Club",
                        description: "Join our French Club to improve your reading/writing and speaking skills.",
                        price: 10.99,
                        location: "Hendon",
                        stock: 5,
                    },
                    {
                        name: "CS Club",
                            description: "Join our CS Club to improve your cs skills.",
                            price: 5.99,
                            location: "Wembley",
                            stock: 8,
                        },
                        {
                            name: "Geography Club",
                                description: "Join our Geography Club to improve your geography skills.",
                                price: 6.99,
                                location: "Harrow",
                                stock: 8,
                            },
                        ];

    function createActivityCard(activity) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${activity.name}</h3>
            <p class="description">${activity.description}</p>
            <p class="price">Price: £${activity.price.toFixed(2)}</p>
            <p class="location">Location: ${activity.location}</p>
            <p class="stock">Only ${activity.stock} left</p>
            <button class="add-to-cart-button" data-activity="${activity.name}">Add to Cart</button>
        `;
        activityList.appendChild(listItem);

        const addToCartButton = listItem.querySelector(".add-to-cart-button");
        addToCartButton.addEventListener("click", () => {
            if (activity.stock > 0) {
                cart.push(activity);
                total += activity.price;
                activity.stock--;
                updateCartDisplay();
            }
        });
    }

    function updateCartDisplay() {
        cartItems.innerHTML = "";
        cart.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item.name;

            // Add a "Remove" button for each item in the cart
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => {
                removeFromCart(item);
            });

            listItem.appendChild(removeButton);
            cartItems.appendChild(listItem);
        });

        totalElement.textContent = `Total: £${total.toFixed(2)}`;
    }

    function removeFromCart(item) {
        const index = cart.indexOf(item);
        if (index > -1) {
            cart.splice(index, 1);
            total -= item.price;
            item.stock++;
            updateCartDisplay();
        }
    }

    function filterActivities(searchText) {
        activityList.innerHTML = ""; // Clear the current list

        activities.forEach(activity => {
            if (activity.name.toLowerCase().includes(searchText.toLowerCase())) {
                createActivityCard(activity);
            }
        });
    }

    searchButton.addEventListener("click", () => {
        const searchText = searchInput.value;
        filterActivities(searchText);
    });

    // Handle pressing Enter key in the search input
    searchInput.addEventListener("keyup", event => {
        if (event.key === "Enter") {
            const searchText = searchInput.value;
            filterActivities(searchText);
        }
    });

    activities.forEach(createActivityCard);

    checkoutButton.addEventListener("click", () => {
        // Implement checkout functionality here
        alert("Checkout functionality needs to be implemented.");
    });
});
function search() {
    event.preventDefault(); // Prevent the form from submitting

    var searchInput = document.getElementById('search-input').value.toLowerCase(); // Get the search query and convert to lowercase for case-insensitive search
    var activityList = document.getElementById('activity-list');

    // Loop through the list items and hide/show them based on the search query
    var items = activityList.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemText = item.textContent.toLowerCase();

        if (itemText.includes(searchInput)) {
            item.style.display = 'list-item'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    }
}
function toggleCheckoutForm() {
    var checkoutForm = document.getElementById("checkout-form");
  
    if (checkoutForm.style.display === "none" || checkoutForm.style.display === "") {
      checkoutForm.style.display = "block"; // Show the form
    } else {
      checkoutForm.style.display = "none"; // Hide the form
    }
  }
  
