'use strict'

// Criar uma variavel para a caixa id CEP
const cep = document.getElementById('cep')

// Trabalhando com função async
// Ele espera a execução acabar sem parar a aplicação e assim quando terminar
// ele volta para o ponto em que foi chamado e dar continuidade ao que estava fazendo
    const pesquisarCep = async(cep) => {

        // Colocanda o caminho da URL
        const  url = `https://viacep.com.br/ws/${cep}/json`

        // Await: Espera vir o resultado do Fetch para dar a resposta
        // Fetch faz a requisição da url
        const response = await fetch(url)

        // Await: Espera vir o resultado do Fetch para dar a resposta
        // const data irá receber a resposta em Json()
        const data = await response.json()

        return data
    } 

    // Preenchendo o formulário com as informações do CEP
    const preencherFormulario = async() => {

    // Enderco vai receber um método que recebe o valor do CEP
    const endereco = await pesquisarCep(cep.value)
    document.getElementById(`endereco`).value = endereco.logradouro
    document.getElementById(`bairro`).value = endereco.bairro
    document.getElementById(`cidade`).value = endereco.localidade
    document.getElementById(`estado`).value = endereco.uf
}

cep.addEventListener('focusout', preencherFormulario)