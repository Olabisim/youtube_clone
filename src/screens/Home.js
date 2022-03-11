import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'


const Home = () => {

        return (
                // the main reason for it bacause some part of the last contents are hidden 
                <View style={{ flex: 1}}>
                
                
                        <Header />
                        
                        <ScrollView>

                                <Card />
                        
                        </ScrollView>

                        
                </View>
        );

}

export default Home;

// <>
// <Header />

// <ScrollView>

//         <Card />

// </ScrollView>
// </>