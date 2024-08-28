function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>{pokemon.korean_name}</p>
      <p>{`No.${pokemon.id}`}</p>
      {/* {isSelected ? (
        <button onClick={onAdd(pokemon)}>삭제</button>
      ) : (
        <button onClick={onRemove(pokemon)}>추가</button>
      )} */}
    </div>
  );
}

export default PokemonCard;
