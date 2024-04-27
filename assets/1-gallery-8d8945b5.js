import{S as i}from"./vendor-10cb7c31.js";const o=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"}],e=document.querySelector(".gallery"),t=o.map(a=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${a.original}">
                <img 
                    class="gallery-image" 
                    src="${a.preview}" 
                    alt="${a.description}" 
                />
            </a>
        </li>
    `).join("");e.innerHTML=t;new i(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery-8d8945b5.js.map
