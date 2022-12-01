let strName, strPhone, strEmail, strMedia, strDate
strPhone = '(11) 4444-4444'
strName = "Lélly Oliver"

// $('#btnSubmit').on(){
//     strName = $('#btnSubmit').val()
//     strPhone = $('#btnSubmit').val()
//     strEmail = $('#btnSubmit').val()
//     strMedia = $('#btnSubmit').val()
//     strDate = $('#btnSubmit').val()


// }

function getStrUrl(name, phone, email, media, date){

    name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    name = name.replace(/[( )]/g, "%20");
    phone = phone.replace(/[\(\)\.\s-]+/g,'');
    const url = 'https://api.whatsapp.com/send?phone=1131674145&text='
    const concatURL = 'Nome:%20' + nome + '%0ATelefone:%20' + phone + '%0AMail:%20' + email + '%0AQnt%20de%20pessoas:%20' + media + '%0AData%20do%20evento:%20'
    console.log(phone, name);
}
getStrUrl(strName, strPhone)
