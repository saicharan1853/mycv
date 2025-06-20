
function showsidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hidesidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}// script.js

// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Hide sidebar when an item is clicked (if it’s visible)
        hidesidebar();
    });
});

// Scroll animation functionality
const elementsToShow = document.querySelectorAll('.animate');

const showOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    elementsToShow.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', showOnScroll);
showOnScroll(); // Initial check when the page loads

// Optional: Highlight active link in the navigation based on scroll position
const navLinks = document.querySelectorAll('.navbar ul li a');
const sections = document.querySelectorAll('section');

const highlightActiveLink = () => {
    let scrollPos = window.scrollY + 200; // Adjust offset for active link
    sections.forEach((section) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightActiveLink);
