import { useState } from "react"
import "./App.css"
import PokemonImg from "./components/PokemonImg/PokemonImg.jsx"
import PokemonApplication from "./components/PokemonApplication/PokemonApplication.jsx"
PokemonImg
function App() {
  const [show, setShow] = useState(true)
  const [pokemonArr, setPokemonArr] = useState(null)

  const getPokemon = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    let json = await response.json()
    let array = json.results
    setPokemonArr(array)
  }

  return (
    <>
      <button
        onClick={() => {
          getPokemon()
          setShow(!show)
        }}
      >
        {show ? "Start Pokemon Application" : "Exit Pokemon Application"}
      </button>
      {pokemonArr && !show && <PokemonApplication pokemonArr={pokemonArr} />}
    </>
  )
}

export default App
