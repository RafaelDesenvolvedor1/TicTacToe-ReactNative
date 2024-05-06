import React from "react";
import { View} from "react-native";

import { Container, Span, Titulo, Btn, JogadorDoMomento } from "../../style";
import BtnPrimary from "../../assets/components/Btn";
import { StackActions, useNavigation } from "@react-navigation/native";

export default function ModalContent(props) {
    const navigation = useNavigation()

    if (props.status) {
        return (
            <Container>
                <Titulo>Fim de Jogo</Titulo>


                <Span >O vencedor foi o jogador:</Span>

                <Btn disabled={true} style={{ marginBottom: 28 }}>
                    {
                        props.text === 'X' ?
                            <JogadorDoMomento
                                style={{
                                    color: '#e32d2d'
                                }}>{props.text}</JogadorDoMomento>
                            :
                            <JogadorDoMomento
                                style={{
                                    color: '#0606f0'
                                }}>{props.text}</JogadorDoMomento>
                    }
                </Btn>


                <BtnPrimary
                    text='Jogar Novamente'
                    icon='arrows-rotate'
                    event={()=>{
                        navigation.dispatch(StackActions.popToTop())
                        navigation.navigate('TelaJogo')
                    }}
                />
                <BtnPrimary
                    text='Tela inicial'
                    icon='house'
                    event={() => {
                        navigation.dispatch(StackActions.popToTop())
                    }}
                />
            </Container>
        )
    } else {
        return (
            <Container>
                <Titulo>Fim de Jogo</Titulo>


                <Span style={{textTransform:'uppercase'}}>Empate</Span>


                <View style={{flexDirection:'row', gap:16}}>
                    <Btn disabled={true} style={{ marginBottom: 28 }}>

                        <JogadorDoMomento
                            style={{
                                color: '#e32d2d'
                            }}>X</JogadorDoMomento>

                    </Btn>
                    <Btn disabled={true} style={{ marginBottom: 28 }}>

                        <JogadorDoMomento
                            style={{
                                color: '#0606f0'
                            }}>O</JogadorDoMomento>

                    </Btn>
                </View>

                <BtnPrimary
                    text='Jogar Novamente'
                    icon='arrows-rotate'
                    event={()=>{
                        navigation.dispatch(StackActions.popToTop())
                        navigation.navigate('TelaJogo')
                    }}
                />
                <BtnPrimary
                    text='Tela inicial'
                    icon='house'
                    event={() => {
                        navigation.dispatch(StackActions.popToTop())
                    }}
                />
            </Container>
        )
    }

}
