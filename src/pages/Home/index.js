import React, { useState, useRef } from "react";

import axios from "axios";

/*import { useHistory } from "react-router-dom";*/
import { useNavigate } from "react-router-dom";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

/*import "./style.css";*/
import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles"

import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow-rigth.svg"

/*
outro jeito de criar o App

export default function App (){
  return <div>Hello Word</div>
}

desse jeito já se cria a função e exporta ela
*/

/* JSX -> MISTURAR HTML COM JAVA SCRIPT */

/* React Hooks => FERRAMENTAS AUXILIARES*/

function App() {
  const [users, setUsers] = useState([]); //React Hooks -> criar um estado no React

  const navigate = useNavigate();
  //const [name, setName] = useState();
  //const [age, setAge] = useState();

  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", { 
      nome: inputName.current.value, 
      idade: inputAge.current.value
    });

    console.log(newUser)

    setUsers([...users, newUser]);

    navigate("/usuarios");

    //setUsers([{id: Math.random(), name: "Fabio", age: 42}]);
    //setUsers( [ ...users, { id: Math.random(), name, age } ] ); //spread operator -> Derrama itens e junta com o array 
    /*console.log(inputName.current.value)
    console.log(inputAge.current.value)
    setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }])*/
  }
  /* Primeiro jeito utilizanso o onChange criando funcoes
  function changeInputName(event) {
    console.log(event.target.value)
    setName(event.target.value)
  }
  
  function changeInputAge(event) {
    setAge(event.target.value)
  }
  */
  /* Primeiro jeito utilizanso o onChange
    return (
      <Container>
        <Image alt="logo-image" src={People} />
        <ContainerItens>
          <H1>Olá</H1>
  
          <InputLabel>Nome</InputLabel>
          <Input onChange={changeInputName} placeholder="Nome" />
  
          <InputLabel>Idade</InputLabel>
          <Input onChange={changeInputAge} placeholder="Idade" ></Input>
  
          <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /> </Button>
  
          <ul>
            { users.map( (user) => (
              <User key = {user.id}>
                 <p> { user.name } </p>
                 <p> { user.age } </p>
                 <button><img src= {Trash} alt="lata de lixo"/></button>
              </User>
            ))}
          </ul>
        </ContainerItens>
  
      </Container>
    );
  */
  /* Segundo Jeito utilizando */
  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" ></Input>

        <Button onClick={ addNewUser }>Cadastrar <img alt="seta" src={Arrow} /> </Button>

      </ContainerItens>

    </Container>
  );

}

export default App