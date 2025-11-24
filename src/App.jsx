import { useState } from "react"
import "./App.css"
import PokemonImg from "./components/PokemonImg"
import Pokemon from "./components/Pokemon"
import PokemonApplication from "./components/PokemonApplication.jsx"
PokemonImg
function App() {
  const [count, setCount] = useState(false)
  const [pokemonArr, setPokemonArr] = useState(null)
  const [fetchedImg, setFetchedImg] = useState(null)
  const [nameArray, setNameArray] = useState([])
  const [choice, setChoice] = useState("")

  const getPokemon = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    let json = await response.json()
    let array = json.results
    console.log(json)
    console.log("url is seen as: " + JSON.stringify(array[0].url))
    //let answer = JSON.stringify(json.results)
    setPokemonArr(array)

    setCount(true)
  }

  return (
    <>
      <button onClick={() => getPokemon()}>Start Pokemon Application</button>
      {pokemonArr && <PokemonApplication pokemonArr={pokemonArr} />}
    </>
  )
}

export default App
