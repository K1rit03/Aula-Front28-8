import styled from "styled-components"

const HeaderCab = styled.header`
    border: 3px solid royalblue;
    padding: 10px;

    h1{
        text-align: center;
        
    }

    .par1{
        color: red;
    }

    .par2{
        color: blue;
    }
`


export default function Cabecalho(){
    return(
        <HeaderCab>
            <h1>React-CSS</h1>
            <p className="par1">Paragrafo 1</p>
            <p className="par2">Paragrafo2</p>
        </HeaderCab>
    )
}