import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function HabitsPage() {
    return (
        <Container>
            <Header />
            <Content>
                <p>Meus hábitos</p>
                <button>+</button>
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
    display:flex;
    justify-content: space-between;

    p{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
`

