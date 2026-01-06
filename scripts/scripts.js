document.getElementById('hamburger').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav-open');
});

document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    document.querySelectorAll("tr.exam").forEach((row, index, rows) => {
        const td = row.querySelector("td[rowspan]");
        if (!td) return;

        const rowspan = parseInt(td.getAttribute("rowspan"), 10);
        let endRow = row;
        
        for (let i = 1; i < rowspan; i++) {
            if (rows[index + i]) {
                endRow = rows[index + i];
                rows[index + i].style.display = "none";
            }
        }

        const startDate = row.querySelector("th")?.textContent;
        const endDate = endRow.querySelector("th")?.textContent;

        const dateRange = document.createElement("div");
        dateRange.className = "exam-range";
        dateRange.textContent = `(${startDate} – ${endDate})`;

        td.appendChild(dateRange);
    });
});
