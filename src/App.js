import React, {useState} from 'react';
import {Home} from './components/Home/home';
import {Filters} from './components/Filtros/filtros';
import {Carrinho} from './components/Carrinho/carrinho';



//variável de estado que vai guardar o termo de busca
   const [query, setQuery] = useState("")
   const [minPrice, setMinPrice] = useState(-Infinity) 
   const [maxPrice, setMaxPrice] = useState(Infinity)

function App() {
  return (
    <div>

        <Filters
            query={query}
            minPrice={minPrice}
            maxPrice={maxPrice}

            setQuery={setQuery} 
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
        />
        <Home/>
       
        <Carrinho/>

    </div>
  );
}

export default App;
