//gets the variables
let strName, strPhone, strEmail, strMedia, strDate
const btn = $('#btnSubmit')

//get the value HMTL
$('#btnSubmit').on('click', (e) =>{
    e.preventDefault()
    strName = $('#name').val()
    strPhone = $('#phone').val()
    strEmail = $('#email').val()
    strMedia = $('#media').val()
    strDate = $('#date').val()
})

function getStrUrl(name, phone){
    //clear string
    name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    name = name.replace(/[( )]/g, "%20");
    phone = phone.replace(/[\(\)\.\s-]+/g,'');

    //join string
    const url = 'https://api.whatsapp.com/send?phone=1131674145&text='
    const concatURL = url + 'Nome:%20' + name + '%0ATelefone:%20' + phone + '%0AMail:%20' + email + '%0AQnt%20de%20pessoas:%20' + media + '%0AData%20do%20evento:%20'
    console.log(concatURL);
}

//get the string
getStrUrl()
