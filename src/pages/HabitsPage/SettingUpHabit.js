import styled from "styled-components"

export default function SettingUpHabit() {
    return (
        <Container>
            <input placeholder="nome do hábito" />
            <ContainerSemana>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </ContainerSemana>
            <div>
                <button>Cancelar</button>
                <button>Salvar</button>
            </div>
        </Container>
    )
}

const ContainerSemana = styled.div`
    > button{
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    } 
`

const Container = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    height: 180px;
    padding: 18px 18px 15px;
    display: flex;
    flex-direction: column;
    
    input{
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-top: 20px;
    }

    div:nth-child(3){
        display: flex;
        justify-content: flex-end;
    }
`