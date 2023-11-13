const form = document.getElementById('form');
const nome = document.getElementById('nome');
const apelido = document.getElementById('apelido');
const telefone = document.getElementById('telefone')
const email = document.getElementById('email');
var dados = JSON.parse(localStorage.getItem('dados')) || [];
const key = new URLSearchParams(window.location.search).get('chave');

function salvarDados()
{
    let novoNome = nome.value;
    let novoApelido = apelido.value;
    let novoTelefone = telefone.value;
    let novoEmail = email.value;
    if(key)
    {
        dados[key] = {nome: novoNome,apelido: novoApelido,telefone: novoTelefone,email: novoEmail};
    }else{
        dados.push({nome: novoNome,apelido: novoApelido,telefone: novoTelefone,email: novoEmail});
    }

    localStorage.setItem('dados',JSON.stringify(dados));
    window.location.href= "../src/cadastro.html";
}

if(key)
{
    nome.value = dados[key].nome;
    apelido.value = dados[key].apelido;
    telefone.value = dados[key].telefone;
    email.value = dados[key].email;
}

label.forEach(par => 
    {
        par.style.fontFamily = "cursive"
        par.style.display = "inline-block"
    });