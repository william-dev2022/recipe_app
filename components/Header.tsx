import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
            <View>
                <Text style={{ color: 'indigo', fontWeight: 'bold', fontSize: 18, }}>Hello Williams</Text>
                <Text style={{ color: 'gray' }}>what would you like to cook today?</Text>
            </View>
            <Image source={require("../assets/bg.jpg")}
                style={{ width: 45, height: 45, borderRadius: 20 }} />
        </View>
    )
}