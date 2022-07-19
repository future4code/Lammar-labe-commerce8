import React from "react"
import {FiltersContainer} from "./style"


//Componente que armazena meus inputs controlados
export function Filters(props){
      return <FiltersContainer>
            <input
             placeholder="Pesquisa"
             value={props.query}
             onChange={(ev) =>{props.setQuery(ev.target.value)}}

             />



      </FiltersContainer>



}

