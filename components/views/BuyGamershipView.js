import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import GamershipPlaneInfo from '../GamershipPlaneInfo';

export default class BuyGamershipView extends Component {

    constructor(){
        super();
        this.state = {
            current: 0
        }
    }

    render() {
        return (
            <View>
                <View style={[styles.tabTitle , styles.shadow]}>
                    <Text style={{textAlign: 'center', color: '#BA8B49', fontWeight: 'bold'}}>Comprar Gamership</Text>
                </View>
                <ScrollView style={styles.mainContainer}>
                    <View style={styles.cardContainer}>
                        <GamershipPlaneInfo
                            months="1"
                            prefix="Mes"
                            price="$59.99"
                            checked={this.state.current === 0}
                            onClick={() => this.setState({current: 0})}
                        />
                        <GamershipPlaneInfo
                            months="3"
                            prefix="Meses"
                            price="$179.99"
                            checked={this.state.current === 1}
                            onClick={() => this.setState({current: 1})}
                        />
                        <GamershipPlaneInfo
                            months="6"
                            prefix="Meses"
                            price="$299.99"
                            checked={this.state.current === 2}
                            onClick={() => this.setState({current: 2})}
                        />
                        <GamershipPlaneInfo
                            months="12"
                            prefix="Meses"
                            price="$1499.99"
                            checked={this.state.current === 3}
                            onClick={() => this.setState({current: 3})}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
        paddingTop: 0,
        height: '100%'
    },
    cardContainer:{
        height: 720,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
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