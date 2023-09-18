import { useEffect, useState } from "react";

const CaracterPage = () => {
  const [characters, setCaracter] = useState({
    results: []
  })

  const fetchCaracter = async () => {
    const result = await fetch('https://rickandmortyapi.com/api/character/?page=1')
    const json = await result.json()
    setCaracter(json)
  }

  useEffect(() => {
    fetchCaracter()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '30px',
        width: '100vw',
        height: '100vh',
        flexWrap: 'wrap'
      }}
    >
      {
        characters.results.map((character, index) => <CharacterCard key={index} character={character} />)
      }
    </div>
  )
}

const
  CharacterCard = ({ character }) => {
    return (
      <div
        style={{
          width: '300px',
          height: '340px',
          padding: '20px',
          borderRadius: '20px',
          background: '#000000'
        }}
      >
        <img src={character.image} width={200} height={200} />
        <div>
          <p>Nombre: {character.name}</p>
          <p>Specie: {character.species}</p>
          <p>Alive: {character.status === 'Alive' ? 'SI' : 'NO'}</p>
          <button onClick={() => { alert(`hiciste click en el id: ${character.id}`) }}> Get id</button>
        </div>
      </div>
    )
  }

export default CaracterPage