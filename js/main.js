const modifier = {
    imgThumbnailActive : "img-showcase__thumbnail--active",
    elSiteHeaderCartModal : "site-header__cart-modal--open"
}

// Shopping cart modal
const elSiteHeaderCartLink = document.querySelector('.js-site-header__cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if (elSiteHeaderCartLink){
    elSiteHeaderCartLink.addEventListener("click", function (evt) {
        evt.preventDefault();

        elSiteHeaderCartModal.classList.toggle(modifier.elSiteHeaderCartModal);
    })
}

// Image showcase
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = document.querySelectorAll(".js-img-showcase__thumbnail-button");
const elsImgThumbnails = document.querySelectorAll('.img-showcase__thumbnail');


if (elsImgShowcaseThumbnailButton) {
    elsImgShowcaseThumbnailButton.forEach(function (elButton) {
        elButton.addEventListener('click', function () {
            // Remove active state from all buttons
            elsImgThumbnails.forEach(function (elImgThumbnail) {
                elImgThumbnail.classList.remove(modifier.imgThumbnailActive);
            })
            // Add active stato to clicked button
            elButton.parentElement.classList.add(modifier.imgThumbnailActive);

            // Upda active img src accordingly
            elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig
            elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`
        })
    })
}
