import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import { urlAPI } from "../../constants/urls";

export default function RegistrationPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const navigate = useNavigate();

    function sendRegister(event){
        event.preventDefault();
        const requisicao = axios.post(`${urlAPI}/auth/sign-up`, {
            email: email,
            name: nome,
            image: foto,
            password: password
        })
        requisicao.then(() => navigate("/"))
        requisicao.catch((erro) => console.log(erro))
    }

    return(
        <Container>
            <img src={logo} alt="logo trackit"/>
            <Form onSubmit={sendRegister}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" required/>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="nome" required/>
                <input type="link" value={foto} onChange={(e) => setFoto(e.target.value)} placeholder="foto" required/>
                <button type="submit">Cadastrar</button>
            </Form>
            <p>Já tem uma conta? Faça login!</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    img{
        height: 180px;
        width: 180px;
        margin-bottom: 22px;
    }

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
    }
`

const Form = styled.form`
    display:flex;
    flex-direction: column;

    input{
        height: 45px;
        width: 303px;
        margin-top: 10px;
        padding-left: 10px;

        ::placeholder{
            font-family: 'Lexend Deca', sans-serif;
            color: #DBDBDB;
            font-size: 19.976px;
            line-height: 25px;
        }
    }

    button{
        background: #52B6FF;
        border-radius: 4.65px;
        border-color: #52B6FF;
        height: 45px;
        margin-top: 10px;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
    }
`