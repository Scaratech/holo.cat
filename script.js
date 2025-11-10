const images = [
    'assets/bunny.jpg',
    'assets/miku-1.jpg',
    'assets/miku-2.jpg',
    'assets/miku-3.jpg',
    'assets/miku-4.jpg',
    'assets/miku-5.jpg',
    'assets/miku-6.jpg',
    'assets/monster.png',
    'assets/workstation.jpg'
];

function shuffle(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

const shuffledImages = shuffle(images);
const carousel = document.querySelector('.carousel');
const track = document.querySelector('.carousel-track');
const viewport = document.querySelector('.carousel-viewport');

if (carousel && track && viewport) {
    carousel.style.display = 'flex';

    let page = 0;
    const pages = [];

    for (let i = 0; i < shuffledImages.length; i++) {
        const pageEl = document.createElement('div');
        pageEl.className = 'carousel-page';

        const img = document.createElement('img');
        img.src = shuffledImages[i];
        img.alt = '';

        pageEl.appendChild(img);
        pages.push(pageEl);
        track.appendChild(pageEl);
    }

    function update() {
        const w = viewport.clientWidth;
        track.style.transform = `translateX(${-page * w}px)`;

        document.querySelector('.carousel-btn.prev').disabled = page === 0;
        document.querySelector('.carousel-btn.next').disabled = page === pages.length - 1;
    }

    window.addEventListener('resize', update);

    document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
        if (page > 0) {
            page -= 1;
            update();
        }
    });

    document.querySelector('.carousel-btn.next').addEventListener('click', () => {
        if (page < pages.length - 1) {
            page += 1;
            update();
        }
    });

    update();
}