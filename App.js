/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import timelapse from './assets/images/timelapse.png';
import markOne from './assets/images/mark.png';
import markTwo from './assets/images/mark-two.png';
import lane from './assets/images/lane.png';
import Station from './Components/Station';
import MenOne from './assets/images/men-one.png';
import MenTwo from './assets/images/men-two.png';
import MenThree from './assets/images/men-three.png';
import LaneOne from './assets/images/lane-one.png';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.header}>
            <Text style={styles.headerOne}>Travel Route</Text>
            <View style={styles.timeContainer}>
              <Image source={timelapse} style={styles.timeImage} />
              <Text style={styles.timeText}>39 min</Text>
            </View>
          </View>
          <View style={styles.headerTwo}>
            <Image source={markOne} style={styles.markOne} />
            <Text style={styles.headerTwoText}>8:21 am</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.StationContainer}>
              {/* TO BE MAPPED */}
              <Station
                color="#E94F4F"
                stops={[
                  {name: 'maharani bag', gapSeconds: 300},
                  {name: 'moolchand', gapSeconds: 1000},
                  {name: 'Andrew', gapSeconds: 9000},
                ]}
                image={MenOne}
              />
              <Station
                color="#E0AC96"
                stops={[
                  {name: 'maharani bag', gapSeconds: 300},
                  {name: 'moolchand', gapSeconds: 1000},
                  {name: 'Andrew', gapSeconds: 9000},
                ]}
                image={MenTwo}
              />
              <Station
                image={MenThree}
                color="#F065C1"
                stops={[
                  {name: 'maharani bag', gapSeconds: 9000},
                  {name: 'moolchand', gapSeconds: 9000},
                  {name: 'Andrew', gapSeconds: 9000},
                  {name: 'maharani bag', gapSeconds: 9000},
                  {name: 'moolchand', gapSeconds: 100},
                  {name: 'Qutub Minar', gapSeconds: 700},
                  {name: 'Andrew', gapSeconds: 1000},
                  {name: 'maharani bag', gapSeconds: 300},
                  {name: 'moolchand', gapSeconds: 1000},
                  {name: 'Andrew', gapSeconds: 3000},
                ]}
              />
              <Station
                color="#AD6989"
                stops={[
                  {name: 'maharani bag', gapSeconds: 9000},
                  {name: 'moolchand', gapSeconds: 9000},
                  {name: 'Andrew', gapSeconds: 9000},
                ]}
                image={MenTwo}
              />

              {/*  */}
            </View>
          </View>
          <View style={{...styles.headerTwo}}>
            <Image source={markTwo} style={styles.markOne} />
            <Text style={styles.headerTwoText}>9:15 am</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
    backgroundColor: '#F6F6FC',
    padding: 24,
  },

  box: {
    height: '100%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: 'rgba(14, 16, 26, 0.075)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerOne: {
    fontSize: 20,
    lineHeight: 25,
    color: '#3B3B3B',
  },
  timeContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  timeImage: {
    height: 17,
    width: 17,
    marginRight: 6,
  },
  timeText: {
    color: '#1C3CC2',
  },
  headerTwo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },
  headerTwoText: {
    color: '#4C4444',
    fontSize: 15,
    lineHeight: 20,
  },
  markOne: {
    height: 44,
    width: 44,
    marginRight: 12,
  },
  main: {
    paddingHorizontal: 16,
    marginTop: 6,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 28,
  },
  StationContainer: {
    marginLeft: 24,
  },
});

export default App;
