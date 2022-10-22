import axios from "axios";
import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SettingUpHabit from "./SettingUpHabit";
import { urlAPI } from "../../constants/urls";
import { AuthContext } from "../../context/auth";
import MyHabit from "./MyHabit";

export default function HabitsPage() {

    const [listaHabitos, setListaHabitos] = useState([]);
    const {infoUser} = useContext(AuthContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${infoUser.token}`
        }
    }

    useEffect(() => {
        const requisicao = axios.get(`${urlAPI}habits`, config);
        requisicao.then((e) => setListaHabitos(e.data));
    });

    return (
        <Container>
            <Header />
            <Content>
                <div>
                    <p>Meus hábitos</p>
                    <button onClick={() => (alert("Adicionar hábito"))}>+</button>
                </div>
                <SettingUpHabit/>
                {listaHabitos.map((h, index) => <MyHabit name={h.name} days={h.days} id={h.id} key={index}/>)}
            </Content>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    background: #E5E5E5;
    height: 100vh;
    width: 100vw;
`

const Content = styled.div`
    & > div:nth-child(1){
        display:flex;
        justify-content: space-between;
        margin: 26px 0 20px;
        padding: 0 18px 0;

        p{
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }
    }

    > div > button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border-color: #52B6FF;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
`

