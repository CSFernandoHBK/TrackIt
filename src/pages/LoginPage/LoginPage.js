import axios from "axios";
import { useState , useContext} from "react"
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import logo from "../../assets/images/logo.png"
import { urlAPI } from "../../constants/urls";
import { AuthContext } from "../../context/auth";

export default function LoginPage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {infoUser,setInfoUser} = useContext(AuthContext);
    const navigate = useNavigate();

    function configData(resp){
        setInfoUser(resp.data);
        navigate("/hoje");
    }

    function sendLogin(event){
        event.preventDefault();
        const requisicao = axios.post(`${urlAPI}auth/login`, {
            email: email,
            password: password
        })
        requisicao.then((resp) => configData(resp))
        requisicao.catch((erro) => alert(erro.response.data.message))
    }

    return(
        <Container>
            <img src={logo} alt="logo trackit"/>
            <Form onSubmit={sendLogin}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" required/>
                <button type="submit">Entrar</button>
            </Form>
            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
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