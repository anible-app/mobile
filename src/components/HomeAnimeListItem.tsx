import React from 'react';

import {View, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';

export default function HomeAnimeListItem(props: {image: any; name: string; year: string; genre: string}) {
  const ls = StyleSheet.create({
    commonDimens: {
      height: 220,
      width: 140,
    },
    text: {
      color: '#fbfbfb',
      fontFamily: 'Inter-Bold',
    },
  });

  return (
    <View style={{...ls.commonDimens, marginRight: 10, elevation: 10}}>
      {/* Cover Image */}
      <Image source={props.image} style={{...ls.commonDimens, borderRadius: 8}} />
      {/* Gradient for readability */}
      <LinearGradient colors={['#FFFFFF00', 'rgba(0, 0, 0, 0.94)']} style={{...ls.commonDimens, borderRadius: 8, position: 'absolute'}} />
      {/* Anime detail text */}
      <View style={{...ls.commonDimens, position: 'absolute', justifyContent: 'flex-end', padding: 10.5}}>
        <Text style={{...ls.text, fontSize: 18.5, marginBottom: 2}}>{props.name}</Text>
        <Text style={{...ls.text, fontFamily: 'Inter-SemiBold', fontSize: 13, color: '#d1d1d1'}}>
          {props.year} • {props.genre}
        </Text>
      </View>
    </View>
  );
}
