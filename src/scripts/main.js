
document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heightHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < heightHero) {
            hideElementsHeader();
        }

        else {
            showElementsHeader();
        }
    })

    //Programação das abas na section shows
    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', function (button) {

            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            hideTabs();
            tab.classList.add('shows__list--is-active')
            removeClassActive();
            button.target.classList.add('shows__tabs__button--is-active')
        })
    }

    //Programação dos accordions da section FAQ
    for (let i = 0; i < questions.length; i++) {

        questions[i].addEventListener('click', openAndCloseAnswer)
    }
})

function hideElementsHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');

}

function showElementsHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openAndCloseAnswer(elemento) {

    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeClassActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}