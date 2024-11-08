const listElement = document.getElementById("list");
const formElement = document.getElementById("grocery");
const selectElement = document.getElementById("colorSelect");

// initialize items array with preset items
let items = 
[
    { name: "Milk", purchased: false },
    { name: "Bread", purchased: false },
    { name: "Eggs", purchased: true },
    { name: "Apples", purchased: false },
    { name: "Chicken", purchased: true }
];

// input the initial list of items
renderList();

// form submission
formElement.addEventListener("submit", addItem);
selectElement.addEventListener("change", filterItems);

function addItem(event) 
{
    event.preventDefault();
    const itemValue = document.getElementById("user").value.trim();
    if (itemValue) 
        {
            // tracking items
            const item = 
            {
                name: itemValue,
                purchased: false
            };
            items.push(item); // more item tracking

            renderList(); // updating list
            document.getElementById("user").value = ''; // clear the input
        }
}

function renderList(filter = "all") 
{
    listElement.innerHTML = ''; // clear the current list

    // loop through items array and add them to the list based on the filter
    //**Used internet for this**
    items.forEach((item, index) => {
        if ((filter === "purchased" && !item.purchased) || (filter === "items-left" && item.purchased)) {
            return; // Skip items that don't match the filter
        }

        // create list item element
        const li = document.createElement("li");
        li.textContent = item.name;
        li.classList.toggle("crossed", item.purchased); // add strikethrough

        li.addEventListener("click", () => 
            {
                item.purchased = !item.purchased;
                renderList(filter); // updates list
            });

        // add remove button for each item
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.style.borderRadius = "10px";
        removeButton.addEventListener("click", () => 
            {
                items.splice(index, 1); // Remove item from the array
                renderList(filter); // Re-render list to update display
            });

        // wrap list item and button in a div for styling
        const itemDiv = document.createElement("div");
        itemDiv.style.display = "flex";
        itemDiv.style.justifyContent = "space-between";
        itemDiv.style.alignItems = "center";
        itemDiv.appendChild(li);
        itemDiv.appendChild(removeButton);

        listElement.appendChild(itemDiv); // append to the main list
    });
}

// update displayed items based on dropdown filter
function filterItems() {
    const filter = selectElement.value;
    //**Used internet for this**
    formElement.style.display = filter === "add-item" ? "flex" : "none"; // Show form only for "Add items"
    renderList(filter); //update list based on filter
}
