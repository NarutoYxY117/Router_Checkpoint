import React from 'react'
import { useParams } from 'react-router-dom'
import "./Description.css"

const Desscription = ({list}) => {
    const params=useParams()
    const movie=list.find(el => el.title==params.title)
  return (
    <div className='des'>
     <h1 className='title'>{movie.title}</h1>
     <p className='description'>{movie.description}</p>
     <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" FrameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default Desscription