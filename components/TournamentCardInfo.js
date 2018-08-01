import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TournamentCardInfo extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <Image
                    source={{ uri: 'https://media.metrolatam.com/2018/06/26/fortniteplayground-a09c8e82196bd0f5871d3c44d10e9c4b-1200x600.jpg' }}
                    style={styles.image}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>Fortnite 2v2 Duos by MarioMe</Text>
                    <Text style={styles.infoText}>
                        <Icon name="user" size={15} /> 13/20
                    </Text>
                    <Text style={styles.infoText}>
                        <Icon name="calendar" size={15} /> DD/MM/YYYY - DD/MM/YYYY
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 100,
        marginTop: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        borderRadius: 10
    },
    image: {
        flex: 1,
    },
    infoContainer: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#d6d6d6',
        padding: 5,
        justifyContent: 'space-around'
    },
    infoText: {
        color: '#333333'
    }
})