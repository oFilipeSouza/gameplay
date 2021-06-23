import React from "react";
import { styles } from "./styles";
import { ScrollView, View } from "react-native";

import { categories } from "../../utils/categories";
import { Category } from "../Category";


type Props = {
    categorySelected: number;
    setCategory: (categoryId: number) => void;
}

export function CategorySelect({ categorySelected, setCategory }: Props) {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[
                styles.container,
                { paddingRight: 40 }
            ]}
        >

            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                    />
                ))
            }

        </ScrollView>

    )
}