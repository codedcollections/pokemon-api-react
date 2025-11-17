import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  const getPokemon = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    let json = await response.json()
    let answer = JSON.stringify(json.results)
    console.log("pokemons read:" + answer)
  }

  return (
    <>
      <h1>gello</h1>
      <button onClick={getPokemon}>fetch API pokemon</button>
    </>
  )
}

export default App
