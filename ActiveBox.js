document.addEventListener('DOMContentLoaded', () => {

    //fixed header

    const header = document.querySelector('#header');
    const intro = document.querySelector('#intro');
    scrollHeader();
    document.addEventListener('scroll', scrollHeader);

    function scrollHeader() {
        if (window.pageYOffset >= intro.clientHeight) {
            header.classList.add('fixed');
        } else header.classList.remove('fixed');
    }

    //smooth scroll

    const nav = document.querySelector('#nav');
    nav.addEventListener('click', (event)=> {
        event.preventDefault();
        if(event.target.hasAttribute('data-scroll')) {
            let dataScroll = event.target.getAttribute('data-scroll');
            let idElement = document.querySelector(dataScroll);
            scrollBy(0, idElement.getBoundingClientRect().top - 60);
            nav.classList.contains('show') ? nav.classList.remove('show') : false;
        }
    });

    //nav Togle

    const burger = document.querySelector('#navTogle');
    burger.addEventListener('click', (event)=> {
        event.preventDefault();
        nav.classList.contains('show') ? nav.classList.remove('show') : nav.classList.add('show');
    })

})


