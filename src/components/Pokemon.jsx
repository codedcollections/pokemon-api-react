import { useState, useEffect } from "react"
import PokemonImg from "./PokemonImg"

const Pokemon = (props) => {
  console.log("Pokemon props is seen as: " + JSON.stringify(props.data.name))
  const [fetchedImg, setFetchedImg] = useState(null)
  //Mounting
  useEffect(() => {
    console.log("Mounting")
    const getData = async (url) => {
      let response = await fetch(`${url}`)
      let json = await response.json()
      setFetchedImg(json.sprites.front_default)
    }
    {
      getData(props.data.url)
    }

    return () => {
      console.log("Unmounting!")
    }
  }, [])

  useEffect(() => {
    console.log("Mounting")
    const getData = async (url) => {
      let response = await fetch(`${url}`)
      let json = await response.json()
      setFetchedImg(json.sprites.front_default)
    }
    {
      getData(props.data.url)
    }
    console.log("saw a change in image url!")
  }, [props.data.url])

  return (
    <>
      <h1>{props.data.name}</h1>
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
