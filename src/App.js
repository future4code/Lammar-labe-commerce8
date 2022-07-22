import React from 'react';
import {Home} from './components/Home/Home';
/* import {Filters} from './components/Filtros/Filtros';
import {Carrinho} from './components/Carrinho/Carrinho';
 */
import {listaDeDados} from './mockDeDados'


function App() {
 
  return (
    <div>

     
      <Home meusCards={listaDeDados}/>
        

    </div>
  );
}

export default App;

