import React, { useState, useEffect } from "react";
import axios from "axios";

/*import { useHistory } from "react-router-dom"*/
import { useNavigate } from "react-router-dom";
 
/*import "./style.css";*/
import {
  Container,
  Image,
  User
} from "./styles"

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow-rigth.svg";
import Trash from "../../assets/trash.svg";


function Users() {
  const [users, setUsers] = useState([]); //React Hooks -> criar um estado no React

  const navigate = useNavigate();

  //console.log(history)

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      //console.log(newUsers)

      setUsers(newUsers)
    }

    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    //console.log(userId)
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage(){
    navigate("/");
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ContainerItens isBlur = {true} >
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.nome} </p>
              <p> {user.idade} </p>
              <button onClick={() => deleteUser(user.id)} >
                <img src={Trash} alt="lata de lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={ true } onClick={goBackPage} ><img alt="seta" src={Arrow}/> Voltar </Button>
          
      </ContainerItens>

    </Container>
  );

}

export default Users