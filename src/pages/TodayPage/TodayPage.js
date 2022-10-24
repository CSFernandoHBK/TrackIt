import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HabitCard from "./HabitCard";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import { urlAPI } from "../../constants/urls";
import axios from "axios";
import dayjs from "dayjs";
import ReactLoading from "react-loading";
import CabecalhoProgresso from "./CabecalhoProgresso";
import { locale } from "../../../node_modules/dayjs/locale/pt-br";


export default function TodayPage() {
    const {infoUser} = useContext(AuthContext);
    const [habitosHoje, setHabitosHoje] = useState([]);
    const [quantHabConcluidos, setquantHabConcluidos] = useState(0);
    
    let now = dayjs().locale("pt-br").format('dddd, DD/MM');

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

    return(
        <Container>
            <Header imagem={infoUser.image}/>
            <Content>
                <div>
                    <h1>{now}</h1>
                    <CabecalhoProgresso habitosHoje={habitosHoje} />
                </div>
                {habitosHoje.length === 0 
                ? 
                <ReactLoading type="spokes" color="#126BA5"/>
                :
                null}
                {habitosHoje.map((h, index) => 
                <HabitCard 
                name={h.name} 
                id={h.id}
                done={h.done}
                currentSequence={h.currentSequence}
                highestSequence={h.highestSequence}
                setHabitosHoje={setHabitosHoje}
                key={index}
                />)}
            </Content>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    background: #E5E5E5;
    width: 100vw;
    height: 90vh;
    padding-bottom: 120px;
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
`
