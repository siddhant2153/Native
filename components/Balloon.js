import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated, Button } from 'react-native';
import { styles } from './Style'; // Import the styles

class BalloonInflationAnimation  extends Component {
  constructor() {
    super();
    this.state = {
      balloonSize: new Animated.Value(50), // Initial balloon size
    };
  }

  // Function to inflate the balloon
  inflateBalloon = () => {
    Animated.timing(this.state.balloonSize, {
      toValue: 120, // Final size of the balloon
      duration: 2000, // Animation duration in milliseconds
      useNativeDriver: false,
    }).start();
  };

  render() {
    const { balloonSize } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.balloon,
            {
              width: balloonSize,
              height: balloonSize,
            },
          ]}
        />
        <TouchableOpacity onPress={this.inflateBalloon} style={styles.button}>
          <Text style={styles.buttonText}>PRESS HERE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Form')} style={styles.button}>
          <Text style={styles.buttonText}>FORM</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BalloonInflationAnimation ;
