import React  from 'react';
import {Home} from './components/Home/Home';
import {Filtros} from './components/Filtros/Filtros';
/* import {Carrinho} from './components/Carrinho/Carrinho'; */
 import {listaDeDados} from './mockDeDados'


function App() {


  /* const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity) 
  const [maxPrice, setMaxPrice] = useState(Infinity) */
 
  return (
    <div>
       <Filtros
           
            
        />

     
    <Home meusCards={listaDeDados}/>
        

    </div>
  );
}

export default App;

