import React from 'react'
import { useParams } from 'react-router-dom'

function Project(props) {
  let {id} = useParams();
  let link = props.hrefs.find((urls)=>{
   
    return urls.id === +id
  })
  
  
  return (
    <iframe src={link.url} style={{"width":"100%","height":"100vh"}}></iframe>
  )
}

export default Project