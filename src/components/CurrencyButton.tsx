import React from 'react'
import type { PropsWithChildren } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    value: number;
    flag: string;
    symbol: string;

}>



const CurrencyButton = (props: CurrencyButtonProps) => {

  return (
    <View>
        <Text style={[styles.flag]} >{props.flag}</Text>
        <Text style={[styles.name]} >{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    name: {
        fontSize: 14,
        color: "#2d3436",
    
    }
})


export default CurrencyButton