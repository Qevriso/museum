document.querySelectorAll("[data-include]").forEach(async el => {
    const file = el.getAttribute("data-include");
    try {
        const response = await fetch(file + '?v=' + Date.now());
        const html = await response.text();
        el.innerHTML = html;
    } catch (e) {
        el.innerHTML = "<div style='color:red'>Ошибка загрузки секции: " + file + "</div>";
    }
});
