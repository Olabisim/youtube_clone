import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';


const myColor = "black";


export default function Home() {


        return (

                <View style = {styles.rootView}>

                        <View style={styles.youtubeDir}>
                                
                                <Entypo 
                                        style={{marginLeft: 20}}
                                        name="youtube" 
                                        size={24} color="red" />

                                <Text style= {styles.youtubeText}> Youtube </Text>

                        </View>



                        <View style={styles.otherIconsView}>
                        
                                <Ionicons name="md-camera-reverse-outline" size={24} color={myColor} />
                                <Ionicons name="search-outline" size={24} color={myColor} />
                                <MaterialIcons name="account-circle" size={24} color={myColor} />
                        
                        </View>
                   
                        
                </View>
        )

}



const styles = StyleSheet.create({

        rootView : { 
                height: 40,
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                elevation: 4
        },

        youtubeDir : {

                flexDirection: "row",
                margin: 5

        },


        youtubeText: {

                fontSize: 22,
                marginLeft: 5,
                fontWeight: "bold",
                color: myColor

        },

        otherIconsView : {

                flexDirection: "row",
                justifyContent: "space-around",
                width: 120,
                margin: 5

        }

})