
import React from "react";
import {FiltrosContainer} from "./style"
import {DigitaFiltro} from "./style"

export function Filtros(props){
    return <DigitaFiltro> 
               <h3>Filtros</h3>
        <FiltrosContainer>
          <label>Pesquisa por nome:</label>
          <input
               placeholder="Busca por nome:"
               value={props.query}
               onChange={(ev) =>{props.setQuery(ev.target.value)}} 
            />
            <label>Preço Mínimo</label>
            <input
                placeholder="Valor Mínimo:"
                type="number"
                value={props.minPrice}
                onChange={(ev) =>{props.setMinPrice(ev.target.value)}} 
            />
            <label>Preço Máximo</label>
            <input
                placeholder="Valor Máximo:"
                type="number"
                value={props.maxPrice}
                onChange={(ev) =>{props.setMaxPrice(ev.target.value)}} 
            />
    </FiltrosContainer>
    </DigitaFiltro>
    
}
