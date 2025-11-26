import { useState, useEffect } from "react"
import Pokemon from "../Pokemon/Pokemon"
import s from "./PokemonApplication.module.css"

const PokemonApplication = ({ pokemonArr }) => {
  const [choice, setChoice] = useState("")
  const [matched, setMatched] = useState(null)

  return (
    <div>
      <h1> Pokemon application</h1>
      <div className={s.choosepokemon}>
        <select
          name="choice"
          id="choice"
          onChange={(event) => setChoice(event.target.value)}
        >
          <option value="">Choose a Pokemon</option>
          {pokemonArr.map((pokemon, i) => (
            <option key={i} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            let found = pokemonArr.find((element) => element.name === choice)
            setMatched(found)
          }}
        >
          Show Pokemon
        </button>
      </div>
      {matched && <Pokemon data={matched} />}
    </div>
  )
}
export default PokemonApplication
