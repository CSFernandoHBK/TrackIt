import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HabitCard from "./HabitCard";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import { urlAPI } from "../../constants/urls";
import axios from "axios";
import dayjs from "dayjs";

export default function TodayPage() {
    const {infoUser} = useContext(AuthContext);
    const [habitosHoje, setHabitosHoje] = useState([]);
    
    dayjs.locale('pt-br')
    let now = dayjs().format('dddd, DD/MM')
    // console.log(dayjs().day())
    // console.log(dayjs().date())
    // console.log(dayjs().month())

    const config = {
        headers: {
            "Authorization": `Bearer ${infoUser.token}`
        }
    }

    useEffect(() => {
        const requisicao = axios.get(`${urlAPI}habits/today`, config);
        requisicao.then((e) => setHabitosHoje(e.data));
        requisicao.catch((e) => alert(e.response.data.message));
    }, []);

    if(habitosHoje === undefined){
        return(<div>Carregando</div>)
    }

    if(habitosHoje === null){
        return(<div>Nenhum hábito hoje</div>)
    }

    return(
        <Container>
            <Header/>
            <Content>
                <div>
                    <h1>{now}</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                </div>
                {habitosHoje.map((h, index) => 
                <HabitCard 
                name={h.name} 
                id={h.id}
                done={h.done}
                currentSequence={h.currentSequence}
                highestSequence={h.highestSequence}
                key={index}
                />)}
            </Content>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    background: #E5E5E5;
    height: 100vh;
    width: 100vw;
`

const Content = styled.div`
    margin-top: 28px;
    padding: 0 18px 0;

    & > div:nth-child(1){
        margin-bottom: 28px;
    }

    & > div:nth-child(1) h1{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    & > div:nth-child(1) h2{
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }

`
