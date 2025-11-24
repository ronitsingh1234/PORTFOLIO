const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

faders.forEach(el => observer.observe(el));

document.getElementById("gettouch").addEventListener("click", function () {
    const footer = document.getElementById("footer1");
    if(footer) {
        footer.scrollIntoView({ behavior: "smooth" });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const openBtn = document.querySelector('.fa-bars');
    const closeBtn = document.querySelector('.fa-xmark');
    const navLinks = document.querySelectorAll('.sidebar ul li a');

    const showSidebar = () => {
        sidebar.classList.add('active');
    };

    const hideSidebar = () => {
        sidebar.classList.remove('active');
    };

    if(openBtn) {
        openBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            showSidebar();
        });
    }

    if(closeBtn) {
        closeBtn.addEventListener('click', hideSidebar);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', hideSidebar);
    });

    document.addEventListener('click', (event) => {
        if (sidebar.classList.contains('active') && !sidebar.contains(event.target)) {
            hideSidebar();
        }
    });
});
