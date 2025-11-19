import { useState, useEffect } from "react"
import Pokemon from "./Pokemon"

const PokemonApplication = (props) => {
  /*   console.log(props) */
  const pokemonArr = props.data
  const [choice, setChoice] = useState("")
  const [matched, setMatched] = useState(null)
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
        <button
          onClick={() => {
            let found = pokemonArr.find((element) => element.name === choice)
            console.log("Found is: " + JSON.stringify(found))
            setMatched(found)
            console.log("matched is " + matched)
          }}
        >
          Show Pokemon
        </button>
      </div>
      {matched && <Pokemon data={matched} />}
    </>
  )
}
export default PokemonApplication
