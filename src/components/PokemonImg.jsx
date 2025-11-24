const PokemonImg = ({ url }) => {
  console.log(
    "Entered pokemonimg compoponent . sees props as: " + JSON.stringify(url)
  )
  return (
    <>
      <img src={url} alt="other" />
    </>
  )
}
export default PokemonImg
