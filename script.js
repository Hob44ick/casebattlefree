let money = 1000;
const items = [];

const possibleItems = [
    { name: "Нож | Гут", price: 10000, rarity: "rare" },
    { name: "AWP | Красная линия", price: 5000, rarity: "uncommon" },
    { name: "Перчатки | Спектр", price: 2000, rarity: "legendary" },
    { name: "UMP-45 | Хуйня", price: 500, rarity: "common" },
    { name: "AK-47 | Ягуар", price: 8000, rarity: "rare" },
];

function openCase(cost) {
    if (money < cost) {
        alert("Недостаточно денег!");
        return;
    }

    money -= cost;
    document.getElementById("money").textContent = money;

    const randomItem = possibleItems[Math.floor(Math.random() * possibleItems.length)];
    items.push(randomItem);

    updateInventory();

    alert(`Вы выиграли: ${randomItem.name} (${randomItem.price}$)`);
}

function updateInventory() {
    const inventoryDiv = document.getElementById("items");
    inventoryDiv.innerHTML = "";

    items.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "item";
        itemElement.innerHTML = `
            <p>${item.name}</p>
            <p>Цена: ${item.price}РУБЛИЙ (${item.rarity})</p>
        `;
        inventoryDiv.appendChild(itemElement);
    });
}
