import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const ls = StyleSheet.create({
  commonDimens: {
    height: 220,
    width: "100%",
  },
  text: {
    color: "#fbfbfb",
    fontFamily: "Inter-SemiBold",
  },
});

export default (
  props: {
    item: {
      imgUrl: string;
      title: string;
      body: string;
    };
    index: number;
  },
) => {
  return (
    <View
      style={{ ...ls.commonDimens, marginRight: 10, elevation: 7 }}
      key={props.index}
    >
      {/* Cover Image */}
      <Image
        source={{ uri: props.item.imgUrl }}
        style={{ ...ls.commonDimens, borderRadius: 8 }}
      />
      {/* Gradient for readability */}
      <LinearGradient
        colors={["#FFFFFF00", "rgba(0, 0, 0, 0.94)"]}
        style={{ ...ls.commonDimens, borderRadius: 8, position: "absolute" }}
      />
      {/* Anime detail text */}
      <View
        style={{
          ...ls.commonDimens,
          position: "absolute",
          justifyContent: "flex-end",
          padding: 14,
        }}
      >
        <Text style={{ ...ls.text, fontSize: 18.5, marginBottom: 2 }}>
          {props.item.title}
        </Text>
        <Text
          style={{
            ...ls.text,
            fontFamily: "Inter-Regular",
            fontSize: 13,
            color: "#d1d1d1",
          }}
        >
          {props.item.body}
        </Text>
      </View>
    </View>
  );
};

// export default (
//   props: {
//     item: {
//       imgUrl: string;
//       title: string;
//       body: string;
//       sliderWidth: number;
//       itemWidth: number;
//     };
//     index: number;
//   },
// ) => {
//   return (
//     <View style={ls.container} key={props.index}>
//       <Image
//         source={{ uri: props.item.imgUrl }}
//         style={ls.image}
//       />
//       <Text style={ls.header}>{props.item.title}</Text>
//       <Text style={ls.body}>{props.item.body}</Text>
//     </View>
//   );
// };
