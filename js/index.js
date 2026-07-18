const btn = document.getElementById('btnSubmit')

btn.addEventListener('click', (event) => {
    event.preventDefault()

    const name = document.getElementById('name').value.trim()
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value.trim()
    const media = document.getElementById('media').value
    const date = document.getElementById('date').value

    const whatsappUrl = getWhatsappUrl({
        name,
        phone,
        email,
        media,
        date
    })

    console.log(whatsappUrl)

    window.open(whatsappUrl, '_blank')
})

function getWhatsappUrl({ name, phone, email, media, date }) {
    const cleanName = name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')

    const cleanPhone = phone.replace(/\D/g, '')

    const message = [
        `Nome: ${cleanName}`,
        `Telefone: ${cleanPhone}`,
        `E-mail: ${email}`,
        `Quantidade de pessoas: ${media}`,
        `Data do evento: ${date}`
    ].join('\n')

    return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`
}
