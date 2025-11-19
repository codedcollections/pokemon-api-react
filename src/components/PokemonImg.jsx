const PokemonImg = (props) => {
  console.log(
    "Entered pokemonimg compoponent . sees props as: " + JSON.stringify(props)
  )
  return (
    <>
      <img src={props.url} alt="other" />
    </>
  )
}
export default PokemonImg
