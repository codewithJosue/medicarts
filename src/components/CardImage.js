import { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Card } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";

const screenWidth = Dimensions.get("window").width;
const CardImage = ({ img, width = 380, height = 150 }) => {
  const [isVisible, setIsvisible] = useState(false);
  return (
    <>
      <TouchableOpacity onPress={() => setIsvisible(true)}>
        <Card style={{ margin: 10, flexDirection: "row", alignSelf: "center" }}>
          <Card.Cover
            style={{ width: width, height: height }}
            source={img}>

          </Card.Cover>
        </Card>
      </TouchableOpacity>
      <Modal
        visible={isVisible}
        animationType="slide"
        onRequestClose={() => setIsvisible(false)}>
        <ImageZoom img={img} closeModal={() => setIsvisible(false)} />
      </Modal>
    </>
  );
};

export default CardImage;

const ImageZoom = (props) => {
  const { img, closeModal } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.imageZoom} source={img} />
      <View style={styles.back}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <Animated.View style={[styles.buttom, styles.menu]}>
            <AntDesign name="close" size={24} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageZoom: {
    width: 400,
    height: Platform.OS === "ios" ? 500 : 400,
    top: 100,
  },
  back: {
    position: "absolute",
    alignItems: "center",
    marginLeft: 170,
    bottom: 100,
  },
  buttom: {
    //position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#F02A4B",
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
  },
  menu: {
    backgroundColor: "#F02A4B",
  },
});
