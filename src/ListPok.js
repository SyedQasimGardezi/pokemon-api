import React from 'react'

export default function ListPok({pokemon}) {
  return (
    <div> 
        {pokemon.map(p=>(
            <ul style={{height:"5px"}} key={p}>
                <li>{p}</li>
            </ul>
        ))}
    </div>
  )
}
