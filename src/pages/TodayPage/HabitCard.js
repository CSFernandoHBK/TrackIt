import { useState } from "react";
import styled from "styled-components";
import completed from "../../assets/images/completed.png";

export default function HabitCard(props) {

    const {name, id, done, currentSequence, highestSequence} = props;

    const [concluido, setConcluido] = useState(false)

    function concluirHabito(){
        
    }

    return(
        <Container concluido={concluido}>
            <div>
                <h1>{name}</h1>
                <h2>Sequência atual: {currentSequence} dias</h2>
                <h2>Seu recorde: {highestSequence} dias</h2>
            </div>
            <div onClick={() => setConcluido(!concluido)}>
                <img src={completed}/>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0;
    margin-bottom: 10px;
    
    img{
        width: 35px;
        height: 28px;
    }

    & > div:nth-child(2){
        width: 69px;
        height: 69px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${(props) => (props.concluido ? "#8FC549" : "#EBEBEB")};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }

    h1{
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }

    h2{
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`