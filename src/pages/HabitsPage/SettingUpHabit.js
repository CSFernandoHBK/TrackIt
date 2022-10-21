import { useState } from "react"
import styled from "styled-components"
import Weekday from "./Weekday";
import {daysAb} from "../../constants/days";
import axios from "axios";
import { urlAPI } from "../../constants/urls";

export default function SettingUpHabit() {

    const [nome, setNome] = useState("");
    const [indexDiasSelecionados, setIndexDiasSelecionados] = useState([]);

    function sendHabit(event){
        event.preventDefault();
        const requisicao = axios.post(`${urlAPI}habits`, {
            name: nome,
            days: indexDiasSelecionados
        })
        requisicao.then()
    }

    return (
        <Container>
            <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="nome do hábito" />
            <ContainerSemana>
                {daysAb.map((d, index) => 
                <Weekday dia={d}
                index={index} 
                indexDiasSelecionados={indexDiasSelecionados}
                setIndexDiasSelecionados={setIndexDiasSelecionados}
                key={index}/>)}
            </ContainerSemana>
            <div>
                <div onClick={() => (alert("cancelado"))}>Cancelar</div>
                <SaveButton onClick={() => (alert("salvo"))}>Salvar</SaveButton>
            </div>
        </Container>
    )
}

const ContainerSemana = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 8px;
    margin-bottom: 30px;
`

const Container = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    height: 180px;
    padding: 18px 18px 15px;
    margin: 0 18px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    input{
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        ::placeholder{
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
            padding-left: 10px;
        }
    }

    & > div:nth-child(3){
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 35px;
    }
`

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: 1px solid #D5D5D5;
    font-size: 15.976px;
    line-height: 20px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 23px;
`