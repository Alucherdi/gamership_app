import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import TournamentCardInfo from '../TournamentCardInfo'

export default class TournamentsView extends Component {

    render() {
        return (
            <View>
                <View style={[styles.tabTitle , styles.shadow]}>
                    <Text style={{textAlign: 'center', color: '#BA8B49', fontWeight: 'bold'}}>Torneos Gamership</Text>
                </View>
                <ScrollView style={styles.mainContainer}>
                    <TournamentCardInfo/>
                    <TournamentCardInfo/>
                    <TournamentCardInfo/>
                    <TournamentCardInfo/>
                    <TournamentCardInfo/>
                    <TournamentCardInfo/>
                    <TournamentCardInfo/>
                    <TournamentCardInfo/>
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