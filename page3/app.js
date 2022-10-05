//----------carousel functionality----------//
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
//----------carousel functionality----------//

//media
const studySection = document.querySelector('.section-studies-content')
const exploreSection = document.querySelector('.section-explore-studies')
const popularSection = document.querySelector('.section-popular')
const categorySection = document.querySelector('.section-category')
const ownSection = document.querySelector('.section-own')
window.addEventListener('resize', media320ChangeAttributes)
window.onload = media320ChangeAttributes

function media320ChangeAttributes(){
    const x = window.matchMedia('(max-width: 320px)')
    if(x.matches){
        studySection.querySelector('.header').textContent = 'Featured'
        exploreSection.querySelector('.main-title').textContent = 'Latest'
        popularSection.querySelector('.right-header').textContent = 'Top authors'
        categorySection.querySelector('.header').textContent = 'Browse by category'
        ownSection.querySelector('.header').textContent = 'Resources and tips to create and write your own case study'
    } else {
        studySection.querySelector('.header').textContent = 'Case studies on Dribbble'
        exploreSection.querySelector('.main-title').textContent = 'Explore our Latest Case Studies'
        popularSection.querySelector('.right-header').textContent = 'Popular authors'
        categorySection.querySelector('.header').textContent = 'Explore case studies by category'
        ownSection.querySelector('.header').textContent = 'Write your own case study'
    }
}

