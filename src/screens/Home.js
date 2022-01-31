import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'


export default function Home() {

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