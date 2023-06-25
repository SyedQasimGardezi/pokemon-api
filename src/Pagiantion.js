import React from 'react'

export default function Pagiantion({next,previous}) {
  return (
    <div>
        {previous && <button onClick={previous}>previous</button>}
        {next && <button onClick={next}>next</button>}
    </div>
  )
}
