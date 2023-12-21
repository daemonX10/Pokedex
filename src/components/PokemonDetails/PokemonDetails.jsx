import  "./PokemonDetails.css";
import usePokemon from "../../hooks/usePokemon";
import Pokemon from "../Pokemon/Pokemon";

const PokemonDetails = (pokemonName) => {
    const [pokemonDetails, setPokemonId,pokemonListState] = usePokemon(pokemonName);

    return(
            <>
            <div className="pokemon-details">
                <div className="pokemon-image">
                    <img src={(pokemonDetails.image) ? pokemonDetails.image :'https://demofree.sirv.com/nope-not-here.jpg'} alt={pokemonDetails.name} />
                </div>
                <div className="pokemon-info">
                    <div className="pre-next">

                        <button onClick={() =>
                            setPokemonId(id => Number(id) - 1)
                        } >Previous</button>

                        <h2><p className="id">{pokemonDetails.id} </p> {pokemonDetails.name}</h2>

                        <button onClick={() =>
                            setPokemonId(id => Number(id) + 1)
                        } >Next</button>

                    </div>
                    <dl>
                        <dt>Height:</dt>
                        <dd>{pokemonDetails.height}</dd>

                        <dt>Weight:</dt>
                        <dd>{pokemonDetails.weight}</dd>

                        <dt>Types:</dt>
                        <dd>{pokemonDetails.types}</dd>

                        <dt>Abilities:</dt>
                        <dd>{pokemonDetails.abilities}</dd>

                        <dt>Attack:</dt>
                        <dd>{pokemonDetails.attack}</dd>

                        <dt>Defense:</dt>
                        <dd>{pokemonDetails.defense}</dd>

                        <dt>Speed:</dt>
                        <dd>{pokemonDetails.speed}</dd>

                        <dt>Hp:</dt>
                        <dd>{pokemonDetails.hp}</dd>
                    </dl>

                </div>
            </div>
            <div className="similar-pokemon">
            <h2>Similar Pokemon</h2>
            <div className="pokemon-list-wrapper">
                {pokemonListState.pokemonList.map((pokemon) => (
                    <Pokemon
                        name={pokemon.name}
                        url={pokemon.image}
                        id={pokemon.id}
                        key={pokemon.id}
                    />
                ))}
            </div>
            </div>
            </>
                
    )
};




export default PokemonDetails