const carousel = document.querySelector('.carousel')
const buttons = document.querySelectorAll('[data-carousel-button]')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1
        const slides = button
            .closest('[data-carousel]')
            .querySelector('[data-slides]')
        const icons = button
            .closest('[data-carousel]')
            .querySelector('[data-dots]')

        const activeSlide = slides.querySelector('[data-active]')
        const activeDot = icons.querySelector('[data-active]')

        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active

        icons.children[newIndex].dataset.active = true
        delete activeDot.dataset.active
    })
})
