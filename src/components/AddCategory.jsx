import React, { useState } from 'react'
import PropTypes from 'prop-types';


const AddCategory = ({setCategorias}) => {

   const [inputValue, setInputValue] = useState("")

   //handleChange ==> Recoje el value que hay en el INPUT tag
   const handleChange = ({target:{value}}) => setInputValue(value);
   

   //handleSubmit ==> Envia a travez de "setCategorias" el valor actual de input.
   const handleSubmit = event => {
      event.preventDefault();
      setCategorias(cats => [inputValue,...cats,])
      setInputValue("")
   }
   return (
      <form 
         className="text-center my-5"
         onSubmit={handleSubmit}
      >
         <h1 className="text-center my-5 h-10">{inputValue}</h1>
         <input 
            className="border-2 text-green-600 border-red-600 focus:outline-none focus:border-blue-600 rounded h-8 w-60 p-2" 
            type="text"
            value={inputValue}
            key="input"
            onChange={handleChange}
         />
      </form>
   )
}

AddCategory.propTypes = {
   setCategorias: PropTypes.func.isRequired
}

export default AddCategory
