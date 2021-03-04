import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

   const [categorias, setCategorias] = useState([]);

   return (
      <div>
         <AddCategory setCategorias={setCategorias} />
         <ol className="text-center text-2xl">

         {
            categorias.map(cat => <GifGrid cat={cat} key={cat} />)
         }
           
         </ol>
      </div>
   )
}

/**
 * PropTypes son los tipos de propiedas que debe recibir este componente:
 */
// CounterApp.propTypes = {
//    value: PropTypes.number.isRequired
// }

export default GifExpertApp
