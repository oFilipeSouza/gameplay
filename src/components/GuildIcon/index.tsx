import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

export function GuildIcon() {
    const uri = 'https://bit.ly/2UgF6Cx';
    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    )

}