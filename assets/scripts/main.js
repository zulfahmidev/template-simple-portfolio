const navbarEl = document.querySelector('#navbar')
const navsEl = document.querySelector('#navs')
const sections = ['about-me', 'portfolio', 'contact', 'services', 'hero']

let minimizeNavbar = false

const updateNavbar = () => {
    if (minimizeNavbar) {
        navbarEl.classList.add('navbar-minimize')
        navbarEl.classList.remove('navbar')
    } else {
        navbarEl.classList.remove('navbar-minimize')
        navbarEl.classList.add('navbar')
    }

    let sectionActive = {name: 'hero', top: 0};
    sections.forEach(section => {
        const el = document.querySelector(`#${section}`)
        const rect = el.getBoundingClientRect();
        let top = rect.top - (window.innerHeight * 0.75)
        if (top <= 0) {
            if (top >= sectionActive.top || sectionActive.top == 0) {
                sectionActive.name = section
                sectionActive.top = top
            }
        }
    })

    sections.forEach(section => {
        const links = document.querySelectorAll(`a[href*="${section}"]`)
        links.forEach(link => {
            if (section == sectionActive.name) {
                link.classList.add('text-yellow-500')
                link.classList.remove('text-white/75')
                link.classList.remove('hover:text-white')
            } else {
                link.classList.remove('text-yellow-500')
                link.classList.add('text-white/75')
                link.classList.add('hover:text-white')
            }
        })
    })
}

updateNavbar()

document.onscroll = () => {
    minimizeNavbar = window.scrollY > 32
    updateNavbar()
}

const toggleSidebar = () => {
    if (navsEl.classList.contains('hidden')) {
        navsEl.classList.remove('hidden')
    } else {
        navsEl.classList.add('hidden')
    }
}