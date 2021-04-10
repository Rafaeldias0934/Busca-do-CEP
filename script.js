'use strict';

const forms = (address) => {
    document.getElementById('address').value = address.logradouro
    document.getElementById('district').value = address.bairro
    document.getElementById('city').value = address.localidade
    document.getElementById('state').value = address.uf
}
const searchcode = async() => {
    const code = window.document.getElementById('zipcode').value
    const url = `https://viacep.com.br/ws/${code}/json/`
    const elements = await fetch(url)
    const address = await elements.json()
    if (address.hasOwnProperty('erro')) {
        let emoji = String.fromCodePoint(0x1F447)
        alert(`Por favor, Digite um cep válido no campo ${emoji}`) 
    } else {
        forms(address)    
    }
}  
document.getElementById('zipcode').addEventListener('focusout',searchcode);





