import React from 'react';
import {Card} from "./Style"

export const Home = (props) => {
      const componentsDados= props.meusCards.map((item, index)=>{
         return <Card key={index}>
                  <img src={item.img} alt="Camiseta"/>
                  {item.name}
                  {item.price}
                  <button>Adicionar ao Carrinho</button>
                  </Card>
      })
      return(
            <div>
                  {componentsDados}
                  </div>
      )
}
