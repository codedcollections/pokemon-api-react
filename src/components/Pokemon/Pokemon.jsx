import { useState, useEffect } from "react"
import PokemonImg from "../PokemonImg/PokemonImg"
import s from "./Pokemon.module.css"

const Pokemon = ({ data }) => {
  const [fetchedImg, setFetchedImg] = useState(null)
  const [fetchedWeight, setFetchedWeight] = useState(null)
  const [fetchedHeight, setFetchedHeight] = useState(null)
  const [fetchedTypes, setFetchedTypes] = useState([])

  const getData = async (url) => {
    //deletes array history in case other pokemon types were fetched before
    setFetchedTypes([])
    let response = await fetch(`${url}`)
    let json = await response.json()

    setFetchedImg(json.sprites.front_default)
    setFetchedWeight(json.weight)
    setFetchedHeight(json.height)
    setFetchedTypes(json.types)
  }
  //to make getData run when component is mounting
  useEffect(() => {
    {
      getData(data.url)
    }

    return () => {}
  }, [])

  useEffect(() => {
    {
      //to make getData run when data.url is changing
      getData(data.url)
    }
  }, [data.url])

  return (
    <>
      <div className={s.details}>
        <h2 className={s.name}>{data.name}</h2>
        {fetchedImg && (
          <div className={s.imagebackground}>
            <PokemonImg url={fetchedImg} />
          </div>
        )}
        <div className={s.textinfo}>
          <p>
            <strong>type:</strong>
            {fetchedTypes.map((types, i) => (
              <span key={i}> {types.type.name} </span>
            ))}
          </p>
          <p>
            <strong>weight:</strong>
            {fetchedWeight}
          </p>

          <p>
            <strong>height:</strong>
            {fetchedHeight}
          </p>
        </div>
      </div>
    </>
  )
}
export default Pokemon
