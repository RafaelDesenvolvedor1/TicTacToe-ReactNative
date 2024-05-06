import React, { useState } from "react";
import { View, Text, Modal } from "react-native";

//Styled component
import { Btn, Container, TabuleiroContainer, Span, Mark, JogadorDoMomento } from "../../style";
import ModalContent from "../ModalContent";


export default function TelaJogo() {
    const [jogador, setJogador] = useState('X')
    const [tabuleiro, setTabuleiro] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ])
    const [jogadasRestantes, setJogadasRestantes] = useState(9)

    // TELA RESULTADO (MODAL)
    const [visible,setVisible]=useState(false)
    const [ganhador,setGanhador]=useState('')
    const [status,setStatus]=useState(false)


    function jogar(coluna,linha){
        tabuleiro[coluna][linha]=jogador
        setTabuleiro([...tabuleiro])

        setJogador(jogador==='X' ? 'O':'X')

        verificarVencedor(tabuleiro,coluna,linha)
    }

    function verificarVencedor(tabuleiro,linha, coluna){
        //LINHAS
        if(tabuleiro[linha][0] !=='' && tabuleiro[linha][0]===tabuleiro[linha][1] && tabuleiro[linha][1]===tabuleiro[linha][2]){
           return finalizarJogo(tabuleiro[linha][0])
        }
        //COLUNAS
        if(tabuleiro[0][coluna] !=='' && tabuleiro[0][coluna]===tabuleiro[1][coluna] && tabuleiro[1][coluna]===tabuleiro[2][coluna]){
           return finalizarJogo(tabuleiro[0][coluna])
        }

        //DIAGONAL 1
        if(tabuleiro[0][0] !=='' && tabuleiro[0][0]===tabuleiro[1][1] && tabuleiro[1][1]===tabuleiro[2][2]){
           return finalizarJogo(tabuleiro[0][0])
        }
        //DIAGONAL 2
        if(tabuleiro[0][2] !=='' && tabuleiro[0][2]===tabuleiro[1][1] && tabuleiro[1][1]===tabuleiro[2][0]){
           return finalizarJogo(tabuleiro[0][2])
        }

        //NENHUM JOGADOR

        if((jogadasRestantes-1)===0){
            return finalizarJogo('')
        }
        setJogadasRestantes((jogadasRestantes-1))
    }

    function finalizarJogo(jogador){

        if(jogador===''){
            setStatus(false)
        }else{
            setGanhador(jogador)
            setStatus(true)
        }
        setVisible(true)
 
    }


    return (
        <Container>

            {
                tabuleiro.map((coluna,colunaKey)=>{
                    return(
                        <TabuleiroContainer key={colunaKey}>
                            {
                                coluna.map((linha,linhaKey)=>{
                                    return(
                                        <Btn 
                                        disabled={linha !== ''}
                                        key={linhaKey} 
                                        onPress={()=>jogar(colunaKey,linhaKey)}>
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

            <Modal visible={visible}>
                <ModalContent text={ganhador} status={status}/>
            </Modal>
        </Container>
    )
}
