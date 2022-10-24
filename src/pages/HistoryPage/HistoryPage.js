import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useContext, useState } from "react";
import { urlAPI } from "../../constants/urls";
import { AuthContext } from "../../context/auth";

export default function HistoryPage() {
    const {infoUser} = useContext(AuthContext);

    return (
        <Container>
            <Header imagem={infoUser.image}/>
            <Content>
                <div>
                    <h1>Histórico</h1>  
                </div>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Content>
            <Footer />
        </Container>
    )
}

const Container = styled.div`

`

const Content = styled.div`
    padding: 0 18px 0;

    & > div:nth-child(1){
            display:flex;
            justify-content: space-between;
            margin: 26px 0 20px;

            h1{
                font-size: 22.976px;
                line-height: 29px;
                color: #126BA5;
            }
    }

    p{
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    }
`
