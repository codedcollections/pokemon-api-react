import { useState, useEffect } from "react"
import PokemonImg from "./PokemonImg"

const Pokemon = ({ data }) => {
  console.log(
    "Pokemon component: Pokemon props is seen as: " + JSON.stringify(data.name)
  )
  const [fetchedImg, setFetchedImg] = useState(null)
  const [fetchedWeight, setFetchedWeight] = useState(null)
  const [fetchedHeight, setFetchedHeight] = useState(null)
  const [fetchedTypes, setFetchedTypes] = useState(null)
  const getData = async (url) => {
    let response = await fetch(`${url}`)
    let json = await response.json()
    console.log(
      "pokemon component. json response from API call is seen as:" +
        JSON.stringify(json)
    )
    console.log(
      "pokemon component. weight is seen as:" + JSON.stringify(json.weight)
    )
    console.log(
      "pokemon component. show types:" +
        JSON.stringify(JSON.stringify(json.types))
    )
    console.log(
      "pokemon component. height measurement:" + JSON.stringify(json.height)
    )
    setFetchedImg(json.sprites.front_default)
    setFetchedWeight(json.weight)
    setFetchedHeight(json.height)
  }
  //Mounting
  useEffect(() => {
    console.log("Mounting")

    {
      getData(data.url)
    }

    return () => {
      console.log("Unmounting!")
    }
  }, [])

  useEffect(() => {
    {
      getData(data.url)
    }
    console.log("saw a change in image url!")
  }, [data.url])

  return (
    <>
      <h1>{data.name}</h1>

      <div className="pokemon-details">
        <h2>type:</h2>
        <h2>weight:{"test text"}</h2>
        <h2>height:</h2>
      </div>
      {/*       <button
        onClick={() => {
          getData(props.data.url)
        }}
      >
        show img
      </button> */}
      {fetchedImg && <PokemonImg url={fetchedImg} />}
    </>
  )
}
export default Pokemon
