function showPage(pageId) {
    // Hide all pages
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
        pages[i].classList.remove('slide-left', 'slide-right');
    }

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';

    //animasi pindah halaman
    selectedPage.classList.add('slide-right');
    setTimeout(() => {
        selectedPage.classList.remove('slide-right');
    }, 500); // delay 500ms (0.5s)
}