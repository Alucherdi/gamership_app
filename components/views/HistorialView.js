import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';

import ItemCard from '../ItemCard.js'
import RewardController from '../controllers/Reward.controller.js';

export default class HistorialView extends Component {
	constructor(props) {
        super(props)        
		this.state = {
            user: this.props.navigation.state.params.user,
            rawRewards: []
		}
    }

    getRewards(){        
		var rewards = {}
		for (var reward of this.state.rawRewards) {
			rewards[reward.reward_id] = reward
		}
		return rewards
    }

    componentDidMount = () =>{
        var controller = new RewardController()
        controller.getRewards(this.state.user.email).then(rewards =>{
            this.setState({
                rawRewards: rewards
            })
        })
        
    }

    render() {
        var items = this.state.user.rewards.map((reward, index) => {                        
            if(reward.used){
                var rawRewards = this.getRewards();
                if(rawRewards[reward.reward_id]){
                    var obj = rawRewards[reward.reward_id]
                    var data = {
                        name: obj.name,
                        image: obj.image,
                        type: obj.type,
                        description: 'Ve a caja y pide que te escaneen el siguiente código QR para que disfrutes de 1 HORA de juego en Arena The Place to Play',
                        date: 'xx/xx/xx',
                        consumable: reward.consumable
                    }                   
                    return (
                        <ItemCard navigation={this.props.navigation} data={data} key={index}/>
                    )
                }                
            }
        })
        return ( 
            <View>
                <View style={[styles.tabTitle , styles.shadow]}>
                    <Text style={{textAlign: 'center', color: '#BA8B49', fontWeight: 'bold'}}>Inventario</Text>
                </View>
                <ScrollView style={styles.mainContainer}>
                    {items}
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