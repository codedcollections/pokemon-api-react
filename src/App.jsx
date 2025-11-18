import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(false)
  const [pokemonArr, setPokemonArr] = useState(null)

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

  const getData = async (url) => {
    let response = await fetch(`${url}`)
    let json = await response.json()
    let array = json.results
    console.log(json)
    //To show the grass type of a pokemon
    console.log(
      "in the pokemon things are seen as : " +
        JSON.stringify(json.types[0].type.name)
    )
    //let answer = JSON.stringify(json.results)
    /*     setPokemonArr(array) */
    /* 
    setCount(true) */
  }
  return (
    <>
      <h1>gello</h1>
      <button onClick={getPokemon}>fetch API pokemon</button>
      {pokemonArr &&
        pokemonArr.map((pokemon, i) => (
          <>
            <h1 key={i}>{pokemon.name}</h1>
            <button
              onClick={() => {
                getData(pokemon.url)
              }}
            >
              fetch extra info
            </button>
            <img src="" alt={pokemon.name} />
          </>
        ))}
    </>
  )
}

export default App
