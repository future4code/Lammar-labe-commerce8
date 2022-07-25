import React, {useState}  from 'react';
import {Home} from './components/Home/home';
import {Filtros} from './components/Filtros/filtros';
import {Comprar} from './components/Carrinho/carrinho';
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
       <Comprar minhaCompra={listaDeDados}/>
    </ContainerPrincipal>
  );
}

export default App;

