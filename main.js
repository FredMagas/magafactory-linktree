const shareButtons = document.querySelectorAll('.tile-share-button')
const pageLink = document.querySelector('.share-button')

async function copyText(e) {
// Previnir botão de ir para o site
    e.preventDefault()
    const link = this.getAttribute('link')

    try {
        await navigator.clipboard.writeText(link)
        alert("Texto copiado para área de transferência!")
    }   catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))
pageLink.addEventListener('click', copyText)