import React from 'react';

import {View, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';

const BokuNoHeroImg = require('../../assets/samples/BokuNoHero.png');

export default function HomeAnimeListItem() {
  const ls = StyleSheet.create({
    commonDimens: {
      height: 200,
      width: 140,
    },
    text: {
      color: '#fbfbfb',
      fontFamily: 'Inter-Bold',
    },
  });

  return (
    <View style={ls.commonDimens}>
      {/* Cover Image */}
      <Image source={BokuNoHeroImg} style={{...ls.commonDimens, borderRadius: 6}} />
      {/* Gradient for readability */}
      <LinearGradient colors={['#FFFFFF00', 'rgba(0, 0, 0, 0.9)']} style={{...ls.commonDimens, borderRadius: 6, position: 'absolute'}} />
      {/* Anime detail text */}
      <View style={{...ls.commonDimens, position: 'absolute', justifyContent: 'flex-end', padding: 8}}>
        <Text style={{...ls.text, fontSize: 18.5, marginBottom: 2}}>Boku no Hero Academia</Text>
        <Text style={{...ls.text, fontFamily: 'Inter-SemiBold', fontSize: 13, color: '#d1d1d1'}}>2021 • Fantasy</Text>
      </View>
    </View>
  );
}
