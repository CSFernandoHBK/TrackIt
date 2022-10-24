import { useState, useContext } from "react"
import styled from "styled-components"
import axios from "axios";
import { urlAPI } from "../../constants/urls";
import { AuthContext } from "../../context/auth";
import completed from "../../assets/images/completed.png";

export default function HabitCard(props) {
    const {name, id, done, currentSequence, highestSequence, setHabitosHoje} = props;
    const {infoUser} = useContext(AuthContext);
    const [concluido, setConcluido] = useState(done);

    function renderizarHabitos(){
        const config = {
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            }
        }
        
        const requisicao = axios.get(`${urlAPI}habits/today`, config);
        requisicao.then((e) => setHabitosHoje(e.data));
        requisicao.catch((e) => alert(e.response.data.message));
    }

    function completeHabit(){
        const config = {
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            }
        }

        const requisicao = axios.post(`${urlAPI}habits/${id}/check`, {}, config)
        requisicao.then((e) => renderizarHabitos())
        requisicao.catch((e) => console.log(e))
        
        setConcluido(!concluido)
    }

    function uncompleteHabit(){
        const config = {
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            }
        }

        const requisicao = axios.post(`${urlAPI}habits/${id}/uncheck`, {}, config)
        requisicao.then((e) => renderizarHabitos())
        requisicao.catch((e) => console.log(e))
        
        setConcluido(!concluido)
    }

    return(
        <Container concluido={concluido} currentSequence={currentSequence} highestSequence={highestSequence}>
            <div>
                <h1>{name}</h1>
                <h2>Sequência atual: {currentSequence} dias</h2>
                <h3>Seu recorde: {highestSequence} dias</h3>
            </div>
            <div onClick={concluido ? () => uncompleteHabit() : () => completeHabit()}>
                <img src={completed}/>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0;
    margin-bottom: 10px;
    
    img{
        width: 35px;
        height: 28px;
    }

    & > div:nth-child(2){
        width: 69px;
        height: 69px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${(props) => (props.concluido ? "#8FC549" : "#EBEBEB")};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }

    h1{
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }

    h2{
        font-size: 12.976px;
        line-height: 16px;
        color: ${(props) => (props.concluido ? "#8FC549" : "#666666")};
    }

    h3{
        font-size: 12.976px;
        line-height: 16px;
        color: #666666/*${(props) => ((props.currentSequence >= props.highestSequence) ? "#8FC549" : "#666666")};*/
    }
`