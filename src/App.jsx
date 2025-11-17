import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(false)
  const [pokemonArr, setPokemonArr] = useState(null)

  const getPokemon = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    let json = await response.json()
    console.log(json)
    //let answer = JSON.stringify(json.results)
    setPokemonArr(json.results)

    setCount(true)
  }

  return (
    <>
      <h1>gello</h1>
      <button onClick={getPokemon}>fetch API pokemon</button>
      {pokemonArr && pokemonArr.map((pokemon) => <h1>{pokemon.name}</h1>)}
    </>
  )
}

export default App
