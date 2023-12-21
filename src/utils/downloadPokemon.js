import axios from "axios";

const downloadPokemon = async (pokemonListState,setPokemonListState,Default_URL) => {
    console.log('downloadPokemon '+ (pokemonListState.POKEDEX_URL));
    const respose = await axios.get(pokemonListState.POKEDEX_URL ? pokemonListState.POKEDEX_URL : Default_URL) ;

    // setNextUrl(respose.data.next);
    // setPrevUrl(respose.data.previous);

    setPokemonListState({
        ...pokemonListState,
        nextUrl: respose.data.next,
        prevUrl: respose.data.previous
    })

    const pokemonResults = (respose.data.results? respose.data.results : respose.data.pokemon).slice(0, 20);

    const pokemonPromise = pokemonResults.map((p) => {
        if(p.url){
            return axios.get(p.url);
        }else if(p.pokemon.url){
            return axios.get(p.pokemon.url);
        }});
        
    const pokemonListData = await axios.all(pokemonPromise);

    const pokemonFinalList = pokemonListData.map(pokemonData => {
        const pokemon = pokemonData.data;

        const defaultImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : defaultImage,
            types: pokemon.types.map((type) => type.type.name)
        }
    });
    // setPokemonList(pokemonFinalList);
    setPokemonListState((state) => ({
        ...state,
        pokemonList: pokemonFinalList
    }))

}

export default downloadPokemon;