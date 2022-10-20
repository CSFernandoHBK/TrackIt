import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SettingUpHabit from "./SettingUpHabit";

export default function HabitsPage() {
    return (
        <Container>
            <Header />
            <Content>
                <div>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </div>
                <div>
                    <SettingUpHabit/>
                    <SettingUpHabit/>
                </div>
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
    div{
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

