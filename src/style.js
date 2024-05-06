import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    colors:['#3d3d3d', '#2d2d2d'],
    start:{x:1, y:0},
    end: {x:1, y:1},
})`
    flex:1;
    justify-content:center;
    align-items:center;
    gap:24px;
`

export const Img=styled.Image`
    height: 200px;
    width: 200px;
    /* margin-bottom:24px; */
`

export const Titulo=styled.Text`
    color: #f1f1f1;
    text-transform: uppercase;
    font-style:italic;
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 36px;
`



/* Componente BTN */

export const BtnContainer=styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    /* justify-content: space-evenly; */
    background-color: #f1f1f1;
    height: 80px;
    width: 80%;
    margin-top: 12px;
    border-radius: 50px;
    padding-left: 32px;
    gap:12px;
    
`

export const BtnText=styled.Text`
    font-size: 28px;
    font-weight: bold;
    text-transform: uppercase;
    
`

/* -------------- */

/* Tela de Jogo */

export const TabuleiroContainer=styled.View`
    flex-direction: row;
    gap: 16px;
`

export const Btn=styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    background-color: #f1f1f1;
    justify-content: center;
    align-items: center;
`

export const Span=styled.Text`
    color: #f1f1f1;
    font-size: 28px;
    margin-top: 32px;
`

export const Mark=styled.Text`
    font-size: 28px;
    font-weight:bold;
`
export const JogadorDoMomento=styled.Text`
    font-size: 60px;
    font-weight:bold;
    text-transform: uppercase;
`