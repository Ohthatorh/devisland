import { FC, useRef, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { ratio, screenWidth } from "../../../utils/functions/dimensions";
import { variables } from "../../../services/global/variables";

interface IProductItemImages {}

export const ProductItemImages: FC<IProductItemImages> = ({ images }) => {
  const isCarousel = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);
  const renderItem = ({ item, index }) => {
    return (
      <Image
        source={{
          uri: item,
        }}
        style={styles.img}
      />
    );
  };
  return (
    <View style={styles.view}>
      <Carousel
        slideStyle={styles.slide}
        layout="default"
        layoutCardOffset={12}
        ref={isCarousel}
        data={images}
        renderItem={renderItem}
        sliderWidth={screenWidth / 2 - 16}
        itemWidth={screenWidth / 2 - 16}
        inactiveSlideShift={currentImage}
        useScrollView={true}
        onSnapToItem={(index) => setCurrentImage(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={currentImage}
        carouselRef={isCarousel}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={false}
        containerStyle={styles.dotContainer}
        dotContainerStyle={styles.dot}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: screenWidth / 2 - 32,
    height: 400 * ratio,
    resizeMode: "contain",
  },
  slide: {
    padding: 8,
    backgroundColor: "#f7f8f9",
    borderRadius: variables.borderRadiusLarge,
  },
  view: {
    marginBottom: 24,
  },
  dotContainer: {
    position: "absolute",
    paddingHorizontal: 0,
    paddingVertical: 0,
    bottom: 12,
    right: 12,
  },
  dot: {
    marginHorizontal: 2,
  },
});
