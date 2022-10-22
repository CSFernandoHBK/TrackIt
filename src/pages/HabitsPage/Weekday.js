import { useState } from "react";
import styled from "styled-components";

export default function Weekday(props) {

    const {dia, index, indexDiasSelecionados, setIndexDiasSelecionados} = props;

    const [clicado, setClicado] = useState(false);

    function incluirDia(index){
        if(indexDiasSelecionados.includes(index)){
            const arrayFiltrada = indexDiasSelecionados.filter((v) => (v !== index))
            setIndexDiasSelecionados(arrayFiltrada);
            return(
                setClicado(!clicado)
            )
        }
        setClicado(!clicado);
        setIndexDiasSelecionados([...indexDiasSelecionados, index]);
    }

    return(
        <Day onClick={() => incluirDia(index)} 
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