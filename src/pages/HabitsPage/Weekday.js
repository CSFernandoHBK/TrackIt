import { useState } from "react";
import styled from "styled-components";

export default function Weekday(props) {

    const {dia, diasSelecionados, setDiasSelecionados} = props;

    const [clicado, setClicado] = useState(false);

    function incluirDia(dia){
        setClicado(!clicado);
        setDiasSelecionados(...diasSelecionados, dia);
    }

    console.log(diasSelecionados);

    return(
        <Day onClick={() => incluirDia({dia})} 
        clicado={clicado}>
            {dia}
        </Day>
    )

}

const Day =styled.button`
    background: ${(props) => (props.clicado ? "#CFCFCF" : "#FFFFFF")};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 19.976px;
    line-height: 25px;
    color: ${(props) => (props.clicado ? "#FFFFFF" : "#CFCFCF")};
    margin-right: 5px;
`