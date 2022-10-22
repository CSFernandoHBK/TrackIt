import styled from "styled-components";
import deleteIcon from "../../assets/images/deleteIcon.png";
import { daysAb } from "../../constants/days";

export default function MyHabit(props) {
    
    const {name, days, id} = props;

    return (
        <Container>
            <div>
                <h1>{name}</h1>
                <div>
                    {daysAb.map((d, index) => (
                        <Day index={index} key={index}>{d}</Day>
                    ))}
                </div>
            </div>
            <img onClick={() => alert("Habito excluido")} src={deleteIcon} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 5px;
    height: 90px;
    padding: 13px 15px 15px;
    margin: 20px 18px 0;

    h1{
        margin-bottom: 8px;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    & > div:nth-child(1) :nth-child(2){
        display: flex;
    }

    img{
        height: 15px;
        width: 13px;
    }
`

const Day = styled.div`
    background: ${(props) => (props.clicado ? "#CFCFCF" : "#FFFFFF")};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19.976px;
    line-height: 25px;
    color: ${(props) => (props.clicado ? "#FFFFFF" : "#CFCFCF")};
    margin-right: 5px;
`