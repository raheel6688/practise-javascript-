document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    setTimeout(() => {
        menuItems.forEach(item => {
            item.classList.add('show');
        });
    }, 100);

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute("data-category");

            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.classList.remove('hide');
                    setTimeout(() => item.classList.add('show'), 100);
                } else {
                    item.classList.remove('show');
                    setTimeout(() => item.classList.add('hide'), 100);
                }
            });
        });
    });
});
