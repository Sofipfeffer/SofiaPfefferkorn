// filters.js
document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".filter");
    const projects = document.querySelectorAll(".project");

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            const category = filter.getAttribute("data-category");

            // Activar botón seleccionado
            filters.forEach(f => f.classList.remove("active"));
            filter.classList.add("active");

            // Filtrar proyectos
            projects.forEach(project => {
                if (category === "all" || project.getAttribute("data-category") === category) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});
