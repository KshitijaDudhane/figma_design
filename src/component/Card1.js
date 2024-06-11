import React from 'react'

const card = (props) => {
  return (
    <div>
      <div className='cardContainr'>
             <div className='imgContainer'>
                <img src ={props.imageurl} alt ='imageurl'></img>
             </div>
             <div className='cardContent'>
             <div className='cardTitle'>
              <h1 className='title'>{props.title}</h1>
             </div>
             <div className='cardBody'>
              <p>{props.body}</p>
             </div>
             </div>
             

        </div>
    </div>
  )
}

export default card
