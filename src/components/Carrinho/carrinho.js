import React,{useState} from "react"
import {CarrinhoContainer, CardCarrinho} from "./style"

{/*----------tentativa de fazer a lógica do carrinho--------------------
const [produtosCarrinho, setProdutosCarrinho] = useState([]);


export function compraProduto(name){
    const copiaCompraProduto = [...compraProduto];
const novoProduto= copiaCompraProduto.find((item)=>{item.name}=nome);
if(!novoProduto){
    copiaCompraProduto.push({nome:{item.name}, quantidade:1});
}else{
    novoProduto.quantidade = item.quantidade +1
}
setProdutosCarrinho(copiaCompraProduto);
localStorage.setItem("Carrinho", JSON.stringify(produtosCarrinho))
}

function removeProduto(nome){
    const copiaCompraProduto = [...compraProduto];
    const novoProduto= copiaCompraProduto.find((item)=>item.nome=nome);

if(item.quantidade >1){
    novoProduto.quantidade = item.quantidade - 1;
    setProdutosCarrinho(copiaCompraProduto);
}else{  
    carrinhoMenor = copiaCompraProduto.filter(produto => produto.nome != nome )
}

setProdutosCarrinho(carrinhoMenor)
}

*/}



export const Comprar = (props) => {
        const itensCompra= props.minhaCompra.map((item, index)=>{
    return <CarrinhoContainer>
        <CardCarrinho key={index}>
                  <img src={item.img} alt="Camiseta"/>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  </CardCarrinho>
                  <button >add</button>
                  <button >remove</button>
        </CarrinhoContainer>
    
})
return(
    <div>
        <h3>Carrinho de Compras:</h3>
          {itensCompra}

    </div>
)
}

export default Comprar; 
