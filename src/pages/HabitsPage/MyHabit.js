import { useState, useContext } from "react";
import styled from "styled-components";
import deleteIcon from "../../assets/images/deleteIcon.png";
import { daysAb } from "../../constants/days";
import { urlAPI } from "../../constants/urls";
import { AuthContext } from "../../context/auth";
import axios from "axios";

export default function MyHabit(props) {
    const {name, days, id} = props;
    const {infoUser} = useContext(AuthContext);

    function verificarDia(index){
        if(days.includes(index)){
            return(true)
        } else {
            return(false)
        }
    }

    function excluirHabito(){
        const config = {
            headers: {
                "Authorization": `Bearer ${infoUser.token}`
            }
        }

        const requisicao = axios.delete(`${urlAPI}habits/${id}`, config)
        requisicao.then((e) => console.log(e))
        requisicao.catch((e) => console.log(e))
    }

    return (
        <Container>
            <div>
                <h1>{name}</h1>
                <div>
                    {daysAb.map((d, index) => (
                        <Weekday index={index} verificarDia={verificarDia} key={index}>{d}</Weekday>
                    ))}
                </div>
            </div>
            <img onClick={() => excluirHabito()} src={deleteIcon} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 5px;
    height: 90px;
    padding: 13px 15px 15px;
    margin: 20px 18px 0;

    h1{
        margin-bottom: 8px;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    & > div:nth-child(1) :nth-child(2){
        display: flex;
    }

    img{
        height: 15px;
        width: 13px;
    }
`

const Weekday = styled.div`
    background: ${(props) => (props.verificarDia(props.index) ? "#CFCFCF" : "#FFFFFF")};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19.976px;
    line-height: 25px;
    color: ${(props) => (props.verificarDia(props.index) ? "#FFFFFF" : "#CFCFCF")};
    margin-right: 5px;
`

