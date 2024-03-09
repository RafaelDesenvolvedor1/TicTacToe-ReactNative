import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { BtnContainer, BtnText } from "../../../style";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

export default function BtnPrimary(props){
    return(
        <BtnContainer
            onPress={props.event}
        >
            <FontAwesome6
                name={props.icon}
                size={48}
                color='#000'
            />
            <BtnText>{props.text}</BtnText>
        </BtnContainer>
    )
}

