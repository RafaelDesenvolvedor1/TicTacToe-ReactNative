import React, { useState } from "react";
import { View, Text } from "react-native";

//Styled component
import { Btn, Container, TabuleiroContainer, Span, Mark, JogadorDoMomento } from "../../style";


export default function TelaJogo() {
    const [jogador, setJogador] = useState('X')
    const [tabuleiro, setTabuleiro] = useState([
        ['X', 'O', ''],
        ['', '', ''],
        ['', '', ''],
    ])
    const [jogadasRestantes, setJogadasRestantes] = useState(9)

    return (
        <Container>

            {
                tabuleiro.map((coluna,colunaKey)=>{
                    return(
                        <TabuleiroContainer>
                            {
                                coluna.map((linha,linhaKey)=>{
                                    return(
                                        <Btn>
                                            {
                                                linha==='X' ? 
                                                <JogadorDoMomento 
                                                style={{
                                                    color:'#e32d2d'
                                                }}>{linha}</JogadorDoMomento>
                                                :
                                                <JogadorDoMomento
                                                style={{
                                                    color:'#0606f0'
                                                }}>{linha}</JogadorDoMomento>
                                            }
                                        </Btn>
                                    )
                                })
                            }
                        </TabuleiroContainer>
                    )
                })
            }

            <Span>
                É a vez do jogador: 
                {
                    jogador ==='X' ? <Mark style={{color:'#e32d2d'}}> {jogador}</Mark> : <Mark style={{color:'#0606f0'}}> {jogador}</Mark>
                }
            </Span>
        </Container>
    )
}