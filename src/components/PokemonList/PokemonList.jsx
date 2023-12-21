import './PokemonList.css'
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonLIst';

const PokemonList = () => {
    const [pokemonListState, setPokemonListState] = usePokemonList();
    
  return (
    <>
        
        <div className="page-controller">

            <button onClick={()=>{
                // SetPOKEDEX_URL(prevUrl);
                setPokemonListState( (state)=>({...state,
                    POKEDEX_URL : state.prevUrl
                }))
            }}>Prev</button>

            <h2> Pokemon List </h2>

            <button
            onClick={()=>{
                // SetPOKEDEX_URL(nextUrl);
                setPokemonListState((state)=>({...state,
                    POKEDEX_URL : state.nextUrl
                }))
            }}>Next</button>

        </div>

    <div className="pokemon-list-wrapper">
        {pokemonListState.pokemonList.map((pokemon,index) => <Pokemon name={pokemon.name} url={pokemon.image} id={pokemon.id} key={index} /> )}
    </div>
    </>
  )
}

export default PokemonList;