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
  document.getElementById("footer1").scrollIntoView({
    behavior: "smooth"
  });
});


document.addEventListener('DOMContentLoaded', () => {

  // Get the necessary elements from the HTML
  const sidebar = document.querySelector('.sidebar');
  const openBtn = document.querySelector('.fa-bars');
  const closeBtn = document.querySelector('.fa-xmark');
  const navLinks = document.querySelectorAll('.sidebar ul li a');

  // Function to show the sidebar
  const showSidebar = () => {
    sidebar.classList.add('active');
  };

  // Function to hide the sidebar
  const hideSidebar = () => {
    sidebar.classList.remove('active');
  };

  // --- EVENT LISTENERS ---

  // 1. Show sidebar when hamburger icon is clicked
  openBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the 'click outside' event from firing immediately
    showSidebar();
  });

  // 2. Hide sidebar when the close icon (X) is clicked
  closeBtn.addEventListener('click', hideSidebar);

  // 3. Hide sidebar when a navigation link inside it is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', hideSidebar);
  });

  // 4. Hide sidebar when clicking anywhere on the screen outside of it
  document.addEventListener('click', (event) => {
    // Check if the sidebar is active and the click was outside the sidebar
    if (sidebar.classList.contains('active') && !sidebar.contains(event.target)) {
      hideSidebar();
    }
  });
});