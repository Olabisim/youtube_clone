import React from 'react'
import { StyleSheet, Text, View, Image, Dimension, Dimensions } from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';


const Card = ( ) => {


        return (

                <View>
                
                        <Image 
                                source={{uri: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"}}
                                style={{ 
                                        width: "100%",
                                        height: 200
                                }}
                        />

                        <View style={{
                                flexDirection: "row",
                                margin: 5
                        }}>

                                <MaterialIcons name="account-circle" size={40} />

                                <View
                                        style={{
                                                marginLeft: 10
                                        }}
                                >

                                        <Text 
                                                style={{
                                                        fontSize: 15,
                                                        fontWeight: '600',
                                                        width: Dimensions.get("screen").width - 50
                                                }}
                                                ellipsizeMode='tail'
                                                numberOfLines={2}
                                        >
                                                this is an amazing course
                                        </Text>

                                        <Text>this is an amazing course</Text>
                                
                                </View>
                        </View>
                
                </View>

        )

}

export default Card;


// 
                                // <MaterialIcons name="account-circle" size={40} color={myColor} />