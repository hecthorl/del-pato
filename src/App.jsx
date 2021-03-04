import React from 'react';
// import PropTypes from 'prop-types';
import GifExpertApp from './GifyExpertApp';

const App = () => {
   
   return (
         <div className="w-full h-full bg-gradient-to-br from-light-blue-400 to-indigo-800 pb-10">
            <h1 
            className="text-cyan-700 text-8xl underline text-center py-10"
            > Giffy!!!
            </h1>
            <hr className="m-10 border border-black"/>
            <GifExpertApp />
         </div>
   );
};

/**
 * PropTypes son los tipos de propiedas que debe recibir este componente:
 */
// App.propTypes = {
//    saludo: PropTypes.string.isRequired
// }

/**
 * defaultProps => Establecer valores default en las props;
 */
// App.defaultProps = {
//    subtitulo: "Rising UP"
// }
export default App;
