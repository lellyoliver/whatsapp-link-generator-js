//gets the variables
let strName, strPhone, strEmail, strMedia, strDate
const btn = document.getElementById('btnSubmit')

//get the value HTML
document.getElementById('btnSubmit').addEventListener('click', (e) => {
    e.preventDefault()
    strName = document.getElementById('name').value
    strPhone = document.getElementById('phone').value 
    strEmail = document.getElementById('email').value
    strMedia = document.getElementById('media').value
    strDate = document.getElementById('date').value
})

function getStrUrl(name, phone){
    //clear string
    name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    name = name.replace(/[( )]/g, "%20")
    phone = phone.replace(/[\(\)\.\s-]+/g,'')

    //join string
    const url = 'https://api.whatsapp.com/send?phone=1131674145&text='
    const concatURL = url + encodeURIComponent('Nome: ' + name + '\nTelefone: ' + phone + '\nMail: ' + strEmail + '\nQnt de pessoas: ' + strMedia + '\nData do evento: ' + strDate)
    console.log(concatURL)
}

//get the string
getStrUrl()
