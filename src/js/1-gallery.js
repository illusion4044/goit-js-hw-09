import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Масив зображень для галереї
const images = [
    { preview: 'images/image1-small.jpg', original: 'images/image1-large.jpg', description: 'Image 1' },
    { preview: 'images/image2-small.jpg', original: 'images/image2-large.jpg', description: 'Image 2' },
    { preview: 'images/image3-small.jpg', original: 'images/image3-large.jpg', description: 'Image 3' },
];

// Створення елементів галереї
const galleryContainer = document.querySelector('.gallery');

const createGalleryItems = (images) => {
    return images
        .map(({ preview, original, description }) => {
            return `
                <li class="gallery-item">
                    <a class="gallery-link" href="${original}">
                        <img 
                            class="gallery-image" 
                            src="${preview}" 
                            alt="${description}" 
                        />
                    </a>
                </li>
            `;
        })
        .join('');
};

// Додавання елементів галереї в контейнер
galleryContainer.innerHTML = createGalleryItems(images);

// Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});
