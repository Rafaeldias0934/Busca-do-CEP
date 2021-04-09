'use strict';
let preencherformulario = (endereco) => {
    window.document.getElementById('endereco').value = endereco.logradouro
    window.document.getElementById('bairro').value = endereco.bairro
    window.document.getElementById('cidade').value = endereco.localidade
    window.document.getElementById('estado').value = endereco.uf
}
let pesquisarcep = async() => {
   let cep = window.document.getElementById('cep').value
   let url = `https://viacep.com.br/ws/${cep}/json/`
   let dados = await fetch(url)
   let endereco = await dados.json()
   if (endereco.hasOwnProperty('erro')) {
    let emoji = String.fromCodePoint(0x1F447)
        alert(`Por favor, Digite um cep válido no campo ${emoji}`) 
   } else {
    preencherformulario(endereco)    
   }
}  
document.getElementById('cep').addEventListener('focusout',pesquisarcep);





