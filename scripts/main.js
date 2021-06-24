const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

function changeHeaderWhenScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    if (window.scrolly >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

const swiper = new Swiper('.swiper-container', {
    slidesPerview: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
#about .image, #about .text,
#services header, #services card
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
#footer .brand, #footer .social`, { interval: 100 }
)

/*botao voltar topo*/

function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')

    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
})