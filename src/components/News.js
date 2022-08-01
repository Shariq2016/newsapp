import React from 'react'

function News(props) {
  return (
    <div className='my-3'>
        <div className="card" >
         <div style={{display:'flex',justifyContent:"flex-end"}}>
  <span class=" badge rounded-pill bg-danger" >
   {props.source}</span>
    </div>   
        <img src={props.imgurl}   />
        <div className="card-body" >
      

          <h5 className="card-title">{props.title} </h5>
          <p className="card-text">{props.description}...</p>
          <p className="card-text"><small class="text-muted"> By {!props.author?'Media Sources':props.author} on {new Date(props.date).toGMTString()}</small></p>
          <a href={props.newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
      </div> 
  )
}

export default News