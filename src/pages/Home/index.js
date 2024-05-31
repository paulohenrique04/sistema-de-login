import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import useProducts from "../../hooks/useProducts";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const [nome, setNome] = useState();
  const [preco, setPreco] = useState();
  const { addProduct, products, removeProduct } = useProducts();

  const handleAddProduct = () => {
    addProduct(nome, preco);
  }

  const handleRemoveProduct = (id) => {
    removeProduct(id);
  }

  function formatToBRL(value) {
    value = value.replace(/[^\d,.-]/g, '');
    
    value = value.replace(/,/g, '.');
    
    let number = parseFloat(value);
    if (isNaN(number)) return '';

    return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

  return (
    <C.Container>
      <C.Form>
        <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome do produto" />
        <Input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} placeholder="Preço do produto" />
        <Button onClick={handleAddProduct} Text={"Adicionar"} />
      </C.Form>

      <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.nome}</td>
            <td>{formatToBRL(product.preco)}</td>
            <button type="button" onClick={() => handleRemoveProduct(product.id)} class="btn btn-dark w-6">x</button>
          </tr>
        ))}
      </tbody>
    </table>
    </C.Container>
  );
};

export default Home;