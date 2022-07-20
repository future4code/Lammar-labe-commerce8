import React from 'react';
import {HomeContainer} from "./style"


export const Home=(props)=>{
      const componentsCards=props.meusCards.map((item, index)=>{
      return <li key={index}>
            {item.name}
            {item.price}
            {item.img}
            </li>
      
})

      return ( 
      <HomeContainer>
            {componentsCards}
      </HomeContainer>
      )
}

export default Home;
