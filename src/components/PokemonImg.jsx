const PokemonImg = (props) => {
  console.log("sees props as: " + props.url)
  return (
    <>
      <img src={props.url} alt="other" />
    </>
  )
}
export default PokemonImg
