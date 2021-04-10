'use strict';

const forms = (address) => {
    document.getElementById('endereco').value = address.logradouro
    document.getElementById('bairro').value = address.bairro
    document.getElementById('cidade').value = address.localidade
    document.getElementById('estado').value = address.uf
}
const searchcode = async() => {
    const code = window.document.getElementById('cep').value
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
document.getElementById('cep').addEventListener('focusout',searchcode);





