import React, {useState} from 'react';
import {Home} from './components/Home/home';
import {Filters} from './components/Filtros/filtros';
import {Carrinho} from './components/Carrinho/carrinho'

//variável de estado que vai guardar o termo de busca
const [query, setQuery] = useState("")





function App() {
  return (
    <div>

        <Filters
          query={query}
          setQuery={setQuery}
        />
        <Home/>
        <Carrinho/>

    </div>
  );
}

export default App;
