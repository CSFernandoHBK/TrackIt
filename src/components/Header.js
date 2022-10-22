import styled from "styled-components"
import { useContext } from "react"
import { AuthContext } from "../context/auth"

export default function Header() {
    const {InfoUser} = useContext(AuthContext);

    return(
        <Container>
            <p>TrackIt</p>
            <img src={null}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0;
    background: #126BA5;
    width: 100vw;
    height: 70px;

    img{
        height: 51px;
        width: 51px;
        border-radius: 50%;
    }

    p{  
        font-family: 'Playball', cursive;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
`