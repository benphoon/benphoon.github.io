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

// Email copy functionality
function copyEmail() {
    const email = "ben.phoon@example.com"; // Replace with your actual email
    const emailText = document.getElementById('email-text');
    const copyFeedback = document.getElementById('copy-feedback');

    navigator.clipboard.writeText(email).then(() => {
        emailText.style.display = 'none';
        copyFeedback.style.display = 'inline';

        setTimeout(() => {
            emailText.style.display = 'inline';
            copyFeedback.style.display = 'none';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        emailText.style.display = 'none';
        copyFeedback.style.display = 'inline';

        setTimeout(() => {
            emailText.style.display = 'inline';
            copyFeedback.style.display = 'none';
        }, 2000);
    });
}