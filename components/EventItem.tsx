import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ImageSourcePropType } from "react-native";
import { getBackgroundImage } from "@/constants/eventBackgrounds"; // Import from external file

interface EventItemProps {
  title: string;
  date: string;
  location: string;
  image: ImageSourcePropType;
  updates: string[]; 
  eventType: string; // Determines background
}

export default function EventItem({ title, date, location, image, updates, eventType }: EventItemProps) {
  return (
    <ImageBackground
      source={getBackgroundImage(eventType)} // Dynamically set background
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.row}>
            <Ionicons name="calendar-outline" style={styles.icon} />
            <Text style={styles.text}>{date}</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="location-outline" style={styles.icon} />
            <Text style={styles.text}>{location}</Text>
          </View>
        </View>


      {updates && updates.length > 0 && (
          <View style={styles.updateContainer}>
            <ScrollView
              style={styles.scrollArea}
              nestedScrollEnabled
              showsVerticalScrollIndicator={false}
            >
              {updates.map((item, index) => (
                <Text key={index} style={styles.updateText}>
                  • {item}
                </Text>
              ))}
            </ScrollView>
          </View>
        )}
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "relative",
    width: "100%",
    height: 500,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 10,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  backgroundImage: {
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
  },
  content: {
    padding: 20,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: 166.7,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  text: {
    color: "#ccc",
    marginLeft: 5,
  },
  icon: {
    color: "#fff",
    fontSize: 20,
  },
  updateContainer: {
    width: "100%",
    marginTop: 15,
  },
  scrollArea: {
    maxHeight: 80, // limit height to simulate wrap_content with scroll
  },
  updateText: {
    color: "#ccc",
    fontSize: 12,
    marginBottom: 4,
  },
});



