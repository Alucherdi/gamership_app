import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';

import ItemCard from '../ItemCard.js'

const data = {
    title: 'PROYECTO ZED',
    urlImage: 'https://news-a.akamaihd.net/public/images/articles-latam/2015/september_2015/RPZ/LOL.LATAM.Project.Zed_header_image.jpg'
}

export default class HistorialView extends Component {

    render() {
        return (
            <View>
                <View style={[styles.tabTitle , styles.shadow]}>
                    <Text style={{textAlign: 'center', color: '#BA8B49', fontWeight: 'bold'}}>Historial</Text>
                </View>
                <ScrollView style={styles.mainContainer}>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        paddingTop: 0
    },
    shadow: {
		shadowOpacity: 0.50,
		shadowRadius: 8,
		shadowColor: '#000'
    },
    tabTitle: {
        backgroundColor: '#f2f2f2',
        paddingBottom: 5
    }
});