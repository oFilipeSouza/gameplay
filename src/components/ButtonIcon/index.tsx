import { func } from "prop-types";
import React from "react";

import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from "./styles";

type Props = TouchableOpacityProps & { //Adicionar todas a propriedades do TouchableOpacity + as que forem adicionadas manualmente
    title: string;
}

export function ButtonIcon({ title, ...rest }: Props) { //Passando todas as Props ao Componente criado
    return (
        <TouchableOpacity style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg}
                    style={styles.icon}></Image>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
