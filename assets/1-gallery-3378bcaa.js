import{S as e}from"./vendor-10cb7c31.js";const t=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"}],i=document.querySelector(".gallery");if(i){const o=t.map(a=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${a.original}">
                    <img 
                        class="gallery-image" 
                        src="${a.preview}" 
                        alt="${a.description}" 
                    />
                </a>
            </li>
        `).join("");i.innerHTML=o,new e(".gallery a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=1-gallery-3378bcaa.js.map
