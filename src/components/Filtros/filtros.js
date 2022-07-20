import React from "react"
import {FiltersContainer} from "./style"

//Componente que armazena meus inputs controlados
export function Filters(props){
      return <FiltersContainer>
            <input
               placeholder="Pesquisa por Nome"
               value={props.query}
               onChange={(ev) =>{props.setQuery(ev.target.value)}} 
            />

            <input
                placeholder="Preço Mínimo"
                type="number"
                value={props.minPrice}
                onChange={(ev) =>{props.setMinPrice(ev.target.value)}} 
            />

            <input
                placeholder="Preço Máximo"
                type="number"
                value={props.maxPrice}
                onChange={(ev) =>{props.setMaxPrice(ev.target.value)}} 
            />
      </FiltersContainer>
}

