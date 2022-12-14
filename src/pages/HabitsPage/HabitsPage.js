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
    const [render, setRender] = useState(false);
    const {infoUser} = useContext(AuthContext);
    const [isActiveNewHabit, setIsActiveNewHabit] = useState(false);

    const config = {
        headers: {
            "Authorization": `Bearer ${infoUser.token}`
        }
    }

    useEffect(() => {
        const requisicao = axios.get(`${urlAPI}habits`, config);
        requisicao.then((e) => setListaHabitos(e.data));
        requisicao.catch((e) => alert(e.response.data.message));
    }, []);

    return (
        <Container>
            <Header imagem={infoUser.image}/>
            <Content>
                <div>
                    <p>Meus hábitos</p>
                    <button onClick={() => (setIsActiveNewHabit(!isActiveNewHabit))}>+</button>
                </div>
                {(isActiveNewHabit ? 
                <SettingUpHabit
                isActiveNewHabit={isActiveNewHabit}
                setIsActiveNewHabit={setIsActiveNewHabit}
                render={render}
                setRender={setRender}
                setListaHabitos={setListaHabitos}/> 
                : null)}
                {listaHabitos.length === 0 
                ? 
                <h3>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h3> 
                : null}
                {listaHabitos.map((h, index) => 
                <MyHabit name={h.name} 
                days={h.days} 
                id={h.id}
                setRender={setRender}
                render={render}
                setListaHabitos={setListaHabitos}
                key={index}
                />)}
            </Content>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    background: #E5E5E5;
    width: 100vw;
    height: 100vh;
`

const Content = styled.div`
    padding-bottom: 120px;

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

    h3{
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        padding: 0 18px 0;
    }
`

