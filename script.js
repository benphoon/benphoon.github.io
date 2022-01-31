const buttons = document.querySelectorAll('[data-carousel-button]')

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const cards = button
            .closest('[data-carousel]')
            .querySelector('[data-cards]')

        const activeCard = cards.querySelector('[data-active]')
        let newIndex = [...cards.children].indexOf(activeCard) + offset
        if (newIndex < 0) {
            newIndex = cards.children.length - 1
        }
        if (newIndex >= cards.children.length) {
            newIndex = 0
        }

        cards.children[newIndex].dataset.active = true;
        delete activeCard.dataset.active
    })
})