import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
  } from 'react-native'


class Counter extends Component{
    state = {
        count : 0,
    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.onPress}>
                    <Text>
                        Count
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text>You touch {this.state.count} times</Text>
                </View>
            </View>
        )
    }
}

export default Counter;