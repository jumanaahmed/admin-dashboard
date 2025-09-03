document.addEventListener("DOMContentLoaded", async () => {
    const tableBody = document.getElementById("products-table");

    try {
    const res = await fetch("https://dummyjson.com/products?limit=8");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { products } = await res.json();

    // عبّي الجدول
    tableBody.innerHTML = products.map(p => `
        <tr>
        <td>${p.title}</td>
        <td>$${Number(p.price).toLocaleString()}</td>
        <td>${p.stock}</td>
        </tr>
    `).join("");
    } catch (err) {
    console.error("Error loading products:", err);
    tableBody.innerHTML = `
        <tr>
            <td colspan="3">Failed to load products.</td>
        </tr>
    `;
    }
});
/*2 users */
document.addEventListener("DOMContentLoaded", async () => {
    const usersTable = document.getElementById("users-table");
    try {
    const res = await fetch("https://dummyjson.com/users?limit=10");
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

    const { users } = await res.json();
    usersTable.innerHTML = users.map(u => `
        <tr>
        <td>${u.firstName} ${u.lastName}</td>
        <td>${u.email}</td>
        <td>${u.phone}</td>
        </tr>
    `).join("");
    } catch (err) {
    console.error("Error loading users:", err);
    usersTable.innerHTML = `
        <tr>
            <td colspan="3">⚠️ Failed to load users</td>
        </tr>
    `;
    }
});

/*3 products*/
document.addEventListener("DOMContentLoaded", async () => {
    const tableBody = document.getElementById("products-table");

    try {
        const res = await fetch("https://dummyjson.com/products?limit=10");
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const { products } = await res.json();
        tableBody.innerHTML = products.map(p => `
            <tr>
                <td>${p.title}</td>
                <td>$${Number(p.price).toLocaleString()}</td>
                <td>${p.rating} ⭐</td>
                <td>${p.stock}</td>
                <td>${p.category}</td>
            </tr>
        `).join("");
        } catch (err) {
        console.error("Error loading products:", err);
        tableBody.innerHTML = `
            <tr>
                <td colspan="5">⚠️ Failed to load products</td>
            </tr>
        `;
        }
    });

/*3 charts*/

document.addEventListener("DOMContentLoaded", () => {

  // Users Chart (Bar)
    const usersCtx = document.getElementById('usersChart').getContext('2d');
    new Chart(usersCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
        label: 'Users',
        data: [50, 60, 70, 90, 100, 120],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderWidth: 1,
        barPercentage: 0.4,      
        categoryPercentage: 0.5 
        }]
    },
    options: {
        responsive: true,
        scales: {
        y: { beginAtZero: true }
        }
    }
    });

  // Products Chart (Line)
    const productsCtx = document.getElementById('productsChart').getContext('2d');
    new Chart(productsCtx, {
        type: 'line',
        data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
        label: 'Products',
        data: [20, 25, 30, 35, 40, 50],
        borderColor: 'rgba(255, 99, 132, 0.7)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3,
        pointRadius: 3,        
        pointHoverRadius: 5
    }]
    },
    options: {
        responsive: true,
        scales: {
        y: { beginAtZero: true }
        }
    }
    });

  // Revenue Chart (Pie)
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
    type: 'pie',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
        label: 'Revenue',
        data: [500, 600, 700, 800, 900, 1000],
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)'
        ],
        borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
    });
});


/*5 fav */

document.addEventListener("DOMContentLoaded", () => {
    const favTable = document.getElementById("favourites-table");
    const data = [
        { product: "Chanel No. 5", price: 120, count: 25 },
        { product: "Dior Sauvage", price: 95, count: 30 },
        { product: "Tom Ford Black Orchid", price: 150, count: 20 },
        { product: "Yves Saint Laurent Libre", price: 110, count: 15 },
        { product: "Gucci Bloom", price: 130, count: 18 }
    ];

    data.forEach(f => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${f.product}</td>
        <td>$${f.price}</td>
        <td>${f.count}</td>
    `;
    favTable.appendChild(row);
    });
});



/*6 settings*/
document.getElementById("settings-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Settings saved successfully!");
});
/**out */
document.querySelector(".out a").addEventListener("click", e => {
    e.preventDefault();
    localStorage.clear();
    alert("You have been logged out!");
    window.location.href = "index.html";
});

