document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("senderName").value.trim();
            const email = document.getElementById("senderEmail").value.trim();
            const message = document.getElementById("senderMsg").value.trim();
            const subject = encodeURIComponent(`Contacto Portafolio YuliDev - ${name}`);
            const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);
            window.location.href = `mailto:yuliannysoto4@gmail.com?subject=${subject}&body=${body}`;
        });
    }
});

function copyEmail() {
    navigator.clipboard.writeText("yuliannysoto4@gmail.com");
    const btn = document.getElementById("copyBtn");
    btn.textContent = "¡Correo copiado! ✓";
    setTimeout(() => {
        btn.textContent = "yuliannysoto4@gmail.com";
    }, 2500);
}
