const tabela = document.getElementById('tabela');
var dados = JSON.parse(localStorage.getItem('dados')) || [];

function exibirDados()
{
    dados.forEach((elemento, chave) =>
    {
        tabela.innerHTML += `
            <tr>
                <td>${elemento.nome}</td>
                <td>${elemento.apelido}</td>
                <td>${elemento.telefone}</td>
                <td>${elemento.email}</td>
                <td>
                    <a href="../src/cadastro.html?chave=${chave}">Editar</a>
                    <a href="#" onClick="remover(${chave})">Remover</a>
                </td>
            </tr>
        `;
    });
}
function remover(chave)
{
    dados.splice(chave, 1);
    localStorage.setItem('dados', JSON.stringify(dados));
    window.location.href= "../src/form.html";
}
exibirDados();