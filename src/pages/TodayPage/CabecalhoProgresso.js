import { useEffect, useState } from "react";
import styled from "styled-components";

export default function CabecalhoProgresso(props) {
    const{habitosHoje} = props;
    const [habitosFeitos, sethabitosFeitos] = useState([]);


    useEffect(() => {
      sethabitosFeitos(habitosHoje.filter((h) => (h.done === true)));
      }
    , [habitosHoje])

    const porcentagem = Math.round((habitosFeitos.length/habitosHoje.length)*100);
        
    if(habitosFeitos.length === 0){
        return(
            <h2>Nenhum habito concluído ainda</h2>
        )
    }

    if(habitosHoje.length === 0){
        return(
            <Texto>Nenhum habito concluído ainda</Texto>
        ) 
    } else {
        return(
            <Texto porcentagem={porcentagem}>{porcentagem}% dos hábitos concluídos</Texto>
        )
    }
}

const Texto = styled.h2`
    font-size: 17.976px;
    line-height: 22px;
    color: ${(props) => (props.porcentagem>0 ? "#8FC549" : "#BABABA")};
`