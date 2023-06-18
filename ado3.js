"use strict";

// EXERCÍCIO 0 - ANTES DE MAIS NADA, IMPLEMENTE ESTA FUNÇÃO.
/**
 * Função que retorna um Array contendo os nomes dos alunos que fizeram este exercício.
 * @return {string[]} Os nomes dos alunos que fizeram este exercício.
 */
function nomesDosAlunos() {
    return ["Wendell Santos Alves", "Matheus Costa Lisboa", "Abilio Gonçalves Vieira Filho", "Igor Felipe Jordão Rodrigues", "Luis Felipe Barbosa Tomaz"];
}

// EXERCÍCIO 1.
/**
 * Receba um valor em graus e converta para radianos.
 * @param {number} graus O valor em graus.
 * @return {number} O valor em radianos.
 * @throws ConvertError Se o valor em graus não for um número finito.
 */
function grausParaRadianos(graus) {
    if (typeof graus !== 'number' || !isFinite(graus) || isNaN(graus)) {
        throw new Error('O valor em graus deve ser um número finito.');
    }
    else {
        // Conversão de graus para radianos: radianos = graus * (π / 180)
        const radianos = (graus * Math.PI) / 180;
        return radianos;
    }
}

// EXERCÍCIO 2.
/**
 * Receba um valor em radianos e converta para graus.
 * @param {number} graus O valor em radianos.
 * @return {number} O valor em graus.
 * @throws ConvertError Se o valor em radianos não for um número finito.
 */
function radianosParaGraus(radianos) {
    if (typeof radianos !== 'number' || !isFinite(radianos)) {
        throw new Error('O valor em radianos deve ser um número finito.');
    }

    // Conversão de radianos para graus: graus = radianos * (180 / π)
    const graus = (radianos * 180) / Math.PI;
    return graus;
}

// EXERCÍCIO 3.
/**
 * Converta uma temperatura entre 3 possíveis escalas: Celsius, Kelvin e Fahreinheit. As escalas são especificadas pelas strings "C", "F" e "K".
 * Zero graus Celsius é o mesmo que 32 graus Fahreinheit ou 273.15 graus Kelvin.
 * 100 graus Celsius é o mesmo que 212 graus Fahreinheit ou 373.15 graus Kelvin.
 * Os valores resultantes devem ser arredondados em 2 casas decimais. Use a função auxiliar arredondar2Casas para fazer isso.
 * @param {number} valor O valor da temperatura na escala especificada pelo parâmetro "de".
 * @param {string} de A escala da temperatura especificada pelo parâmetro "valor". Pode ser "K" para Kelvin, "C" para Celsius ou "F" para Fahreinheit.
 * @param {string} para A escala da temperatura a ser retornada. Pode ser "K" para Kelvin, "C" para Celsius ou "F" para Fahreinheit.
 * @return {number} O valor da temperatura correspondente.
 * @throw ConvertError Se o valor não for um número finito ou se qualquer uma das escalas for diferente de "C", "F" ou "K".
 */
function converterTemperatura(valor, de, para) {
    if (
        typeof valor !== 'number' ||
        !isFinite(valor) ||
        (de !== 'C' && de !== 'F' && de !== 'K') ||
        (para !== 'C' && para !== 'F' && para !== 'K')
    ) {
        throw new Error('O valor deve ser um número finito e as escalas devem ser "C", "F" ou "K".');
    }

    let resultado;

    if (de === 'C') {
        if (para === 'C') {
            resultado = valor;
        } else if (para === 'F') {
            resultado = valor * (9 / 5) + 32;
        } else if (para === 'K') {
            resultado = valor + 273.15;
        }
    } else if (de === 'F') {
        if (para === 'C') {
            resultado = (valor - 32) * (5 / 9);
        } else if (para === 'F') {
            resultado = valor;
        } else if (para === 'K') {
            resultado = (valor + 459.67) * (5 / 9);
        }
    } else if (de === 'K') {
        if (para === 'C') {
            resultado = valor - 273.15;
        } else if (para === 'F') {
            resultado = valor * (9 / 5) - 459.67;
        } else if (para === 'K') {
            resultado = valor;
        }
    }

    return arredondar2Casas(resultado);
}

// EXERCÍCIO 4.
/**
 * Obtenha o fatorial de um número.
 * @param {number} n O valor do qual se deseja obter o fatorial.
 * @return {bigint} O valor de n! expresso em BigInt.
 * @throw ConvertError Se o parâmetro não for um número inteiro ou for menor que zero.
 */
function fatorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('O parâmetro deve ser um número inteiro não negativo.');
    }

    if (n === 0 || n === 1) {
        return BigInt(1);
    }

    let resultado = BigInt(n);
    for (let i = n - 1; i >= 1; i--) {
        resultado *= BigInt(i);
    }

    return resultado;
}

// EXERCÍCIO 5.
/**
 * Obtenha o n-ésimo número de Fibonacci.
 *
 * Dica:
 * Cuidado ao implementar essa função! A implementação mais direta pode demorar séculos para fornecer
 * o resultado de um número de Fibonacci grande. Mas uma implementação um pouco mais inteligente que
 * memorize resultados já anteriormente computados trás o mesmo resultado em microssegundos.
 *
 * @param {number} n O valor do qual se deseja obter o número de Fibonacci correspondente.
 * @return {bigint} n O n-ésimo número de Fibonacci expresso em BigInt.
 * @throw ConvertError Se o parâmetro não for um número inteiro ou for menor que zero.
 */
