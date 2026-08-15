async function LoadPage(pageName) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    const target = document.getElementById(pageName);
    if (target) {
        target.style.display = '';
        const heading = target.querySelector('h2');
        if (heading) {
            document.title = `Music Production | ${heading.textContent}`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    LoadPage('HOME');
});