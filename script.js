document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const homeLink = document.getElementById('homeLink');
    const aboutLink = document.getElementById('aboutLink');
    const yearEl = document.getElementById('footerYear');
    const articleContent = document.getElementById('articleContent');

    const articles = [
        {
            title: "The Art of Simplicity",
            content: "<p>Simplicity is the ultimate sophistication...</p>"
        },
        {
            title: "Focus in a Distracted World",
            content: "<p>In a world filled with noise, true focus is rare...</p>"
        },
        {
            title: "Designing Without Color",
            content: "<p>Sometimes grayscale can speak louder than colors...</p>"
        }
    ];

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    function showPage(id) {
        pages.forEach(page => {
            page.style.display = 'none';
        });
        const pageToShow = document.getElementById(id);
        if (pageToShow) {
            pageToShow.style.display = 'block';
        }
    }

    if (homeLink) {
        homeLink.onclick = () => showPage('homePage');
    }

    if (aboutLink) {
        aboutLink.onclick = () => showPage('aboutPage');
    }

    function openArticle(id) {
        const article = articles[id];
        if (article && articleContent) {
            articleContent.innerHTML = `
                <h2>${article.title}</h2>
                ${article.content}
                <button id="backBtn">← Back to Home</button>
            `;
            showPage('articlePage');

            const newBackBtn = document.getElementById('backBtn');
            if (newBackBtn) {
                newBackBtn.onclick = () => showPage('homePage');
            }
        }
    }

    const filterInput =
        document.getElementById('filterInput');
    const listItems =
        document.querySelectorAll('.listItem');

    filterInput.addEventListener('input', function () {
        const filterValue = filterInput.value.toLowerCase();
        listItems.forEach(function (item) {
            const text = item.innerText.toLowerCase();
            if (text.includes(filterValue)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });

    window.openArticle = openArticle;
    showPage('homePage');
});
