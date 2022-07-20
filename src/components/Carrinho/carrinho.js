import React from "react"
import {CarrinhoContainer} from "./style"

/*export function Carrinho(){
      return <CarrinhoContainer>
           <></>



      </CarrinhoContainer>



}*/

const [produtosCarrinho, setProdutosCarrinho] = useState([]);


function compraProduto(nome){
    const copiaCompraProduto = [...compraProduto];
const novoProduto= copiaCompraProduto.find((produto)=>produto.nome=nome);
if(!novoProduto){
    copiaCompraProduto.push({nome:nome, quantidade:1});
}else{
    novoProduto.quantidade = produto.quantidade +1
}
setProdutosCarrinho(copiaCompraProduto);
}

function removeProduto(nome){
    const copiaCompraProduto = [...compraProduto];
    const novoProduto= copiaCompraProduto.find((produto)=>produto.nome=nome);

if(produto.quantidade >1){
    novoProduto.quantidade = produto.quantidade - 1;
    setProdutosCarrinho(copiaCompraProduto);
}else{  
    const arrayFiltered = copiaCompraProduto.filter(produto => produto.nome != nome )
}

setProdutosCarrinho(arrayFiltered)
}

return(
<CarrinhoContainer
value={{produtoCard, compraProduto, removeProduto}}>

</CarrinhoContainer>
);