import React from 'react'

const GifItem = imagen => {
   const { title, img_url} = imagen;
   return (
      <div className="flex justify-start space-x-5 space-y-5">
         <div className="inline-block">
            <h1>{title}</h1>
            <img className="max-w-md" src={img_url} alt={title}/>
         </div>
      </div>
   )
}

export default GifItem
