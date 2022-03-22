/*
Quando clicar no pokémon da listagem, temos que esconder o cartão correspondente ao que foi selecionado na listagem.

Para isso vamos precisar trabalhar com dois elementos:
1- Listagem
2- Cartão do Pokémon

Precisamos criar duas variáveis no JS para trabalhar com os elementos na tela.

Vamos precisar trabalhar com um elemento de clique feito pelo usuário na listagem de pokémons.

- Remover a classe aberto só do cartão que está aberto. 
- Ao clicar em um pokémon da listagem pegamos o id desse pokemon para saber qual cartão mostrar.
- Remover a classe ativo no que marca o pokémon selecionado. 
- Adicionar a classe ativo no item da lista selecionado.

*/

// precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    // Vamos precisar trabalhar com um elemento de clique feito pelo usuário na listagem de pokémons.

    pokemon.addEventListener('click', () => {
        // - Remover a classe aberto só do cartão que está aberto.
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // Ao clicar em um pokémon da listagem pegamos o id desse pokemon para saber qual cartão mostrar.
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // - Remover a classe ativo no que marca o pokémon selecionado.
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // - Adicionar a classe ativo no item da lista selecionado.
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})
