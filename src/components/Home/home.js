import React from "react"
import {Card, CardContainer} from "./style"

export const Home = (props) => {
      const componentsDados= props.meusCards.map((item, index)=>{
         return   <CardContainer>
                  <Card key={index}>
                  <img src={item.img} alt="Camiseta"/>
                  {item.name}
                  {item.price}
                  <button>Adicionar ao Carrinho</button>
                  </Card>
                  </CardContainer>
      })
      return(
            <div>
                  {componentsDados}

            </div>
      )
}
  
export default Home; 
