const shareButtons = document.querySelectorAll('.tile-share-button')
const pageLink = document.querySelector('.share-button')
const popup = document.getElementById('popup');

async function copyText(e) {
// Previnir botão de ir para o site
    e.preventDefault()
    const link = this.getAttribute('link')

    try {
        await navigator.clipboard.writeText(link);
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 2000); // Esconde o popup após 2 segundos
    }   catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))
pageLink.addEventListener('click', copyText)