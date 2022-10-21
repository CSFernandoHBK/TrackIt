import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HabitCard from "./HabitCard";

export default function TodayPage() {
    return(
        <Container>
            <Header/>
            <Content>
                <div>
                    <h1>Segunda, 17/05</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                </div>
                <HabitCard/>
                <HabitCard/>
                <HabitCard/>
                <HabitCard/>
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