function fibonacci(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('O parâmetro deve ser um número inteiro não negativo.');
    }

    const cache = {};

    function calcularFibonacci(k) {
        if (k === 0) {
            return BigInt(0);
        }
        if (k === 1) {
            return BigInt(1);
        }

        if (cache[k] !== undefined) {
            return cache[k];
        }

        const resultado = calcularFibonacci(k - 1) + calcularFibonacci(k - 2);
        cache[k] = resultado;
        return resultado;
    }

    return calcularFibonacci(n);
}

// EXERCÍCIO 6.
/**
 * Obtenha o n-ésimo número triangular.
 *
 * @param {n} n O valor do qual se deseja obter o número triangular correspondente.
 * @return {bigint} n O n-ésimo número triangular expresso em BigInt.
 * @throw ConvertError Se o parâmetro não for um número inteiro ou for menor que zero.
 */
function triangular(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('O parâmetro deve ser um número inteiro não negativo.');
    }

    // Fórmula do número triangular: T(n) = (n * (n + 1)) / 2
    return BigInt((n * (n + 1)) / 2);
}

// EXERCÍCIO 7.
/**
 * Retorne uma expressão regular que valide um CEP da seguinte forma:
 * Cinco dígitos, talvez um hífen, mais três dígitos.
 * É importante que a expressão regular tenha menos que 25 caracteres de comprimento!
 * @return {RegExp} Uma expressão regular.
 */
function cepRegex() {
    return /^\d{5}-?\d{3}$/;
}

// EXERCÍCIO 8.
/**
 * Retorne uma expressão regular que valide um número de DDD brasileiro.
 * É importante que a expressão regular tenha menos que 60 caracteres de comprimento!
 * @return {RegExp} Uma expressão regular.
 */
function dddRegex() {
    return /^[1-9]{2}$/;
}

// EXERCÍCIO 9.
/**
 * Utilizando AJAX ou fetch API, pesquise por um CEP na URL http://viacep.com.br/ws/XXXXX-XXX/json/,
 * onde XXXXX-XXX é o CEP a ser pesquisado.
 * @param {string} cep O CEP a ser pesquisado.
 * @return {Endereco} Uma instância da classe Endereco contendo o logradouro, bairro, localidade (cidade) e UF do CEP pesquisado.
 * @throws ConvertError Se o CEP a ser pesquisado não for uma string ou não tiver o formato correto de um CEP.
 * @throws PesquisaCepError Se o CEP não for encontrado.
 */
async function pesquisarCep(cep) {
    if (typeof cep !== 'string' || !/^\d{5}-?\d{3}$/.test(cep)) {
        throw new Error('O CEP deve estar no formato correto (XXXXX-XXX).');
    }

    const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
        throw new Error('CEP não encontrado.');
    }

    const endereco = new Endereco(
        data.logradouro,
        data.bairro,
        data.localidade,
        data.uf
    );

    return endereco;
}

// EXERCÍCIO 10.
/**
 * Faça o formulário na tela de pesquisa de CEP. Você o encontra facilmente no HTML.
 *
 * No campo do resultado do CEP, você deve colocar as informações do CEP encontrado
 * (converta a instância de Endereco encontrada em string para fazer isso). Se ocorrer
 * algum erro na busca, coloque a mensagem de erro lá também (use o try-catch para isso).
 */
async function pesquisarCepDOM() {
    const cepInput = document.getElementById('cep');
    const resultadoCep = document.getElementById('resultadoCep');

    try {
        const endereco = await pesquisarCep(cepInput.value);
        resultadoCep.innerText = endereco.toString();
    } catch (error) {
        resultadoCep.innerText = 'Erro ao pesquisar o CEP.';
    }
}

// EXERCÍCIO 11.
/**
 * Utilizando AJAX ou fetch API, pesquise por um CEP na URL https://pokeapi.co/api/v2/pokemon/NNNNNN,
 * onde NNNNNN é o número ou nome de um pokémon a ser pesquisado.
 * @param {number | string} chave O número ou nome do pokémon a ser pesquisado.
 * @return {Pokemon} Uma instância da classe Pokemon contendo o nome, o número e a URL da foto da arte oficial do pokémon visto de frente.
 * @throws PokemonNaoEncontradoError Se não existir pokémon com o nome ou número dado.
 */
async function pesquisarPokemon(chave) {
    const url = `https://pokeapi.co/api/v2/pokemon/${chave}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new PokemonNaoEncontradoError('Pokémon não encontrado.');
        }

        const data = await response.json();

        const pokemon = new Pokemon(data.name, data.id, data.sprites.front_default);

        return pokemon;
    } catch (error) {
        throw new PokemonNaoEncontradoError('Pokémon não encontrado.');
    }
}

// EXERCÍCIO 12.
/**
 * Faça o formulário na tela de pesquisa de pokémon. Você o encontra facilmente no HTML.
 *
 * Há três campos para os resultados: O nome do pokémon, o número e uma imagem.
 * Se ocorrer algum erro na busca, coloque a mensagem de erro no campo do nome e coloque
 * o link https://cdn-icons-png.flaticon.com/256/4467/4467515.png na foto (use o try-catch).
 */
async function pesquisarPokemonDOM() {
    const chaveInput = document.getElementById('chave');
    const resultadoNome = document.getElementById('resultadoNome');
    const resultadoNumero = document.getElementById('resultadoNumero');
    const resultadoImagem = document.getElementById('resultadoImagem');

    try {
        const pokemon = await pesquisarPokemon(chaveInput.value);
        resultadoNome.innerText = pokemon.nome;
        resultadoNumero.innerText = `Nº ${pokemon.numero}`;
        resultadoImagem.src = pokemon.urlImagem;
    } catch (error) {
        resultadoNome.innerText = 'Pokémon não encontrado.';
        resultadoNumero.innerText = '';
        resultadoImagem.src = 'https://cdn-icons-png.flaticon.com/256/4467/4467515.png';
    }
}