import { View, Text, FlatList, StyleSheet } from "react-native";
import EventItem from "@/components/EventItem";

export default function HomeScreen() {
  const matches = [
    {
      id: "1",
      title: "Anticipated football clash between Gullyside FC Vs Ruaka FC",
      date: "21 Feb 2025 - 4:00p.m",
      location: "Township grounds, Kiambu Town",
      image: require("@/assets/images/image 1.png"),
      update: [
        "Kick-off at 4:00p.m",
        "Halftime: 0-0",
        "John Kimani 78'",
      ],
      eventType: "football",
    },
    {
      id: "2",
      title: "Beautiful Wedding Ceremony: James & Anne",
      date: "10 Mar 2025 - 12:00p.m",
      location: "Serena Hotel, Nairobi",
      image: require("@/assets/images/wedding-update.jpg"),
      update: [
        "Guests arriving",
        "Ceremony started",
        "Vows exchanged!",
      ],
      eventType: "wedding",
    },
    {
      id: "3",
      title: "Traditional Ruracio Ceremony",
      date: "5 Apr 2025 - 10:00a.m",
      location: "Nyeri County",
      image: require("@/assets/images/image 1.png"),
      update: [
        "Family introductions",
        "Bride price negotiation ongoing",
      ],
      eventType: "ruracio",
    },
    {
      id: "4",
      title: "Community Harambee Fundraiser",
      date: "15 May 2025 - 2:00p.m",
      location: "City Hall, Nairobi",
      image: require("@/assets/images/image 1.png"),
      update: [
        "Opening remarks",
        "Donations ongoing",
        "Funds raised: Ksh 500,000",
      ],
      eventType: "harambee",
    },
  ];  

  return (
    <View style={styles.container}>
      {/* Text-based Logo */}
      <Text style={styles.title}>⚽ Football Matches & Events</Text>
      {/* Match List */}
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventItem {...item} />}
        showsVerticalScrollIndicator={true} 
        contentContainerStyle={styles.listContainer} // Added spacing
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20, // Adds spacing below the list
  },
});


