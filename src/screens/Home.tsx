import React from "react";

import { StackScreenProps } from "@react-navigation/stack";
import { ThemeContext } from "../utils/ThemeContext";
import AnibleHeader from "../../assets/anible_header.svg";
import { ScrollView, StyleSheet, View } from "react-native";
import { getCommonStyles } from "../utils/CommonStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Settings } from "react-native-feather";
import { Text } from "react-native";
import HomeHeaderText from "../components/HomeHeaderText";
import HomeAnimeListItem from "../components/HomeAnimeListItem";

type Props = StackScreenProps<StackParamList, "Home">;

export default function Home(_navProps: Props) {
  let { theme } = React.useContext(ThemeContext);

  const styles = getCommonStyles(theme);

  const ls = StyleSheet.create({
    headerView: {
      paddingVertical: 20,
      paddingHorizontal: 25,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    padded: {
      paddingStart: 25,
      paddingEnd: 25,
    },
  });

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        {/* Header */}
        <View style={{ ...ls.headerView, ...ls.padded }}>
          <AnibleHeader fill={theme.text} />
          <Settings stroke={theme.text} style={{ marginTop: 12 }} />
        </View>

        {/* Body */}
        <View>
          {/* Currently watching section */}
          <HomeHeaderText
            uncoloredText="Currently"
            coloredText="watching"
            theme={theme}
            style={ls.padded}
          />
          <Text
            style={{
              ...styles.textSemiBold,
              fontSize: 22,
              color: "#f44336",
              ...ls.padded,
            }}
          >
            soon tm
          </Text>

          {/* Recently watched section */}
          <HomeHeaderText
            uncoloredText="Recently"
            coloredText="watched"
            theme={theme}
            style={{ marginBottom: 12, ...ls.padded }}
          />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingEnd: 20 }}
          >
            <View style={{ width: 25 }} />
            <HomeAnimeListItem
              image={require("../../assets/samples/BokuNoHero.png")}
              name="Boku no Hero Academia"
              year="2019"
              genre="Fantasy"
            />
            <HomeAnimeListItem
              image={require("../../assets/samples/Saenai.png")}
              name="Saenai Heroine no Sodatekata"
              year="2020"
              genre="Romance"
            />
            <HomeAnimeListItem
              image={require("../../assets/samples/IdkWhich.png")}
              name="Rappu Toppu Coora"
              year="3069"
              genre="Jetto Costa"
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
