import React from "react";

import { StackScreenProps } from "@react-navigation/stack";
import { ThemeContext } from "../utils/ThemeContext";
import AnibleHeader from "../../assets/anible_header.svg";
import { ScrollView, StyleSheet, View } from "react-native";
import { getCommonStyles } from "../utils/CommonStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Settings } from "react-native-feather";
import HomeHeaderText from "../components/HomeHeaderText";
import HomeAnimeListItem from "../components/HomeAnimeListItem";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCard from "../components/CarouselCard";
import { Dimensions } from "react-native";

type Props = StackScreenProps<StackParamList, "Home">;

const data = [
  {
    title: "Hyouka",
    body:
      "Energy-conservative high school student Oreki ends up with more than he bargained for when he signs up for the Classics Club at his sister's behest, and is dragged into an investigation.",
    imgUrl: "https://www.epicdope.com/wp-content/uploads/2020/06/Hyouka.jpg",
  },
  {
    title: "Saenai Heroine no Sodatekata",
    body:
      "Tomoya Aki has been obsessed with collecting anime and light novels for years, attaching himself to series with captivating stories and characters. Now, he wants to make his own game.",
    imgUrl: "https://i.ytimg.com/vi/EPIIB1rbE2U/maxresdefault.jpg",
  },
  {
    title: "Oregairu",
    body:
      "Hachiman Hikigaya is an apathetic high school student with narcissistic and semi-nihilistic tendencies. He firmly believes that joyful youth is nothing but a farce.",
    imgUrl:
      "https://otakukart.com/wp-content/uploads/2020/04/Oregairu-Season-3.jpg",
  },
];

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function Home(_navProps: Props) {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
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
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
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

          <View
            style={{
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Carousel
              layout="default"
              layoutCardOffset={9}
              ref={isCarousel}
              data={data}
              // @ts-ignore TODO inspect the types
              renderItem={CarouselCard}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              onSnapToItem={(ind) => setIndex(ind)}
              useScrollView={true}
            />

            <Pagination
              dotsLength={data.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: theme.accentTwo,
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={false}
            />
          </View>

          {/* Recently watched section */}
          <HomeHeaderText
            uncoloredText="Recently"
            coloredText="watched"
            theme={theme}
            style={{ ...ls.padded, marginTop: -2 }}
          />
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 12 }}
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
      </ScrollView>
    </SafeAreaView>
  );
}
