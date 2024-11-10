import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function UserListScreen() {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const renderUser = ({ item }) => (
    <View style={styles.userContainer}>
      <Image
        source={{ uri: "https://via.placeholder.com/50" }}
        style={styles.thumbnail}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>ID: {item.id}</Text>
        <Text>Username: {item.username}</Text>
        <Text>Email: {item.email}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Map", {
              lat: item.address.geo.lat,
              lng: item.address.geo.lng,
              name: item.name,
            })
          }
        >
          <Text style={styles.address}>
            Address: {item.address.street}, {item.address.city},{" "}
            {item.address.zipcode}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderUser}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  userContainer: { flexDirection: "row", marginBottom: 20 },
  thumbnail: { width: 50, height: 50, marginRight: 10 },
  infoContainer: { flex: 1 },
  name: { fontWeight: "bold", fontSize: 16 },
  address: { color: "blue", textDecorationLine: "underline" },
});
