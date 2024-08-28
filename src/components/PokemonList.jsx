import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  return (
    <div>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={onAddPokemon}
            isSelected={false}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
