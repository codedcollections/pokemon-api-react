import { useState } from "react"
import "./App.css"
import PokemonImg from "./components/PokemonImg"
import Pokemon from "./components/Pokemon"
PokemonImg
function App() {
  const [count, setCount] = useState(false)
  const [pokemonArr, setPokemonArr] = useState(null)
  const [fetchedImg, setFetchedImg] = useState(null)

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
      "to find type name of pokemon : " +
        JSON.stringify(json.types[0].type.name)
    )
    console.log(
      "to find abilites of pokemon : " + JSON.stringify(json.abilities)
    )
    console.log(
      "sprites of pokemon : " + JSON.stringify(json.sprites.front_default)
    )
    setFetchedImg(json.sprites.front_default)
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
          <div key={i} className="pokemon-card">
            <Pokemon data={pokemon} />
            {/* <h1>{pokemon.name}</h1>
            <button
              onClick={() => {
                getData(pokemon.url)
              }}
            >
              fetch extra info
            </button>
            {/* {fetchedImg && <img src={fetchedImg} alt={pokemon.name} />} */}
            {/* {fetchedImg && <PokemonImg url={fetchedImg} />} */}
          </div>
        ))}
    </>
  )
}

export default App
