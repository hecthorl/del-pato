import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem'
import './spiner.css'

const GifGrid = ({cat}) => {

   const { data,loading } = useFetchGifs(cat);


   return (
      <div className="w-full h-full flex flex-wrap justify-center space-x-5 space-y-5">
         {
            !loading 
            ? 
               data.map(imagen => {
                  return <GifItem key={imagen.id} {...imagen} />
               })
            : <div className="sk-cube-grid">
                  <div className="sk-cube sk-cube1"></div>
                  <div className="sk-cube sk-cube2"></div>
                  <div className="sk-cube sk-cube3"></div>
                  <div className="sk-cube sk-cube4"></div>
                  <div className="sk-cube sk-cube5"></div>
                  <div className="sk-cube sk-cube6"></div>
                  <div className="sk-cube sk-cube7"></div>
                  <div className="sk-cube sk-cube8"></div>
                  <div className="sk-cube sk-cube9"></div>
               </div>
         }
      </div>
   )
}

export default GifGrid
