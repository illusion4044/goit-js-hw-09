import SimpleLightbox from 'simplelightbox'; // Імпорт бібліотеки
import 'simplelightbox/dist/simple-lightbox.min.css'; // Імпорт CSS

const images = [
    {
        preview: 'https://via.placeholder.com/150', // Посилання на мініатюру
        original: 'https://via.placeholder.com/600', // Посилання на велике зображення
        description: 'Image 1', // Опис зображення
    },
    {
        preview: 'https://via.placeholder.com/150', // Посилання на мініатюру
        original: 'https://via.placeholder.com/600', // Посилання на велике зображення
        description: 'Image 2', // Опис зображення
    },
    // Додайте більше зображень за необхідності
];

// Функція для створення розмітки галереї
function createGalleryMarkup(images) {
    return images
        .map(
            (image) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.original}">
                <img
                    class="gallery-image"
                    src="${image.preview}"
                    alt="${image.description}"
                />
            </a>
        </li>
    `
        )
        .join(''); // Приєднати всі елементи галереї в одну строку
}

// Динамічне створення галереї
const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryMarkup(images);

// Ініціалізація SimpleLightbox
const galleryLightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', // Використовувати alt як підпис
    captionPosition: 'bottom', // Позиція підпису
    captionDelay: 250, // Затримка відображення підпису
});
