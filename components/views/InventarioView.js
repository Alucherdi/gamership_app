import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import ItemCard from '../ItemCard.js'

const data = {
    title: '1 HORA - ARENA THE PLACE TO PLAY',
    urlImage: 'https://www.lineupmx.com.mx/wp-content/uploads/2017/09/Arena-The-Place-To-Play.jpg'
}

export default class InventarioView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: this.props.navigation.state.params.user
		}
	}
	
    render() {
        return (
            <View>
                <View style={[styles.tabTitle , styles.shadow]}>
                    <Text style={{textAlign: 'center', color: '#BA8B49', fontWeight: 'bold'}}>Inventario</Text>
                </View>
                <ScrollView style={styles.mainContainer}>
					{this.state.user.rewards.map((reward, index) => {
						return (
							<ItemCard navigation={this.props.navigation} data={reward} key={index}/>
						)
					})}
                    {/* <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/>
                    <ItemCard navigation={this.props.navigation} data={data}/> */}
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