document.getElementById("openTicketModal").addEventListener("click", () => {
    const title = prompt("أدخل عنوان المشكلة:");
    if(title) {
        const grid = document.getElementById("ticketsGrid");
        const card = document.createElement("div");
        card.className = "ticket-card";
        card.innerHTML = `
            <span class="status pending">قيد الانتظار</span>
            <h4>${title}</h4>
            <p>القسم: صيانة عامة</p>
            <small>تاريخ الطلب: اليوم</small>
        `;
        grid.prepend(card);
    }
});