/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Station = ({style, stops, color, image}) => {
  const [expand, setExpand] = useState(false);

  const value = stops.reduce((prev, next) => prev + next.gapSeconds, 0);

  console.log(value);

  return (
    <View style={style}>
      <View>
        <Text style={{...styles.StationName, color: color}}>
          Sarai Kale Khan
        </Text>
        <View
          style={{
            backgroundColor: color,
            width: 13,
            borderRadius: 1000,
            position: 'absolute',
            left: -28,
            height: expand ? 100 + stops.length * 20 + value / 100 : 105,
          }}
        />
        <View
          style={{
            ...styles.dot,
            width: 8,
            height: 8,
            left: -26,
          }}
        />
      </View>
      <Text style={{color: '#5C5968', marginTop: 5, marginBottom: 8}}>
        {stops.length} Stops
      </Text>
      <View style={styles.StopContainer}>
        {expand ? (
          <View>
            {stops.map((val, key) => {
              return (
                <View
                  style={{
                    marginTop:
                      val.gapSeconds / 100 > 90 ? 90 : val.gapSeconds / 100,
                  }}>
                  <Text
                    key={key}
                    style={{
                      color: '#979797',
                      letterSpacing: 1,
                      fontSize: 10,
                      lineHeight: 20,
                      position: 'relative',
                    }}>
                    {val.name}
                  </Text>
                  <View style={styles.dot} />
                </View>
              );
            })}
            <TouchableOpacity onPress={() => setExpand(!expand)}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: '#7B7B7B',
                  marginTop: 12,
                  marginBottom: 4,
                  fontSize: 11,
                }}>
                Hide all {stops.length} stations
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => setExpand(!expand)}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: '#7B7B7B',
                fontSize: 11,
              }}>
              Show all {stops.length} stations
            </Text>
          </TouchableOpacity>
        )}
        <View style={styles.imageContainer}>
          <Text>{Math.floor(value / 60)} min</Text>
          <Image source={image} style={{marginTop: 6}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  StationName: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '500',
    letterSpacing: 1,
  },
  StopContainer: {
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignSelf: 'center',
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 100,
    backgroundColor: '#FFF',
    position: 'absolute',
    top: 8,
    left: -24,
  },
});

export default Station;
