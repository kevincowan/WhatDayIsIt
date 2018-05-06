/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

type Props = {};
export default class App extends Component<Props> {

  checkDay(day){
    const currentDay = new Date().toString().split(' ')[0];
    return (currentDay === day);
  }

  render() {
    return (

      <View style={styles.container}>
        <Grid>

          <Row backgroundColor="indianred">
          <View style={styles.container}>
            <Text style={styles.rowtext}>Monday</Text>
            <View style={(this.checkDay('Mon'))? styles.circle : styles.nocircle}/>
            </View>
          </Row>

          <Row backgroundColor="yellow">
          <View style={styles.container}>
            <Text style={styles.rowtext}>Tuesday</Text>
            <View style={(this.checkDay('Tue'))? styles.circle : styles.nocircle}/>
            </View>
          </Row>

          <Row backgroundColor="skyblue">
          <View style={styles.container}>
            <Text style={styles.rowtext}>Wednesday</Text>
            <View style={(this.checkDay('Wed'))? styles.circle : styles.nocircle}/>
            </View>
          </Row>

          <Row backgroundColor="green">
          <View style={styles.container}>
            <Text style={styles.rowtext}>Thursday</Text>
            <View style={(this.checkDay('Thu'))? styles.circle : styles.nocircle}/>
            </View>
          </Row>

          <Row backgroundColor="purple">
          <View style={styles.container}>
            <Text style={styles.rowtext}>Friday</Text>
            <View style={(this.checkDay('Fri'))? styles.circle : styles.nocircle}/>
            </View>
          </Row>

          <Row backgroundColor="pink">
          <View style={styles.container}>
            <Text style={styles.rowtext}>Saturday</Text>
            <View style={(this.checkDay('Sat'))? styles.circle : styles.nocircle}/>
            </View>
          </Row>

          <Row backgroundColor="orange">
          <View style={styles.container}>
            <Text style={styles.rowtext}>Sunday</Text>
            <View style={(this.checkDay('Sun'))? styles.circle : styles.nocircle}/>
            </View>
          </Row>

        </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'white',
    borderWidth: 1,
  },
  rowtext: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    backgroundColor: 'white',
    margin: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  nocircle: {
  }
});
