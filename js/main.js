const modifier = {
    imgThumbnailActive : "img-showcase__thumbnail--active",
    elSiteHeaderCartModal : "site-header__cart-modal--open",
    lightboxOpen : "lightbox--open"
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
const elProductPgeGallery = document.querySelector('.product-page__gallery');
const elImgShowcaseActiveImg = elProductPgeGallery.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = elProductPgeGallery.querySelectorAll(".js-img-showcase__thumbnail-button");
const elsImgThumbnails = elProductPgeGallery.querySelectorAll('.img-showcase__thumbnail');


if (elsImgShowcaseThumbnailButton) {
    elsImgShowcaseThumbnailButton.forEach(function (elButton) {
        elButton.addEventListener('click', function () {
            // Remove active state from all buttons
            elsImgThumbnails.forEach(function (elImgThumbnail) {
                elImgThumbnail.classList.remove(modifier.imgThumbnailActive);
            })
            // Add active stato to clicked button
            elButton.parentElement.classList.add(modifier.imgThumbnailActive);

            // Update active img src accordingly
            elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig
            elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`
        })
    })
}

// Lightbox

// OPEN
const elLightBox = document.querySelector('.lightbox');
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');

if (elLightboxToggler) {
    elLightboxToggler.addEventListener("click", function () {
        elLightBox.classList.add(modifier.lightboxOpen);
    })
}

// CLOSE
const elLightBoxClose = document.querySelector('.js-lightbox__close');

if (elLightBoxClose) {
    elLightBoxClose.addEventListener("click", function () {
        elLightBox.classList.remove(modifier.lightboxOpen);
        // console.log("ishladi");
    })
}

// Thumbnail click
const elImgLightboxActiveImg = elLightBox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnailButton = elLightBox.querySelectorAll(".js-img-lightbox-thumbnail-button");
const elsLightboxImgThumbnails = elLightBox.querySelectorAll('.img-showcase__thumbnail');


if (elsImgLightboxThumbnailButton) {
    elsImgLightboxThumbnailButton.forEach(function (elButton) {
        elButton.addEventListener('click', function () {
            // Remove active state from all buttons
            elsLightboxImgThumbnails.forEach(function (elImgThumbnail) {
                elImgThumbnail.classList.remove(modifier.imgThumbnailActive);
            })
            // Add active stato to clicked button
            elButton.parentElement.classList.add(modifier.imgThumbnailActive);

            // Upda active img src accordingly
            elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig
            elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`
        })
    })
}


// LIGHTBOX CONTROL
const elLightboxControlPrev = elLightBox.querySelector('.js-lightbox-control-prev');
const elLightboxControlNext = elLightBox.querySelector('.js-lightbox-control-next');

if (elLightboxControlNext) {
    elLightboxControlNext.addEventListener("click", function () {
        // Find active li element
        const elActiveItem = elLightBox.querySelector('.img-showcase__thumbnail--active');

        // Remove active li element's styles
        elActiveItem.classList.remove(modifier.imgThumbnailActive);

        let elNextActiveItem;

        if (elActiveItem.nextElementSibling === null) {
            elNextActiveItem = elsLightboxImgThumbnails[0];
            // elActiveItem.nextElementSibling.classList.add(modifier.imgThumbnailActive);
        }else{
            // Make next element active
            elNextActiveItem = elActiveItem.nextElementSibling;
        }

        elNextActiveItem.classList.add(modifier.imgThumbnailActive)


        // Update active img src accordingly
        elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig
        elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`
    });
}

if (elLightboxControlPrev) {
    elLightboxControlPrev.addEventListener("click", function () {
        // Find active li element
        const elActiveItem = elLightBox.querySelector('.img-showcase__thumbnail--active');

        // Remove active li element's styles
        elActiveItem.classList.remove(modifier.imgThumbnailActive);

        let elNextActiveItem;

        if (elActiveItem.previousElementSibling === null) {
            console.log('sda');
            elNextActiveItem = elsLightboxImgThumbnails[elsLightboxImgThumbnails.length - 1];
            // elActiveItem.PreviousElementSibling.classList.add(modifier.imgThumbnailActive);
        }else{
            // Make Prev element active
            elNextActiveItem = elActiveItem.previousElementSibling;
        }

        elNextActiveItem.classList.add(modifier.imgThumbnailActive)


        // Update active img src accordingly
        elImgLightboxActiveImg.src = elNextActiveItem.children[0].dataset.imgShowcaseBig
        elImgLightboxActiveImg.srcset = `${elNextActiveItem.children[0].dataset.imgShowcaseBig} 1x, ${elNextActiveItem.children[0].dataset.imgShowcaseRetina} 2x`
    });
}