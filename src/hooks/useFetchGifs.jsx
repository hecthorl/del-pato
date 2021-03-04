import getGifs from "../helpers/getGifs"
const { useState, useEffect } = require("react")


const useFetchGifs = cat => {

   const [state, setState] = useState({
      data: [],
      loading: true
   });

   useEffect(() => {

      getGifs(cat).then(imgs => {
         
         return setState({
            data: imgs,
            loading: !true
         })
      })

   }, [cat])

   return state;
         
}

export default useFetchGifs