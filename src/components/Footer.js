import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Footer() {
    return(
        <Container>
            <Link to={"/habitos"}><p>Hábitos</p></Link>
            <Link to={"/hoje"}><HabitMeter>Hoje</HabitMeter></Link>
            <Link to={"/historico"}><p>Histórico</p></Link>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    background:#FFFFFF;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px 0;

    p{
        font-size: 17.976px;
        line-height: 22px;
        color: #52B6FF;
    }

    a{
        text-decoration: none;
    }
`

const HabitMeter = styled.div`
    background: #52B6FF;
    height: 91px;
    width: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 55px;
    font-size: 17.976px;
    line-height: 22px;
    color: #FFFFFF;
`