const listaSelPok = document.querySelectorAll('.pokemon')
const pokCard = document.querySelectorAll('.cartao-pokemon')

//criar o evento do click

listaSelPok.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        //remover a classe aberto só do cartão que está aberto

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokémon da lista, pegamos o id desse pokémon para saber qual cartão usar   

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo no item do menu selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item do menu selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')


    })
})