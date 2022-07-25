import React, {useState}  from 'react';
import {Home} from './components/Home/Home';
import {Filtros} from './components/Filtros/Filtros';
import {Carrinho} from './components/Carrinho/Carrinho';
import {ContainerPrincipal} from "./components/Home/style";
import {listaDeDados} from './mockDeDados';

function App() {
  
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity) 
  const [maxPrice, setMaxPrice] = useState(Infinity) 
 
  return (
    <ContainerPrincipal>
       <Filtros
          query={query}
          minPrice={minPrice}
          maxPrice={maxPrice}

          setQuery={setQuery} 
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
       />
        
       <Home meusCards={listaDeDados}/>
       <Carrinho></Carrinho>
    </ContainerPrincipal>
  );
}

export default App;

