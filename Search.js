import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';



const SearchScreen = () => {


        const [value, setValue] = useState('')

        return (
                <View style={{flex: 1}}>

                        <View style = {{padding: 5, flexDirection: "row", justifyContent: "space-around", elevation : 5, backgroundColor: "white"}}>

                                <AntDesign name="back" size={24} color="black" />

                                <TextInput 
                                        style = {{width: "70%", backgroundColor: "#e6e6e6"}}
                                        value={value}
                                        onChangeText={(text) => setValue(text)}
                                />

                                <Feather name="send" size={24} color="black" />

                        </View>
                
                </View>
        )
}


export default SearchScreen