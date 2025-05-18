import React, { useState, useMemo } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import EventItem from "@/components/EventItem";
import { Eye, EyeOff } from "lucide-react-native"; // Requires lucide-react-native installed
import { parse } from "date-fns";

export default function HomeScreen() {
  const [expanded, setExpanded] = useState(false);
  const matches = [
    {
      id: "1",
      title: "Anticipated football clash between Gullyside FC Vs Ruaka FC",
      date: "21 Feb 2025 - 4:00p.m",
      location: "Township grounds, Kiambu Town",
      image: require("@/assets/images/image 1.png"),
      updates: [
        "Kick-off at 4:00p.m",
        "Halftime: 0-0",
        "John Kimani 78'",
        "Kick-off at 4:00p.m",
        "Halftime: 0-0",
        "John Kimani 78'",
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
      updates: [
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
      updates: [
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
      updates: [
        "Opening remarks",
        "Donations ongoing",
        "Funds raised: Ksh 500,000",
      ],
      eventType: "harambee",
    },
  ];  

  const closestEvent = useMemo(() => {
    const parsedMatches = matches.map((match) => ({
      ...match,
      parsedDate: parse(match.date, "dd MMM yyyy - h:mma", new Date()),
    }));
  
    parsedMatches.sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime());
  
    return parsedMatches[0];
  }, [matches]);  

  return (
    <View style={styles.container}>
      {/* Inverted TopSheet */}
      <View style={styles.topSheet}>
        <View style={styles.topSheetHeader}>
          <Text style={styles.topSheetTitle}>
            {closestEvent.title}
          </Text>
          <TouchableOpacity onPress={() => setExpanded((prev) => !prev)}>
            {expanded ? (
              <EyeOff color="#fff" size={24} />
            ) : (
              <Eye color="#fff" size={24} />
            )}
          </TouchableOpacity>
        </View>
        {expanded && (
          <View style={styles.topSheetDetails}>
            <Text style={styles.detailText}>📅 {closestEvent.date}</Text>
            <Text style={styles.detailText}>📍 {closestEvent.location}</Text>
            <Text style={styles.detailText}>📝 Updates:</Text>
            {closestEvent.updates.map((u, idx) => (
              <Text key={idx} style={styles.detailText}>• {u}</Text>
            ))}
          </View>
        )}
      </View>

      {/* Events List */}
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventItem {...item} />}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 8,
    paddingTop: 20,
  },
  topSheet: {
    backgroundColor: "#1f1f1f",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
  },
  topSheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topSheetTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    paddingRight: 8,
  },
  topSheetDetails: {
    marginTop: 10,
  },
  detailText: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 4,
  },
  listContainer: {
    paddingBottom: 20,
  },
});
