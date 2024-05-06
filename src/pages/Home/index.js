import React from "react";
import { View, Text, Image, StatusBar } from "react-native";


// Styled Components
import { Container, Img, Titulo } from "../../style";

//Componentes externos
import BtnPrimary from "../../assets/components/Btn";

//navegacao
import { useNavigation } from "@react-navigation/native";


export default function Home(){
    const nav=useNavigation()

    function jogar(){
        nav.navigate('TelaJogo')
    }
    return(
        
        <Container>
                  <StatusBar barStyle='light-content' translucent={true} backgroundColor={'#2d2d2d'}/>
            <Img
                source={require('../../assets/img/logo.png')}
            />
            <Titulo>Jogo da Velha</Titulo>

            <BtnPrimary
                icon='user-group'
                text='vs player'
                event={jogar}
            />
            <BtnPrimary
                icon='microchip'
                text='vs IA'
            />
        </Container>
    )
}