import { useState } from "react"
import PokemonImg from "./PokemonImg"

const Pokemon = (props) => {
  console.log("Pokemon props is seen as: " + JSON.stringify(props.data.name))
  /* const [count, setCount] = useState(false) */
  const [fetchedImg, setFetchedImg] = useState(null)

  const getData = async (url) => {
    let response = await fetch(`${url}`)
    let json = await response.json()
    let array = json.results
    console.log(json)
    //To show the grass type of a pokemon
    /*     console.log(
      "to find type name of pokemon : " +
        JSON.stringify(json.types[0].type.name)
    ) */
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
      <h1>{props.data.name}</h1>
      <button
        onClick={() => {
          getData(props.data.url)
        }}
      >
        show img
      </button>
      {fetchedImg && <PokemonImg url={fetchedImg} />}
    </>
  )
}
export default Pokemon
