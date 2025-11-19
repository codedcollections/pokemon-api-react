import { useState, useEffect } from "react"

const PokemonApplication = (props) => {
  /*   console.log(props) */
  const pokemonArr = props.data
  const [choice, setChoice] = useState("")
  /*   console.log("sees props as: " + JSON.stringify(props.data)) */
  //Mounting
  useEffect(() => {
    console.log("Mounting")

    return () => {
      console.log("Unmounting!")
    }
  }, [])

  return (
    <>
      <h1>hi</h1>
      <h1> Pokemon application</h1>
      <div className="choose-pokemon">
        <select
          name="choice"
          id="choice"
          onChange={(event) => setChoice(event.target.value)}
        >
          <option value="">Välj kategori</option>
          {pokemonArr.map((pokemon, i) => (
            <option key={i} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
          {/*  {pokemonArr.map((type) => (
                 <option value={type}>{type}</option>
               ))} */}
        </select>
        <button onClick={() => console.log(choice)}>Show Pokemon</button>
      </div>
    </>
  )
}
export default PokemonApplication
