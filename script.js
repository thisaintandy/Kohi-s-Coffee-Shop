function showPage(pageId) {
    // Hide all page content divs
    var pages = document.querySelectorAll('.page-content');
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    // Show the selected page content div
    var selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';
}

function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    } else {
        navLinks.classList.add('show');
    }
}
